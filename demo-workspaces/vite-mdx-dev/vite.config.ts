/* eslint-disable @typescript-eslint/no-misused-promises */
import type { UserConfig } from 'vite'
import path from 'path'
import { createPlugin } from 'vite-plugin-mdx'
import react from 'vite-plugin-react'
import rehypeSlug from 'rehype-slug'
import {
  linkInstructionsRemarkPlugin,
  linkInstructionsImportDemo,
  linkInstructionsRenderInterface,
  // remarkPluginsTransformImg,
  loadDemoCode,
} from '@alicloud/console-components-build-doc'
import replace from '@rollup/plugin-replace'
import * as fs from 'fs-extra'
import { findPages } from './findPages.ts'
import { resolvePageFile } from './resolvePageFile.ts'
import { resolvePageConfig } from './resolvePageConfig.ts'

const pagesDirPath = path.join(__dirname, 'pages')

module.exports = {
  jsx: 'react',
  rollupInputOptions: {
    plugins: [
      replace({
        'window.process.env.NODE_ENV': JSON.stringify('development'),
        'process.env.NODE_ENV': JSON.stringify('development'),
        include: ['**/@alifd/next/es/util/env.js'],
      }),
    ],
  },
  alias: {
    '/@pages/': pagesDirPath,
    '/@infra/': path.join(__dirname, 'infra'),
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
  configureServer: ({ app, root, resolver }) => {
    app.use(async (ctx, next) => {
      if (ctx.path === '/proxy-module' && ctx.query.path) {
        const resolvedFilePath = await resolvePageFile(
          ctx.query.path,
          pagesDirPath
        )
        if (!resolvedFilePath || !fs.existsSync(resolvedFilePath)) {
          ctx.status = 404
          return
        }
        const actualModulePath = resolver.fileToRequest(resolvedFilePath)
        ctx.body = `export { default } from "${actualModulePath}";
export * from "${actualModulePath}";`
        ctx.type = 'js'
      } else if (ctx.path === '/page-config' && ctx.query.path) {
        const pageConfigs = await resolvePageConfig(
          ctx.query.path,
          pagesDirPath
        )
        const pageConfigImportExp = pageConfigs
          .map((v) => resolver.fileToRequest(v))
          .map((publicPath, idx) => {
            const varName = `config${idx}`
            return (
              `import ${varName} from "${publicPath}";\n` +
              `configs.push(${varName});`
            )
          })
          .join('\n')
        ctx.body = `export const configs = [];\n${pageConfigImportExp}`
        ctx.type = 'js'
      } else if (ctx.path === '/api/pages') {
        ctx.body = {
          pages: await findPages(pagesDirPath),
        }
        ctx.status = 200
        await next()
      } else if ('loadDemo' in ctx.query) {
        const demoPath = resolver.requestToFile(ctx.path)
        console.log('demoPath', demoPath)
        const data = await loadDemoCode(demoPath, () => true)
        ctx.body = data.codeWithDepsLoaded
        ctx.type = 'js'
        ctx.status = 200
      } else {
        await next()
      }
    })
  },
  optimizeDeps: {
    include: ['@alicloud/console-components-app-layout'],
    exclude: ['@alicloud/console-components-doc-runtime'],
    // auto: false,
  },
  port: 3100,
} as UserConfig
