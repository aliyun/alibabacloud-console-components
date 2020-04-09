/* eslint-disable global-require */
import path from 'path'
import fs from 'fs'
import { createFilter } from 'rollup-pluginutils'
import type { Plugin } from 'rollup'
import * as rollup from 'rollup'
import mdx from '@mdx-js/mdx'
import babel from 'rollup-plugin-babel'
import * as enhancedResolve from 'enhanced-resolve'

// import * as babel from '@babel/core'

// 模仿 @mdx-js/loader:
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
        if (!importer) throw new Error(`"${source}" should have a importer.`)
        return path.resolve(path.dirname(importer), source)
      }
      return null
    },
    async load(id) {
      if (id.endsWith('?loadDemo')) {
        const demoEntry = id.slice(0, 0 - '?loadDemo'.length)
        const extensions = ['.js', '.jsx', '.ts', '.tsx']

        const rootRollupResolve = this.resolve.bind(this)

        const myResolve = enhancedResolve.create({
          // or resolve.create.sync
          modules: [],
          extensions,
          // see more options below
        })

        const bundle = await rollup.rollup({
          input: demoEntry,
          plugins: [
            babel({
              babelrc: false,
              presets: [
                ['@babel/env', { modules: false }],
                '@babel/preset-typescript',
                '@babel/react',
              ],
              extensions,
            }),
            {
              resolveId(request, from) {
                if (!from) {
                  return null
                }
                return new Promise((res, rej) => {
                  myResolve(
                    path.dirname(from),
                    request,
                    async (err, result) => {
                      if (err) {
                        // use root rollup instance to resolve demo dependency
                        const rootRes = await rootRollupResolve(request, from)
                        if (rootRes === null || !rootRes.external) {
                          // force user to mark dependency of demo as "external"
                          const wrapperErr = new Error(
                            `demo dependency can't be resolved.
  info: ${JSON.stringify({ request, from }, null, 2)}.
  Please config this dependency as "external" explicitly.`
                          )
                          ;(wrapperErr as any).childError = err
                          rej(wrapperErr)
                          return
                        }
                        // root rollup already config this dependency as external
                        res(false)
                        return
                      }
                      res(result)
                    }
                  )
                })
              },
            },
          ],
        })
        const { output } = await bundle.generate({
          format: 'esm',
        })
        if (output.length > 1) {
          throw new Error(`demo should only bundle into one chunk. Please don't use dynamic import in it!.
          demoEntry: "${demoEntry}"`)
        }
        const chunk = output[0]
        if (chunk.facadeModuleId !== demoEntry) {
          throw new Error(`chunk.facadeModuleId !== demoEntry`)
        }

        const modules = bundle.cache.modules.reduce((acc, module) => {
          const { id, originalCode } = module
          if (!path.isAbsolute(id)) {
            throw new Error(
              `assertion fail. demo module should resolve to a absolute path. current: "${id}"`
            )
          }
          const relativePath = path.relative(path.dirname(demoEntry), id)
          acc[relativePath] = { originalCode }
          // watch demo files
          this.addWatchFile(id)
          return acc
        }, {} as any)

        const srcModulesInfo = {
          entry: path.basename(demoEntry),
          modules,
        }

        if (!srcModulesInfo.modules[srcModulesInfo.entry]) {
          throw new Error(
            `assertion fail. demo modules don't include demo entry.`
          )
        }

        const actualcode = `
${chunk.code};
export const __demoSrcInfo = ${JSON.stringify(srcModulesInfo)};
`
        return actualcode
      }
      return null
    },
  } as Plugin
}

function getOpts({
  remarkPlugins = [],
  rehypePlugins = [],
  linkInstructions = [],
}) {
  return {
    remarkPlugins: [
      [
        require('./remarkPlugins/linkInstructions/remarkPlugin'),
        {
          instructions: [
            require('./remarkPlugins/linkInstructions/importDemo'),
            require('./remarkPlugins/linkInstructions/lazyImportDemo'),
            require('./remarkPlugins/linkInstructions/renderInterface'),
            ...linkInstructions,
          ],
        },
      ],
      require('./remarkPlugins/transformImg'),
      require('./remarkPlugins/addHeadings'),
      ...remarkPlugins,
    ],
    rehypePlugins: [require('rehype-slug'), ...rehypePlugins],
  }
}
