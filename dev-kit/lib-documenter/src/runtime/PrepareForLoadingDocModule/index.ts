import { mountImportMap } from './utils'
import prepareCommonDeps from './prepareCommonDeps'

/** 模块加载路径规范 */
const moduleURLProtocals = {
  jsdelivr: (actualLoadPkgName, actualLoadPkgVersion) => {
    return {
      main: `https://cdn.jsdelivr.net/npm/${actualLoadPkgName}@${actualLoadPkgVersion}/dist/index.js`,
      doc: `https://cdn.jsdelivr.net/npm/${actualLoadPkgName}@${actualLoadPkgVersion}/dist/_doc.system.js`,
    }
  },
  unpkg: (actualLoadPkgName, actualLoadPkgVersion) => {
    return {
      main: `https://unpkg.com/${actualLoadPkgName}@${actualLoadPkgVersion}/dist/index.js`,
      doc: `https://unpkg.com/${actualLoadPkgName}@${actualLoadPkgVersion}/dist/_doc.system.js`,
    }
  },
}

export default function prepareForLoadingDocModule(docDef) {
  prepareCommonDeps()

  const protocalResolved = moduleURLProtocals.unpkg(
    docDef.actualLoadPkgName,
    docDef.actualLoadPkgVersion
  )

  const docModuleId = `doc@${docDef.actualLoadPkgName}@${docDef.actualLoadPkgVersion}`

  const importMap = {
    imports: {
      [docModuleId]: protocalResolved.doc,
    },
    scopes: {
      // 仅在protocalResolved.doc模块下解析docDef.prodPkgName这个名称，避免命名冲突
      [protocalResolved.doc]: {
        [docDef.prodPkgName]: protocalResolved.main,
      },
    },
  }

  mountImportMap(importMap)

  return docModuleId
}
