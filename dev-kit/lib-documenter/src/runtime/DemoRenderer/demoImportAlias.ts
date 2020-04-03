export interface IDemoImportAliasConfig {
  /** 在demo中用什么名称来import这个物料 */
  importName: string
  /** demo中实际加载的包名 */
  actualLoadPkgName: string
  /** demo中实际加载的包版本 */
  actualLoadPkgVersion: string
}

/**
 * 修改demo的package.json，让codesandbox正确解析依赖：
 * 将demo中的import xxx from '${importName}' 解析到
 * actualLoadPkgName的actualLoadPkgVersion版本
 */
export default function demoImportAlias(aliasConfig: IDemoImportAliasConfig) {
  return (demoInfoBeforeProcess) => {
    const demoFiles = (() => {
      const {
        importName,
        actualLoadPkgName,
        actualLoadPkgVersion,
      } = aliasConfig
      const pkgJson = JSON.parse(
        demoInfoBeforeProcess.demoFiles['package.json']
      )
      pkgJson.dependencies[actualLoadPkgName] = actualLoadPkgVersion

      const alias = pkgJson.alias || {}
      alias[importName] = actualLoadPkgName
      pkgJson.alias = alias
      return {
        ...demoInfoBeforeProcess.demoFiles,
        'package.json': JSON.stringify(pkgJson, null, 2),
      }
    })()
    return {
      ...demoInfoBeforeProcess,
      demoFiles,
    }
  }
}
