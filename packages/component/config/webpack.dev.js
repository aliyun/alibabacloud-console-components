const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const env = require('./env')
const path = require('./path')

module.exports = (...args) => { // eslint-disable-line arrow-body-style
  return merge(commonConfig(...args), {
    mode: env.DEV,
    devServer: {
      port: process.env.DEV_PORT || 9090,
      hot: true,
      open: 'Google Chrome',
    },
    entry: {
      index: path.DEMO_INDEX_FILE,
    },
    output: {
      path: path.LIB,
      filename: '[name].js',
    },
    resolve: {
      alias: {
        '@alicloud/console-components': path.SRC_INDEX_FILE,
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve(path.DEMO, 'index.html'),
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  })
}
