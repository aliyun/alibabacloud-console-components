/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { watch } from 'rollup'
import type { RollupWatchOptions } from 'rollup'
import * as path from 'path'
import * as fs from 'fs-extra'
import chalk from 'chalk'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import builtins from 'rollup-plugin-node-builtins';

import * as react from 'react'
import * as reactDom from 'react-dom'
import * as reactIs from 'react-is'
import * as propTypes from 'prop-types'
import * as ConsoleComponents from '@alicloud/console-components'

import { IDocsConfig, defaultConfig } from '../build'
import MdxPlugin from '../../plugin-mdx'

export default async (args: ILocalArgs) => {
  // eslint-disable-next-line no-console
  const { log = console.log, devInputName } = args

  const cwd = args.cwd ?? process.cwd()
  const config: IDocsConfig = (() => {
    if (typeof args.config === 'object') return args.config
    if (typeof args.config === 'string')
      return require(path.resolve(cwd, args.config))
    if (!args.config) {
      const p = path.resolve(cwd, 'docs.config.js')
      if (fs.existsSync(p)) return require(p)
      return defaultConfig
    }
    throw new Error(`invalid args`)
  })()
  const inputs = config.inputs ?? defaultConfig.inputs
  const outDir = config.outDir ?? defaultConfig.outDir
  const outDirAbs = path.resolve(cwd, outDir)
  const externals = config.externals ?? defaultConfig.externals
  const inputFile = inputs[devInputName]
  if (!inputFile) {
    throw new Error(`inputs[devInputName] not exist. Please check your config.
    info : ${JSON.stringify({ inputs, devInputName })}`)
  }
  const inputFileAbs = path.resolve(cwd, inputFile)
  const rollupConfig: RollupWatchOptions = {
    input: '@@dev-entry.jsx',
    plugins: [
      MdxPlugin(),
      {
        name: 'load-dev-entry',
        resolveId(id, importer) {
          if (id === '@@dev-entry.jsx') return id
          if (id === '@@entry-mdx') return inputFileAbs
          if (id === 'styled-components') {
            return this.resolve('styled-components/dist/styled-components.browser.esm', importer)
          }
          return null
        },
        load(id) {
          if (id === '@@dev-entry.jsx') {
            return `
import React from 'react'
import { render } from 'react-dom'
import * as MDX from '@@entry-mdx'
import { wrapMdxModule } from '@alicloud/console-components-lib-documenter/lib/runtime/MdxWrapper'

const { default: DocComp } = wrapMdxModule(MDX)

const wrapperStyle = { padding: '10px 20px' }
render(
  <div style={wrapperStyle}>
    <DocComp mode="local-dev" />
  </div>,
  document.querySelector('.app')
)
        `
          }
          return null
        },
      },
      json(),
      builtins(),
      babel({
        babelrc: false,
        presets: [['@babel/env', { modules: false }], '@babel/react'],
        babelHelpers: 'bundled',
        extensions: ['js', 'jsx', 'md', 'mdx'],
        exclude: /node_modules/,
      }),
      // https://github.com/rollup/rollup-plugin-commonjs/issues/290#issuecomment-537683484
      commonjs({
        namedExports: {
          react: Object.keys(react).filter((k) => k !== 'default'),
          'react-dom': Object.keys(reactDom).filter((k) => k !== 'default'),
          'react-is': Object.keys(reactIs).filter((k) => k !== 'default'),
          'prop-types': Object.keys(propTypes).filter((k) => k !== 'default'),
          '@alicloud/console-components': Object.keys(ConsoleComponents).filter(
            (k) => k !== 'default'
          ),
        },
      }),
      // resolve({
      //   browser: true
      // }),
    ],
    external: [...commomDeps, ...externals],
    output: {
      dir: outDirAbs,
      format: 'amd',
      entryFileNames: 'local-dev.js',
    },
    onwarn(warning, warn) {
      if (warning.code === 'THIS_IS_UNDEFINED') return
      // if (
      //   warning.code === 'PLUGIN_WARNING' &&
      //   warning.plugin === 'node-resolve'
      // )
      //   return
      // debugger
      warn(warning)
    },
  }

  const watcher = watch(rollupConfig)
  watcher.on('event', (event) => {
    // event.code can be one of:
    //   START        — the watcher is (re)starting
    //   BUNDLE_START — building an individual bundle
    //   BUNDLE_END   — finished building a bundle
    //   END          — finished building all bundles
    //   ERROR        — encountered an error while bundling
    console.log(event.code)
    if (event.code === 'ERROR') {
      debugger
      console.log(event.error)
    }
  })
  await fs.ensureDir(outDirAbs)
  await fs.writeFile(
    path.resolve(outDirAbs, 'index.html'),
    `<!doctype html>
<script src="local-dev.js"></script>`
  )

  log(chalk.green.bold('Document builder is watching and serving.'))
}

export interface ILocalArgs {
  config?: string | IDocsConfig
  cwd?: string
  log?: Console['log']
  logError?: Console['error']
  devInputName: string
}

const commomDeps = [
  'react',
  '@mdx-js/react',
  'react-dom',
  '@alicloud/console-components-lib-documenter/lib/runtime/MdxWrapper',
  '@alicloud/console-components-lib-documenter/lib/runtime/amdLoader',
]
