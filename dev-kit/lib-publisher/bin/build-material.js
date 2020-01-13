#! /usr/bin/env node

const {prodPkgName} = require('./utils').getCmdArgs()

const webpackConfig = require('../build-material/webpack-chain')
  .createConfig({umdName: prodPkgName})
  .toConfig()

require('./utils').bootWebpack(webpackConfig)

// todo 让documenter可以加载umd bundle
// https://github.com/csr632/systemjs-issue-2090/pull/1/files