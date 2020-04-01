const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const createCoreConfig = require('./webpack-chain.core').createConfig
const { externalsArr } = require('./externalsArr')

module.exports.createConfig = ({
  externals: argExternals,
  entryMDX,
  rootDir,
  mode,
  outputFileName = '_doc.system.js',
  outputDir = path.resolve(rootDir, 'dist'),
  tsApiJson = path.resolve(rootDir, 'cc-dev-out', 'api-json', 'api.json'),
  alias,
  analyze,
} = {}) => {
  const externals = (() => {
    if (Array.isArray(argExternals)) return argExternals
    return [argExternals]
  })()
  return (
    createCoreConfig({
      entryMDX,
      entryJS: path.resolve(__dirname, 'index.tsx'),
      tsApiJson,
      externals: [...externals, ...externalsArr],
      alias,
    })
      .mode(mode === 'production' ? 'production' : 'development')
      .output.libraryTarget('system')
      .path(outputDir)
      .filename(outputFileName)
      .end()
      // 并行编译多个文档的时候不能使用'bundle-analyzer'
      .when(analyze, (cfg) => {
        cfg.plugin('bundle-analyzer').use(BundleAnalyzerPlugin).end()
      })
  )
}
