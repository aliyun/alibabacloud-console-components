var HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const createCoreConfig = require('./webpack-chain.core').createConfig

module.exports.createConfig = ({ entryMDX, rootDir, prodPkgName }) =>
  createCoreConfig({
    entryMDX,
    rootDir,
    entryJS: path.resolve(__dirname, 'dev-index.jsx'),
  })
    .mode('development')
    .resolve.alias.set(
      '@runtime',
      '@alicloud/console-components-lib-documenter/lib/runtime'
    )
    // 让demo加载prodPkgName模块的时候，从src加载
    .set(prodPkgName, path.resolve(rootDir, 'src'))
    .end()
    .end()
    // add HtmlWebpackPlugin
    .plugin('HtmlWebpackPlugin')
    .use(HtmlWebpackPlugin, [
      {
        template: path.resolve(__dirname, 'dev-index.html'),
      },
    ])
    .end()
