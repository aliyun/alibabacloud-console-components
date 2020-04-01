#! /usr/bin/env node

const WebpackDevServer = require('webpack-dev-server')
const Webpack = require('webpack')
const portfinder = require('portfinder')

const { getCmdArgs, normalizeConfig } = require('./utils')

const {
  argv,
  entryMDX: argEntryMDX,
  prodPkgName,
  rootDir,
  docsConfig,
} = getCmdArgs()

;(async () => {
  const { entryMDX, alias, externals } = (() => {
    if (docsConfig) {
      const compilation = normalizeConfig(docsConfig, 'preview', argv)[0]

      return {
        entryMDX: compilation.entry,
        alias: compilation.alias,
        externals: compilation.externals,
      }
    }
    return { entryMDX: argEntryMDX }
  })()

  const port =
    argv.port ||
    (await portfinder.getPortPromise({
      port: 8080,
      stopPort: 65535,
    }))

  const docConfigChain = require('../build-doc/webpack-chain.dev').createConfig(
    {
      entryMDX,
      rootDir,
      prodPkgName,
      alias,
      externals,
    }
  )

  const webpackConfig = docConfigChain.toConfig()

  const compiler = Webpack(webpackConfig)

  const server = new WebpackDevServer(compiler, webpackConfig.devServer)

  server.listen(port, '127.0.0.1', () => {
    console.log(`Starting server on http://localhost:${port}`)
  })
})()
