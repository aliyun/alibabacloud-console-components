import path from 'path'
import babel from 'rollup-plugin-babel'
import * as enhancedResolve from 'enhanced-resolve'
import * as rollup from 'rollup'
import invariant from 'tiny-invariant'
import findPkgJson from 'read-pkg-up'

export async function loadDemoCode(
  demoEntry: string,
  canExternal: (request: string, from: string) => boolean | Promise<boolean>
) {
  const extensions = ['.js', '.jsx', '.ts', '.tsx']
  const myResolve = enhancedResolve.create({
    // don't resolve demo modules from node_modules
    modules: [],
    extensions,
  })
  const bundle = await rollup.rollup({
    input: demoEntry,
    plugins: [
      babel({
        babelrc: false,
        presets: [
          ['@babel/env', { modules: false }],
          '@babel/preset-typescript',
          '@babel/react',
        ],
        extensions,
      }),
      {
        name: 'demo-resolver',
        resolveId(request, from) {
          if (!from) {
            invariant(request === demoEntry)
            return null
          }
          return new Promise((res, rej) => {
            myResolve(path.dirname(from), request, async (err, result) => {
              if (err) {
                if (await canExternal(request, from)) {
                  res({ external: true, id: request })
                  return
                }
                // force user to mark dependency of demo as "external"
                const wrapperErr: any = new Error(`Dependency of demo can't be resolved. Please config this dependency as "external" explicitly.
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
    ],
  })
  const { output } = await bundle.generate({
    format: 'esm',
  })
  invariant(
    output.length === 1,
    `demo should only bundle into one chunk. Please don't use dynamic import in it!.
          demoEntry: "${demoEntry}"`
  )
  const chunk = output[0]
  invariant(chunk.facadeModuleId === demoEntry)
  const modules: {
    [key: string]: {
      code: string
      path: string
    }
  } = bundle.cache.modules.reduce((acc, module) => {
    const { id: demoModulePath, originalCode } = module
    invariant(path.isAbsolute(demoModulePath))
    const relativePath = path.relative(path.dirname(demoEntry), demoModulePath)
    acc[relativePath] = { code: originalCode, path: demoModulePath }
    return acc
  }, {})
  const entry = path.basename(demoEntry)
  invariant(modules[entry])
  const moduleCode = Object.keys(modules).reduce((acc, key) => {
    const { code } = modules[key]
    acc[key] = code
    return acc
  }, {})
  const externals = await resolveDemoExternalVersion(chunk.imports, demoEntry)
  const demoModulesInfo = {
    entry,
    modules: moduleCode,
    externals,
  }
  const actualcode = `
${chunk.code};
export const __demoSrcInfo = ${JSON.stringify(demoModulesInfo)};
`
  return { actualcode, info: { entry, modules, externals } }
}

/**
 * demo external掉的依赖，要找到这些依赖的版本，
 * 从而能在codesandbox中加载对应的版本。
 * 我们从package.json的dependencies或devDependencies找
 */
async function resolveDemoExternalVersion(externals: string[], from: string) {
  const result = await findPkgJson({
    cwd: path.dirname(from),
  })
  invariant(result)
  const pkgJson = result.packageJson
  const map = {
    [pkgJson.name]: pkgJson.version,
    ...pkgJson.dependencies,
    ...pkgJson.devDependencies,
  }
  const externalsVersion = externals.reduce((acc, external) => {
    const version = map[external]
    invariant(
      typeof version === 'string',
      `can't resolve version for demo's external dependency.
    demo entry: ${from}
    dependency: ${external}`
    )
    acc[external] = version
    return acc
  }, {})
  return externalsVersion
}
