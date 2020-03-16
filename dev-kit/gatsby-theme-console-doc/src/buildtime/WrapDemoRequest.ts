const qs = require('qs')
const path = require('path')

module.exports = (reqInfo, virtualModules) => {
  // 不重定向那些“从虚拟模块发出的请求”
  if (/\/virtual-modules\//.test(reqInfo.contextInfo.issuer)) return

  const result = parseQuery(reqInfo.request)
  if (!result) return
  const [barePath, query] = result
  const parsed = qs.parse(query)

  // 只重定向那些包含 query.loadDemo 的模块请求，
  // 这种请求来自 dev-kit/gatsby-theme-console-doc/src/buildtime/remarkPlugins/linkInstructions/importDemo.ts
  if (query && parsed.loadDemo !== undefined) {
    // 文件路径，可能不包含文件尾缀（比如省略".js"）
    const requestPath = path.join(reqInfo.context, reqInfo.request)
    const basename = path.basename(barePath)
    const dirname = path.dirname(requestPath)
    const mockPath = path.join(dirname, 'virtual-modules', basename)

    virtualModules.writeModule(
      mockPath,
      `
const isSSR = typeof window === "undefined";
const loadingModule = import('${requestPath}').catch(reason => {
// 服务端渲染的时候，忽略异步引入的模块中的错误（可能是因为使用了window对象）
if (isSSR) return;
throw reason;
});
export default loadingModule;
`
    )

    reqInfo.request = mockPath
    return
  }
}

function parseQuery(request) {
  const split = request.split('?')
  if (split.length === 1) return [split[0], '']
  if (split.length === 2) return [split[0], split[1]]
  return null
}
