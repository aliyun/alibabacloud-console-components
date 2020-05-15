/* eslint-disable no-await-in-loop */
import path from 'path'
import babel from '@rollup/plugin-babel'
import { transform } from '@babel/core'
import * as enhancedResolve from 'enhanced-resolve'
import * as rollup from 'rollup'
import invariant from 'tiny-invariant'
import findPkgJson from 'read-pkg-up'
import findUp from 'find-up'
import fs from 'fs-extra'
import postcss from 'rollup-plugin-postcss'

/**
 * Load a module tree that starts with demoEntry.
 * Can only do relative import.
 * Deps from node_modules must be external.
 */
export async function loadDemoCode(
  demoEntry: string,
  canExternal: (request: string, from: string) => boolean | Promise<boolean>
) {
  const extensions = ['.js', '.jsx', '.ts', '.tsx']
  const strictResolve = enhancedResolve.create({
    // never resolve modules from node_modules
    modules: [],
    extensions,
  })
  const bundle = await rollup.rollup({
    input: demoEntry,
    plugins: [
      babel({
        babelrc: false,
        // no need to add preset-env, this bunle will be processed by outer rollup again
        presets: ['@babel/preset-typescript', '@babel/react'],
        babelHelpers: 'bundled',
        extensions,
      }),
      {
        name: 'demo-resolver',
        resolveId(request, from) {
          if (!from) {
            invariant(request === demoEntry)
            return null
          }
          // strict resolve only resolve relative path. never search node_modules.
          return new Promise((res, rej) => {
            strictResolve(path.dirname(from), request, async (err, result) => {
              if (err) {
                if (await canExternal(request, from)) {
                  res({ external: true, id: request })
                  return
                }
                // force user to mark deps from node_modules as "external"
                const wrapperErr: any = new Error(`Dependency can't be resolved. Please config this dependency as "external" explicitly.
                info: ${JSON.stringify({ request, from }, null, 2)}.`)
                wrapperErr.childError = err
                rej(wrapperErr)
                return
              }
              res(result)
            })
          })
        },
      },
      postcss({
        inject(cssVariableName) {
          return `__stylesθ["${cssVariableName}"] = ${cssVariableName}`
        },
      }),
    ],
  })
  const { output } = await bundle.generate({
    format: 'esm',
    dir: 'demo-out',
    exports: 'named',
  })
  invariant(
    output.length === 1,
    `demo should only bundle into one chunk. Please don't use dynamic import in it!.
          demoEntry: "${demoEntry}"`
  )
  const chunk = output[0]
  invariant(chunk.facadeModuleId === demoEntry)
  invariant(
    chunk.dynamicImports.length === 0,
    'Demo chunk should not have dynamicImports'
  )
  invariant(
    chunk.exports.includes('default'),
    `Demo module should have default export. demoEntry: ${demoEntry}`
  )
  if (!chunk.exports.includes('demoMeta')) {
    console.warn(`Demo module should export demoMeta. demoEntry: ${demoEntry}`)
  }
  const modules: {
    [key: string]: {
      code: string
      path: string
    }
  } = {}
  await Promise.all(
    bundle.watchFiles.map(async (filePath) => {
      invariant(await fs.pathExists(filePath))
      const relativePath = path.relative(path.dirname(demoEntry), filePath)
      modules[relativePath] = {
        path: filePath,
        code: await fs.readFile(filePath, 'utf-8'),
      }
    })
  )
  const entry = path.basename(demoEntry)
  invariant(modules[entry])
  const moduleCode = Object.keys(modules).reduce((acc, key) => {
    const { code } = modules[key]
    acc[key] = code
    return acc
  }, {})
  const externals = await resolveDemoExternals(chunk.imports, demoEntry)
  const demoModulesInfo = {
    entry,
    modules: moduleCode,
    externals,
  }
  const actualcodeESM = `
const __stylesθ = {};\n
${chunk.code};
export const __demoSrcInfo = ${JSON.stringify(demoModulesInfo)};
__demoSrcInfo.styles = __stylesθ;
`
  const actualCodeAMD = await new Promise((res, rej) => {
    transform(
      actualcodeESM,
      {
        plugins: ['@babel/plugin-transform-modules-amd'],
      },
      (err, result) => {
        if (err) rej(err)
        res(result?.code)
      }
    )
  })
  return {
    codeESM: actualcodeESM,
    codeAMD: actualCodeAMD,
    actualCodeAMD,
    info: { entry, modules, externals },
  }
}

/**
 * demo external掉的依赖，要找到这些依赖的版本，
 * 从而能在codesandbox中加载对应的版本。
 * 我们从package.json的dependencies或devDependencies找，或者demo-config.json。
 *
 * demo的dependency包含以下几种：
 * - 正在开发的npm包
 * - 正在开发的npm包的peerDependencies（比如moment、styled-components）
 * - demo本身引入的依赖（比如通过react-dnd在demo中加入拖拽能力）
 */
async function resolveDemoExternals(externals: string[], demoEntry: string) {
  const result = await findPkgJson({
    cwd: path.dirname(demoEntry),
  })
  const demoConfig = await resolveDemoConfig(demoEntry)

  invariant(result)
  const pkgJson = result.packageJson
  const map = {
    [pkgJson.name]: pkgJson.version,
    ...pkgJson.devDependencies,
    ...pkgJson.dependencies,
    ...demoConfig?.externals,
  }
  const externalsVersion = externals.reduce((acc, external) => {
    const version = map[external]
    // 检查所有的externals都已经显式指定
    invariant(
      typeof version === 'string',
      `Can't resolve version for demo's external dependency.
    demoEntry: ${demoEntry}
    dependency: ${external}`
    )
    acc[external] = version
    return acc
  }, {})

  return { ...externalsVersion, ...demoConfig?.externals }
}

async function resolveDemoConfig(startPath: string): Promise<IDemoConfig> {
  let demoConfig: IDemoConfig = {}
  const curPath = startPath
  do {
    const nextConfigPath = await findUp('demo-config.json', {
      type: 'file',
      cwd: curPath,
    })
    const nextConfig: IDemoConfig | undefined =
      nextConfigPath && (await fs.readJSON(nextConfigPath))
    if (!nextConfig) break
    demoConfig = mergeDemoConfig(demoConfig, nextConfig)
  } while (demoConfig.inherit)
  return demoConfig
}

function mergeDemoConfig(base: IDemoConfig, next: IDemoConfig): IDemoConfig {
  return {
    inherit: next.inherit ?? false,
    externals: {
      // 距离远的config被距离近的覆盖
      ...next.externals,
      ...base.externals,
    },
  }
}

export interface IDemoConfig {
  inherit?: boolean
  externals?: {
    [name: string]: string
  }
}
