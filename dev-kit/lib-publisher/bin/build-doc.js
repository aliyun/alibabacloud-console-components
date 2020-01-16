#! /usr/bin/env node

const { argv, entryMDX, prodPkgName, rootDir } = require('./utils').getCmdArgs()

const mode =
  argv.mode === 'dev' || argv.mode === 'development'
    ? 'development'
    : 'production'

const webpackConfig = require('../build-doc/webpack-chain.prod')
  .createConfig({
    rootDir,
    entryMDX,
    prodPkgName,
    mode,
  })
  .toConfig()

require('./utils').bootWebpack(webpackConfig)
