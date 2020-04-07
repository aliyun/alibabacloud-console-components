#! /usr/bin/env node

const fs = require('fs-extra')
const path = require('path')

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
  bootWebpack(config, () => {
    const docBuildMeta = {
      buildTime: new Date().toISOString(),
      docs: compilations.map(({ name, outputFileName }) => {
        return {
          name,
          fileName: outputFileName,
        }
      }),
    }
    fs.writeFileSync(
      path.resolve(docsConfig.outputDir, 'docBuildMeta.json'),
      JSON.stringify(docBuildMeta),
      'utf-8'
    )
  })
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
