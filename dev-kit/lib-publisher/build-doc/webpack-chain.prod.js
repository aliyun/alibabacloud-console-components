const createCoreConfig = require('./webpack-chain.core').createConfig

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const { externalsArr } = require('./externalsArr')

const path = require('path')

const externalsObj = externalsArr.reduce((acc, cur) => {
  acc[cur] = cur
  return acc
}, {})

module.exports.createConfig = ({ prodPkgName, entryMDX, rootDir, mode } = {}) =>
  createCoreConfig({
    entryMDX,
    rootDir,
    entryJS: path.resolve(__dirname, 'index.jsx'),
  })
    .mode(mode === 'production' ? 'production' : 'development')
    // 把物料本身external掉
    .externals({ ...externalsObj, [prodPkgName]: prodPkgName })
    .output.libraryTarget('system')
    .path(path.resolve(rootDir, 'dist'))
    .filename('_doc.system.js')
    .end()
// .plugin('bundle-analyzer')
// .use(BundleAnalyzerPlugin)
// .end()
