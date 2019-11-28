/* eslint-disable */

import { Node } from 'acorn'
import { readdir, readFile, statSync } from 'fs'
import glob from 'glob'
import { dirname, join, relative } from 'path'
import { promisify } from 'util'
import * as webpack from 'webpack'
import ConstDependency from 'webpack/lib/dependencies/ConstDependency'
import ModuleDependency from 'webpack/lib/dependencies/ModuleDependency'
import NormalModule from 'webpack/lib/NormalModule'

export type WebpackModule = any

const readFileAsync = promisify(readFile)
const readDirAsync = promisify(readdir)

// breadth first search
// return [modules used by this demo]
async function collectDemoModules(
  entryModule: WebpackModule,
  shouldBeCollected: NonNullable<IDemoPluginParam['shouldBeCollected']>
) {
  // modules that need to be visited
  const BFSQueue: WebpackModule[] = [entryModule]
  // modules that have been visited
  const BFSSet = new Set<WebpackModule>()
  while (BFSQueue.length > 0) {
    const workingModule = BFSQueue.shift()!
    BFSSet.add(workingModule)
    const deps = workingModule.dependencies
      .filter(dependency => dependency instanceof ModuleDependency)
      .map(dependency => dependency.module)

    // async filter for `deps`
    const shouldCollect = await Promise.all(
      deps.map(
        async module =>
          module instanceof NormalModule &&
          (await shouldBeCollected(module, entryModule))
      )
    )

    const newModules = deps.filter(
      (module, index) => shouldCollect[index] && !BFSSet.has(module)
    )
    BFSQueue.push(...newModules)
  }
  return Array.from(BFSSet)
}

function removeDuplicateModules(modules: WebpackModule[]) {
  const modulePaths = new Set<string>()
  const result: WebpackModule[] = []
  modules.forEach(m => {
    if (modulePaths.has(m.resource)) {
      return
    }
    result.push(m)
    modulePaths.add(m.resource)
  })
  return result
}

async function findProjectTemplatePath(startDir: string) {
  let current = startDir
  while (true) {
    const list = await readDirAsync(current)
    const index = list.indexOf('.demoProjectTemplate')
    if (index !== -1) {
      const foundPath = join(current, '.demoProjectTemplate')
      if (!statSync(foundPath).isDirectory()) {
        throw new Error(`${foundPath} is not a directory`)
      }
      return foundPath
    }
    if (current === '/') {
      return null
    }
    current = join(current, '../')
  }
}

async function findPackageRoot(startDir: string) {
  let current = startDir
  while (true) {
    const list = await readDirAsync(current)
    const index = list.indexOf('package.json')
    if (index !== -1) {
      return current
    }
    if (current === '/') {
      return null
    }
    current = join(current, '../')
  }
}

async function loadProjectTemplate(projectTemplatePath: string) {
  const files = await new Promise<string[]>((res, rej) => {
    glob(
      '**/*',
      { cwd: projectTemplatePath, nodir: true, dot: true },
      (err, files2) => {
        if (err) {
          rej(err)
        }
        res(files2)
      }
    )
  })

  const projectFiles = files.filter(f => f !== 'projectTemplateConfig.js')
  if (files.length - 1 !== projectFiles.length) {
    // There is no "projectTemplateConfig.js" in 'files'
    throw new Error(
      `there should be a "projectTemplateConfig.js" in the project template: ${projectTemplatePath}`
    )
  }
  const projectTemplateConfig = require(join(
    projectTemplatePath,
    'projectTemplateConfig.js'
  ))

  const loadedFiles: { [key: string]: string } = {}
  await Promise.all(
    projectFiles.map(async projectFile => {
      const fileContent = await readFileAsync(
        join(projectTemplatePath, projectFile),
        'utf8'
      )
      loadedFiles[projectFile] = fileContent
    })
  )
  return { projectTemplateFiles: loadedFiles, projectTemplateConfig }
}

/**
 * merge source tree with projectTemplate.
 *
 * example:
 *
 * demo files in the source:
 * - folder
 *  - b.js(entryModule)
 *  - c.js
 * - a.js
 *
 * projectTemplate:
 * - index.js
 * - folder(baseDir)
 *
 * mergeDemoModulesWithProjectTemplate will generate this file tree:
 * - index.js
 * - folder
 *  - b.js
 *  - c.js
 * - a.js
 *
 * Algorithm:
 * first put entryModule(b.js) into baseDir.
 * then put other files(c.js, a.js) into projectTemplate, **keeping the same relative path with b.js**
 */
async function mergeDemoModulesWithProjectTemplate(
  demoModules: WebpackModule[],
  entryModule: WebpackModule,
  projectTemplatePath: string
) {
  const demoBaseDir = dirname(entryModule.resource)
  const projectTemplate = await loadProjectTemplate(projectTemplatePath)
  const mergedProjectFiles = {
    ...projectTemplate.projectTemplateFiles,
  }
  let entryModulePathInMergedProject
  await Promise.all(
    demoModules.map(async demoModule => {
      // demoModule.resource could be `path/to/module?query=value`
      const modulePath = demoModule.resource.split('?')[0]
      const relativePath = relative(demoBaseDir, modulePath)
      const pathInMergedProject = join(
        projectTemplate.projectTemplateConfig.baseDir,
        relativePath
      )
      if (demoModule === entryModule) {
        entryModulePathInMergedProject = pathInMergedProject
      }
      mergedProjectFiles[pathInMergedProject] = await readFileAsync(
        modulePath,
        'utf8'
      )
    })
  )
  mergedProjectFiles['demoMeta.json'] = JSON.stringify({
    entryPath: entryModulePathInMergedProject,
  })

  if (typeof projectTemplate.projectTemplateConfig.afterMerge === 'function') {
    projectTemplate.projectTemplateConfig.afterMerge(
      mergedProjectFiles,
      entryModulePathInMergedProject
    )
  }
  return mergedProjectFiles
}

interface IDemoPluginParam {
  shouldBeCollected?: (
    module: WebpackModule,
    entryModule: WebpackModule
  ) => boolean | Promise<boolean>
}

class DemoPlugin {
  private shouldBeCollected: NonNullable<IDemoPluginParam['shouldBeCollected']>

  constructor({
    shouldBeCollected: shouldBeCollectedArg = defaultShouldBeCollected,
  }: IDemoPluginParam = {}) {
    this.shouldBeCollected = shouldBeCollectedArg
  }

  public apply(compiler: webpack.Compiler) {
    compiler.hooks.normalModuleFactory.tap('testPlugin', factory => {
      factory.hooks.parser.for('javascript/auto').tap('testPlugin', parser => {
        parser.hooks.expression
          .for('__demo_loader_placeholder__')
          .tap('testPlugin', (expr: Node) => {
            // we will replace this content with correct value later
            const dep = new ConstDependency(
              '"placeholder for demoPlugin to inject value"',
              expr.range,
              false
            )
            dep.loc = expr.loc
            Object.defineProperty(dep, '__inject_demo_info__', {
              enumerable: false,
              value: true,
            })
            parser.state.current.addDependency(dep)
            return true
          })
      })
    })
    compiler.hooks.compilation.tap('testPlugin', compilation => {
      compilation.hooks.finishModules.tapPromise(
        'testPlugin',
        async (modules: any) => {
          await Promise.all(
            modules.map(async module => {
              const { loaders } = module
              if (
                loaders &&
                loaders.find(({ loader }) => /\/demoLoader\.js$/.test(loader))
              ) {
                // this module is an entry of demo
                const entryPath = module.resource
                const injectToDependency = module.dependencies.find(
                  dep => (dep as any).__inject_demo_info__
                )
                if (!injectToDependency) {
                  // this may be caused by using const enum with @babel/plugin-transform-typescript
                  // https://babeljs.io/docs/en/babel-plugin-transform-typescript.html
                  // tslint:disable-next-line: no-console
                  console.error(
                    `demo-plugin: can't find injectToDependency in ${entryPath}`
                  )
                  return
                }
                const demoModules = removeDuplicateModules(
                  await collectDemoModules(module, this.shouldBeCollected)
                )
                // debugger;
                const projectTemplatePath = await findProjectTemplatePath(
                  dirname(entryPath)
                )
                if (!projectTemplatePath) {
                  throw new Error(
                    `can not found .demoProjectTemplate upwards. demo entry: ${entryPath}`
                  )
                }
                const mergedProject = await mergeDemoModulesWithProjectTemplate(
                  demoModules,
                  module,
                  projectTemplatePath
                )
                ;(injectToDependency as any).expression = JSON.stringify(
                  mergedProject
                )
              }
            })
          )
        }
      )
    })
  }
}

module.exports = DemoPlugin

// map from module path => module package path
const packageRootCache = new Map<string, string | null>()

async function defaultShouldBeCollected(
  module: WebpackModule,
  entryModule: WebpackModule
) {
  const entryPath = entryModule.resource
  let packageRoot: string | null
  if (packageRootCache.has(entryPath)) {
    packageRoot = packageRootCache.get(entryPath) || null
  } else {
    packageRoot = await findPackageRoot(dirname(entryModule.resource))
    packageRootCache.set(entryPath, packageRoot)
  }
  const relativePath = relative(packageRoot || '', module.resource)
  if (
    // outside of current package root
    relativePath.startsWith('../') ||
    // in build directories
    relativePath.startsWith('lib/') ||
    relativePath.startsWith('es/') ||
    relativePath.startsWith('node_modules/')
  ) {
    return false
  }
  // console.log('collect module', relativePath);
  // debugger;
  return true
}
