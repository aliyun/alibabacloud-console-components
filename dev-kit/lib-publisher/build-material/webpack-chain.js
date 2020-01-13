const Config = require('webpack-chain')
const path = require('path')
const babelConfig = require('./babel.config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports.createConfig = ({ umdName }) => {
  const config = new Config()

  config
    .mode('development')
    .entry('index')
    .add('./src/index')
    .end()
    .output.path(path.resolve(process.cwd(), 'dist'))
    .libraryTarget('umd')
    .library(umdName)
    .filename('index.js')
    .end()
    // config resolve.extensions
    .resolve.extensions.add('.tsx')
    .add('.ts')
    .add('.jsx')
    .add('.js')
    .add('.json')
    .end()
    .end()
    // transpile js/ts
    .module.rule('js')
    .test(/\.(j|t)sx?$/)
    .exclude.add(/(node_modules|bower_components)/)
    .end()
    .use('babel-loader')
    .loader('babel-loader')
    .options({
      ...babelConfig,
    })
    .end()
    .end()
    // transpile css
    .rule('css')
    .test(/\.css$/)
    .use('style-loader')
    .loader('style-loader')
    .end()
    .use('css-loader')
    .loader('css-loader')
    .end()
    .end()
    .end()
    .externals({
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
      'prop-types': {
        root: 'PropTypes',
        commonjs2: 'prop-types',
        commonjs: 'prop-types',
        amd: 'prop-types',
      },
      'styled-components': 'styled-components',
    })
    // .plugin('bundle-analyzer')
    // .use(BundleAnalyzerPlugin)
    // .end()
  return config
}
