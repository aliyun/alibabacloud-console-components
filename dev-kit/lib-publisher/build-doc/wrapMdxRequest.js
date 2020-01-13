const path = require('path')

module.exports = (reqInfo, virtualModules) => {
  // 不重定向那些“从虚拟模块发出的请求”
  if (/\/virtual-modules\//.test(reqInfo.contextInfo.issuer)) return
  // 只重定向那些“指向mdx的请求”
  // if (!/\.mdx$/.test(reqInfo.request)) return

  if (reqInfo.request === '@entry-mdx') {
    const requestPath = reqInfo.request
    const mockPath = path.join(
      reqInfo.context,
      'virtual-modules',
      reqInfo.request
    )

    virtualModules.writeModule(
      mockPath,
      `
import Mdx from '${requestPath}';
import MdxWrapper from '@runtime/MdxWrapper';
export default MdxWrapper(Mdx);
export * from '${requestPath}';
`
    )

    reqInfo.request = mockPath
    return
  }

  /*
  // 文件路径，可能不包含文件尾缀（比如省略".js"）
  const requestPath = path.join(reqInfo.context, reqInfo.request);
  const basename = path.basename(requestPath);
  const dirname = path.dirname(requestPath);
  const mockPath = path.join(dirname, "virtual-modules", basename);

  virtualModules.writeModule(
    mockPath,
    `
import Mdx from '${requestPath}';
import MdxWrapper from '@runtime/MdxWrapper';
export default MdxWrapper(Mdx);
export * from '${requestPath}';
`
  );

  reqInfo.request = mockPath;
  return;
  */
}
