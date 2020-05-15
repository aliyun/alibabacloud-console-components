import { Plugin } from 'rollup'
import invariant from 'tiny-invariant'
import path from 'path'
import queryString from 'query-string'
import { loadDemoCode } from './utils'

export function loadDemoPlugin(): Plugin {
  return {
    name: 'load',
    resolveId(source, importer) {
      if (source.endsWith('?loadDemo')) {
        invariant(importer, `"${source}" should have a importer.`)
        return path.resolve(path.dirname(importer), source)
      }
    },
    async load(id) {
      const request = queryString.parseUrl(id)
      if ('loadDemo' in request.query) {
        const demoEntry = request.url
        const rootRollupResolve = this.resolve.bind(this)

        const { codeAMD, info } = await loadDemoCode(
          demoEntry,
          async (importee, importer) => {
            return true
            // use root rollup instance to resolve demo dependency
            // const rootRes = await rootRollupResolve(importee, importer)
            // if (rootRes === null || !rootRes.external) {
            //   // force user to mark dependency of demo as "external"
            //   return false
            // }
            // return true
          }
        )

        Object.keys(info.modules).forEach(key => {
          const demoModule = info.modules[key]
          // watch demo files
          this.addWatchFile(demoModule.path)
        })
        const installDep = Object.keys(info.externals)
          .map((depName, idx) => {
            const varName = `Dep_${idx}`
            return `import * as ${varName} from "${depName}";
        loader.register("${depName}", ${varName});`
          })
          .join('\n')
        const result = `
        import { createLoader } from '@alicloud/console-components-lib-documenter/lib/runtime/amdLoader';
        const code = ${JSON.stringify(codeAMD)};
        const loader = createLoader();
        ${installDep}
        const module = loader.loadAMDFromString(code);
        export default module;
        `
        debugger
        return result
      }
    },
  }
}
