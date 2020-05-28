import type { UserConfig } from 'vite'
import { readBody } from 'vite'
import path from 'path'
import { createPlugin } from 'vite-plugin-mdx'
import react from 'vite-plugin-react'
import glob from 'glob'
import rehypeSlug from 'rehype-slug'
import {
  linkInstructionsRemarkPlugin,
  linkInstructionsImportDemo,
  linkInstructionsRenderInterface,
  // remarkPluginsTransformImg,
  loadDemoCode,
} from '@alicloud/console-components-build-doc'
import replace from '@rollup/plugin-replace'

module.exports = {
  jsx: 'react',
  rollupInputOptions: {
    // next目前用rollup的tree-shaking无法正确构建
    // https://github.com/alibaba-fusion/next/issues/1862
    treeshake: false,
    plugins: [
      replace({
        'window.process.env.NODE_ENV': JSON.stringify('development'),
        'process.env.NODE_ENV': JSON.stringify('development'),
        include: ['**/@alifd/next/es/util/env.js'],
      }),
      {
        name: 'my-resolve',
        resolveId(id) {
          if (id === 'styled-components') {
            return this.resolve(
              'styled-components/dist/styled-components.browser.esm.js'
            )
          }
        },
      },
    ],
  },
  plugins: [
    react,
    createPlugin({
      remarkPlugins: [
        [
          linkInstructionsRemarkPlugin,
          {
            instructions: [
              linkInstructionsImportDemo,
              linkInstructionsRenderInterface,
            ],
          },
        ],
        // remarkPluginsTransformImg
      ],
      rehypePlugins: [rehypeSlug],
    }),
  ],
  configureServer: ({ app, root }) => {
    app.use(async (ctx, next) => {
      if (ctx.path === '/docs' && ctx.query.path) {
        await next()
        const body = await readBody(ctx.body)
        if (!body?.includes('/main.tsx')) {
          throw new Error('unexpect')
        }
        const newBody = body?.replace(
          '/main.tsx',
          `/main.tsx?renderDoc=${ctx.query.path}`
        )
        ctx.body = newBody
      } else if (ctx.path === '/api/docs') {
        const files = await new Promise((resolve, reject) => {
          glob(
            '**/*.@(md|mdx)',
            {
              cwd: root,
              ignore: '**/node_modules/**/*',
            },
            (err, res) => {
              if (err) reject(err)
              resolve(res)
            }
          )
        })
        ctx.body = {
          root,
          files,
        }
        ctx.status = 200
        await next()
      } else if ('loadDemo' in ctx.query) {
        let demoPath = ctx.path.replace(/\?loadDemo$/, '').replace(/^\//, '')
        demoPath = path.join(root, demoPath)
        const data = await loadDemoCode(demoPath, () => true)
        ctx.body = data.codeWithDepsLoaded
        ctx.type = 'js'
        ctx.status = 200
      } else {
        await next()
      }
    })
  },
  transforms: [
    {
      test(path, query) {
        if (path === '/main.tsx' && query && query.renderDoc) {
          return true
        }
        return false
      },
      transform(code, isImport, isBuild, path, query) {
        if (!code.includes('./App')) throw new Error('unexpected')
        return code.replace('./App', (query as any).renderDoc)
      },
    },
  ],
  optimizeDeps: {
    exclude: ['@alicloud/console-components-doc-runtime'],
    commonJSWhitelist: ['moment'],
  },
} as UserConfig
