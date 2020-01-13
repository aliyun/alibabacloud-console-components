#! /usr/bin/env node

const WebpackDevServer = require('webpack-dev-server')
const Webpack = require('webpack')
const portfinder = require('portfinder')

const { argv, entryMDX, prodPkgName, rootDir } = require('./utils').getCmdArgs()

;(async () => {
  const port =
    argv.port ||
    (await portfinder.getPortPromise({
      port: 8080,
      stopPort: 65535,
    }))

  const docConfigChain = require('../build-doc/webpack-chain.dev').createConfig(
    {
      entryMDX,
      prodPkgName,
      rootDir,
    }
  )

  const webpackConfig = docConfigChain.toConfig()

  const compiler = Webpack(webpackConfig)

  const server = new WebpackDevServer(compiler, webpackConfig.devServer)

  server.listen(port, '127.0.0.1', () => {
    console.log(`Starting server on http://localhost:${port}`)
  })
})()
