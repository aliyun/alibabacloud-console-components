#! /usr/bin/env node

const { getCmdArgs, normalizeConfig, bootWebpack } = require('./utils')

const { argv, entryMDX, rootDir, prodPkgName, docsConfig } = getCmdArgs()

const webpackChain = require('../build-doc/webpack-chain.prod')

if (docsConfig) {
  const compilations = normalizeConfig(docsConfig, 'build', argv)
  const config = compilations.map(
    ({
      entry,
      outputDir,
      outputFileName,
      mode,
      externals,
      alias,
      analyze,
      remarkPlugins,
      linkInstructions,
    }) => {
      return webpackChain
        .createConfig({
          rootDir,
          entryMDX: entry,
          externals,
          mode,
          outputDir,
          outputFileName,
          alias,
          analyze,
          remarkPlugins,
          linkInstructions,
        })
        .toConfig()
    }
  )
  bootWebpack(config)
} else {
  const mode =
    argv.mode === 'dev' || argv.mode === 'development'
      ? 'development'
      : 'production'

  const webpackConfig = webpackChain
    .createConfig({
      rootDir,
      entryMDX,
      externals: [prodPkgName],
      mode,
    })
    .toConfig()

  bootWebpack(webpackConfig)
}
