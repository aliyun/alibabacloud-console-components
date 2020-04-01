// 用户打包文档时需要external的依赖
const externalsArr = [
  '@mdx-js/react',
  'react',
  'react-dom',
  '@runtime/TypescriptMetadataRenderer/interface',
  '@runtime/DemoRenderer',
  '@runtime/MdxWrapper',
  'styled-components',
  '@alicloud/console-components',
  '@alicloud/console-components-fake-browser',
  'prop-types',
  function external(context, request, callback) {
    if (
      /style-loader\/dist\/runtime\/injectStylesIntoStyleTag\.js$/.test(request)
    ) {
      return callback(
        null,
        `style-loader/dist/runtime/injectStylesIntoStyleTag.js`
      )
    }
    return callback()
  },
  function external(context, request, callback) {
    if (/css-loader\/dist\/runtime\/api\.js$/.test(request)) {
      return callback(null, `css-loader/dist/runtime/api.js`)
    }
    return callback()
  },
]
exports.externalsArr = externalsArr
