/** 模块加载路径定义 */
const cdnURLProtocals = {
  jsdelivr: ({ pkgName, version }) => {
    return `https://cdn.jsdelivr.net/npm/${pkgName}@${version}/`
  },
  unpkg: ({ pkgName, version }) => {
    return `https://unpkg.com/${pkgName}@${version}/`
  },
} as const

// 解析模块加载的URL
export default (
  cdnType: keyof typeof cdnURLProtocals,
  param: { pkgName: string; version: string },
  path = 'dist/_doc.system.js'
) => {
  const prefix = cdnURLProtocals[cdnType](param)
  return `${prefix}${path}`
}
