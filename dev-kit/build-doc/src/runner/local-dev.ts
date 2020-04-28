#! /usr/bin/env node

import portfinder from 'portfinder'
import type { IDocsConfig } from './build'

const WebpackDevServer = require('webpack-dev-server')
const Webpack = require('webpack')

const { getCmdArgs, normalizeConfig } = require('./utils')

const {
  argv,
  entryMDX: argEntryMDX,
  prodPkgName,
  rootDir,
  docsConfig,
} = getCmdArgs()

export interface ILocalDevArgs {
  cwd: string
  config?: string | IDocsConfig
}

export default async (args: ILocalDevArgs) => {}
;(async () => {
  const {
    entryMDX,
    alias,
    externals,
    remarkPlugins,
    linkInstructions,
  } = (() => {
    if (docsConfig) {
      const compilation = normalizeConfig(docsConfig, 'preview', argv)[0]

      return {
        entryMDX: compilation.entry,
        alias: compilation.alias,
        externals: compilation.externals,
        remarkPlugins: compilation.remarkPlugins,
        linkInstructions: compilation.linkInstructions,
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
      remarkPlugins,
      linkInstructions,
    }
  )

  const webpackConfig = docConfigChain.toConfig()

  const compiler = Webpack(webpackConfig)

  const server = new WebpackDevServer(compiler, webpackConfig.devServer)

  server.listen(port, '127.0.0.1', () => {
    console.log(`Starting server on http://localhost:${port}`)
  })
})()
