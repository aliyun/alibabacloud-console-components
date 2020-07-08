import type { UserConfig } from 'vite'
import * as vpr from 'vite-plugin-react'
import pages from 'vite-plugin-react-pages'
import mdx from 'vite-plugin-mdx'
import * as path from 'path'

import rehypeSlug from 'rehype-slug'
import {
  linkInstructionsRemarkPlugin,
  linkInstructionsImportDemo,
  linkInstructionsRenderInterface,
  // remarkPluginsTransformImg,
  loadDemoCode,
} from '@alicloud/console-components-build-doc'

module.exports = {
  jsx: 'react',
  root: path.join(__dirname, '../'),
  plugins: [
    vpr,
    mdx({
      remarkPlugins: [
        [
          linkInstructionsRemarkPlugin,
          {
            instructions: [
              linkInstructionsImportDemo,
              // linkInstructionsRenderInterface,
            ],
          },
        ],
      ],
      rehypePlugins: [rehypeSlug],
    }),
    pages(__dirname),
  ],
  optimizeDeps: {
    include: [
      '@alicloud/console-components',
      'react-router-dom',
      'styled-components',
      '@alicloud/console-components-page',
      '@alicloud/console-components-fake-browser',
    ],
  },
  configureServer: ({ app, root, resolver }) => {
    app.use(async (ctx, next) => {
      if ('loadDemo' in ctx.query) {
        const demoPath = resolver.requestToFile(ctx.path)
        const data = await loadDemoCode(demoPath, () => true)
        ctx.body = data.codeWithDepsLoaded
        ctx.type = 'js'
        ctx.status = 200
      } else {
        await next()
      }
    })
  },
  // minify: 'esbuild',
  minify: false,
} as UserConfig
