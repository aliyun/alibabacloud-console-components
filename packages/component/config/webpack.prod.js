const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const merge = require('webpack-merge')
const path = require('./path')
const commonConfig = require('./webpack.common')

const getExternalsConfig = externals =>
  externals.reduce((result, external) => {
    const [name, root] = external
    return {
      ...result,
      [name]: {
        commonjs: name,
        commonjs2: name,
        amd: name,
        root,
      },
    }
  }, {})

module.exports = (...args) => {
  return merge(commonConfig(...args), {
    cache: false,
    context: path.SRC,
    entry: {
      wind: [path.SRC_SASS_INDEX_FILE, path.SRC_INDEX_FILE],
      'wind.min': [path.SRC_INDEX_FILE, path.SRC_SASS_INDEX_FILE],
    },
    output: {
      path: path.BUNDLE,
      filename: '[name].js',
      library: 'wind',
      libraryTarget: 'umd',
    },
    externals: getExternalsConfig([
      ['react', 'React'],
      ['react-dom', 'ReactDOM'],
      ['moment', 'moment'],
      ['prop-types', 'PropTypes'],
    ]),
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
