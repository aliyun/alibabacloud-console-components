const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const merge = require('webpack-merge')
const path = require('./path')
const commonConfig = require('./webpack.common')

module.exports = (...args) => {
  return merge(commonConfig(...args), {
    cache: false,
    context: path.SRC,
    entry: {
      wind: [path.SRC_SASS_INDEX_FILE, path.SRC_INDEX_FILE],
      'wind.min': [path.SRC_SASS_INDEX_FILE, path.SRC_INDEX_FILE],
      'wind-noreset': path.SRC_SASS_NORESET_INDEX_FILE,
      'wind-noreset.min': path.SRC_SASS_NORESET_INDEX_FILE,
    },
    output: {
      path: path.BUNDLE,
      filename: '[name].js',
      library: 'wind',
      libraryTarget: 'umd',
    },
    externals: [
      {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react',
        },
      },
      {
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom',
        },
      },
      {
        moment: {
          root: 'moment',
          commonjs2: 'moment',
          commonjs: 'moment',
          amd: 'moment',
        },
      },
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          include: /\.min\.js$/,
        }),
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.min\.css$/,
        }),
      ],
    },
  })
}
