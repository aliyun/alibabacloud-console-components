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
import reactPages from 'vite-plugin-react-pages'

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
    reactPages({
      pagesDir: pagesDirPath,
    }),
  ],
  configureServer: ({ app, root, resolver }) => {
    app.use(async (ctx, next) => {
      if ('loadDemo' in ctx.query) {
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
