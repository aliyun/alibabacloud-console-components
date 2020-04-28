/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { rollup } from 'rollup'
import type { RollupOptions } from 'rollup'
import * as path from 'path'
import * as fs from 'fs-extra'
import chalk from 'chalk'

import MdxPlugin from '../plugin-mdx'

export default async (args: IBuildArgs) => {
  // eslint-disable-next-line no-console
  const { log = console.log } = args

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

  const rollupConfigs = Object.entries(inputs).map(
    ([name, inputFile]): RollupOptions => {
      return {
        input: {
          [name]: path.resolve(cwd, inputFile),
        },
        plugins: [MdxPlugin()],
        external: [...commomDeps, '@alicloud/cc-demo-multi-components'],
      }
    }
  )

  await Promise.all(
    rollupConfigs.map(async (rollupConfig) => {
      const bundle = await rollup(rollupConfig)
      await bundle.write({
        dir: path.resolve(cwd, outDir),
        // 输出为systemjs、esm的情况下，无法 import React from 'react'
        format: 'amd',
        exports: 'named',
        entryFileNames: '[name].js',
      })
    })
  )

  log(chalk.green.bold('Document builder completed successfully'))
}

export interface IBuildArgs {
  config?: string | IDocsConfig
  cwd?: string
  log?: Console['log']
  logError?: Console['error']
}

export interface IDocsConfig {
  inputs?: {
    [name: string]: string
  }
  outDir?: string
}

const defaultConfig = {
  inputs: {
    README: 'README.md',
  },
  outDir: 'docs-output',
}

const commomDeps = ['react', '@mdx-js/react']
