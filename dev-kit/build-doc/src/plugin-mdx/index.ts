/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable global-require */
import path from 'path'
import { createFilter, dataToEsm } from '@rollup/pluginutils'
import type { Plugin } from 'rollup'
import mdx from '@mdx-js/mdx'
import queryString from 'query-string'
import invariant from 'tiny-invariant'
import { getOpts } from './getOpts'
import { resolveApiJson } from './utils'
import { loadDemoCode } from './loadDemoCode'
import { extractTsInterfaceData } from './extractTsInterfaceData'

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
    resolveId(source, importer) {
      if (source.endsWith('?loadDemo')) {
        invariant(importer, `"${source}" should have a importer.`)
        return path.resolve(path.dirname(importer), source)
      }
      if (source.startsWith('\0tsExtractData')) {
        // return false
        invariant(importer, `"${source}" should have a importer.`)
        const query = source.substr('\0tsExtractData'.length)
        const apiJsonPath = resolveApiJson(importer)
        return `${apiJsonPath}${query}`
      }
      return null
    },
    async load(id) {
      const request = queryString.parseUrl(id)
      if ('loadDemo' in request.query) {
        const demoEntry = request.url
        const rootRollupResolve = this.resolve.bind(this)

        const { actualcode, info } = await loadDemoCode(
          demoEntry,
          async (importee, importer) => {
            // use root rollup instance to resolve demo dependency
            const rootRes = await rootRollupResolve(importee, importer)
            if (rootRes === null || !rootRes.external) {
              // force user to mark dependency of demo as "external"
              return false
            }
            return true
          }
        )

        Object.keys(info.modules).forEach((key) => {
          const demoModule = info.modules[key]
          // watch demo files
          this.addWatchFile(demoModule.path)
        })
        debugger
        return actualcode
      }

      if ('extractInterfaceName' in request.query) {
        const apiJsonPath = request.url
        const { extractInterfaceName } = request.query
        invariant(typeof extractInterfaceName === 'string')

        const data = extractTsInterfaceData(apiJsonPath, extractInterfaceName)
        const code = dataToEsm(data)
        return code
      }
      return null
    },
  } as Plugin
}
