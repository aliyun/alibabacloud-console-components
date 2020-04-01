const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const createCoreConfig = require('./webpack-chain.core').createConfig

module.exports.createConfig = ({
  entryMDX,
  rootDir,
  alias,
  externals,
  tsApiJson = path.resolve(rootDir, 'cc-dev-out', 'api-json', 'api.json'),
}) =>
  createCoreConfig({
    entryMDX,
    entryJS: path.resolve(__dirname, 'dev-index.tsx'),
    tsApiJson,
    alias,
    externals,
  })
    .mode('development')
    // add HtmlWebpackPlugin
    .plugin('HtmlWebpackPlugin')
    .use(HtmlWebpackPlugin, [
      {
        template: path.resolve(__dirname, 'dev-index.html'),
      },
    ])
    .end()
