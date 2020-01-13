#! /usr/bin/env node

const { argv, entryMDX, prodPkgName, rootDir } = require('./utils').getCmdArgs()

const mode =
  argv.mode === 'prod' || argv.mode === 'production'
    ? 'production'
    : 'development'

const webpackConfig = require('../build-doc/webpack-chain.prod')
  .createConfig({
    rootDir,
    entryMDX,
    prodPkgName,
    mode,
  })
  .toConfig()

require('./utils').bootWebpack(webpackConfig)
