/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { rollup } from 'rollup'
import type { RollupOptions } from 'rollup'
import serve from 'rollup-plugin-serve'
import * as path from 'path'
import * as fs from 'fs-extra'
import chalk from 'chalk'

import { IDocsConfig, defaultConfig } from "./build";
import MdxPlugin from '../plugin-mdx'

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
  if (!inputs[devInputName]) {
    throw new Error(`inputs[devInputName] not exist. Please check your config.
    info : ${JSON.stringify({inputs, devInputName})}`)
  }

  const rollupConfig = ((name, inputFile): RollupOptions => {
    return {
      input: {
        [name]: path.resolve(cwd, inputFile),
      },
      plugins: [MdxPlugin(), serve({
        open: true,
        contentBase: [cwd, outDirAbs]
      })],
      external: [...commomDeps, ...externals],
    }
  })(devInputName, inputs[devInputName])

  const bundle = await rollup(rollupConfig)
  await bundle.write({
    dir: outDirAbs,
    // 输出为systemjs、esm的情况下，无法 import React from 'react'
    format: 'amd',
    exports: 'named',
    entryFileNames: '[name].js',
  })

  log(chalk.green.bold('Document builder completed successfully'))
}

export interface ILocalArgs {
  config?: string | IDocsConfig
  cwd?: string
  log?: Console['log']
  logError?: Console['error']
  devInputName: string
}

const commomDeps = ['react', '@mdx-js/react']
