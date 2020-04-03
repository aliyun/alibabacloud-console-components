/** 模块加载路径定义 */
const cdnURLProtocals = {
  jsdelivr: ({
    pkgName,
    version,
    path = 'dist/_doc.system.js',
  }: IUnpkgProtocalParam) => {
    return `https://cdn.jsdelivr.net/npm/${pkgName}@${version}/${path}`
  },
  unpkg: ({
    pkgName,
    version,
    path = 'dist/_doc.system.js',
  }: IUnpkgProtocalParam) => {
    return `https://unpkg.com/${pkgName}@${version}/${path}`
  },
  aliUnpkg: ({
    pkgName,
    version,
    path = 'dist/_doc.system.js',
  }: IUnpkgProtocalParam) => {
    return `https://unpkg.alibaba-inc.com/${pkgName}@${version}/${path}`
  },
  antUnpkg: ({
    pkgName,
    version,
    path = 'dist/_doc.system.js',
  }: IUnpkgProtocalParam) => {
    return `https://unpkg.alipay.com/${pkgName}@${version}/${path}`
  },
} as const

/** 解析模块加载的URL */
function resolveDocUrl(protocal: 'jsdelivr', param: IUnpkgProtocalParam): string
function resolveDocUrl(protocal: 'unpkg', param: IUnpkgProtocalParam): string
function resolveDocUrl(protocal: 'aliUnpkg', param: IUnpkgProtocalParam): string
function resolveDocUrl(protocal: 'antUnpkg', param: IUnpkgProtocalParam): string
function resolveDocUrl(
  protocal: keyof typeof cdnURLProtocals,
  param: IUnpkgProtocalParam
) {
  return cdnURLProtocals[protocal](param)
}

export default resolveDocUrl

interface IUnpkgProtocalParam {
  pkgName: string
  version: string
  path?: string
}
