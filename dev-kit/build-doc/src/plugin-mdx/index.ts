/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable global-require */
import path from 'path'
import { createFilter } from '@rollup/pluginutils'
import type { Plugin } from 'rollup'
import mdx from '@mdx-js/mdx'
import { getOpts } from './getOpts'
import { extractTsInterfaceDataPlugin } from './extractTsInterfaceData/plugin'
import { loadDemoPlugin } from './loadDemo/plugin'

// import * as babel from '@babel/core'

// imitate @mdx-js/loader:
// https://github.com/mdx-js/mdx/blob/b77e2945bbde9fd3b595ee0a09a2323dac37ad61/packages/loader/index.js#L9

const ext = /\.md$|\.mdx$/

const DEFAULT_RENDERER = `
import React from 'react'
import { mdx } from '@mdx-js/react'
// avoid UNUSED_EXTERNAL_IMPORT warning from rollup
React;
`

export default function plugin({
  renderer = DEFAULT_RENDERER,
  include = null,
  exclude = null,
  ...options
} = {}) {
  const filter = createFilter(include, exclude)

  return {
    name: 'mdx',

    transform(content: string, filename: string) {
      if (!ext.test(filename) || !filter(filename)) {
        return null
      }

      const opts = { filepath: path.resolve(filename), ...getOpts(options) }

      return mdx(content, opts).then((result: string) => {
        const code = `${renderer}\n${result}`

        // const { code: transpiled } = babel.transformSync(code, {
        //   babelrc: false,
        //   presets: [['@babel/env', { modules: 'commonjs' }], '@babel/react'],
        // })!

        return {
          code,
          map: { mappings: '' },
        }
      })
    },

    options: (opts) => {
      const plugins = opts.plugins ?? []
      plugins.push(loadDemoPlugin())
      plugins.push(extractTsInterfaceDataPlugin())
      return {
        ...opts,
        plugins,
      }
    },
  } as Plugin
}
