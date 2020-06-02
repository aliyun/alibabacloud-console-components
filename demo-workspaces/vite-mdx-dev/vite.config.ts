/* eslint-disable @typescript-eslint/no-misused-promises */
import type { UserConfig } from 'vite'
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
import * as fs from 'fs-extra'
import invariant from 'tiny-invariant'

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
    exclude: ['@alicloud/console-components-doc-runtime'],
    auto: false,
  },
} as UserConfig

async function findPages(root: string) {
  const dirPages: string[] = await new Promise((resolve, reject) => {
    glob(
      '**/*$/',
      {
        cwd: root,
        ignore: '**/node_modules/**/*',
      },
      async (err, res) => {
        if (err) reject(err)
        const pages = await Promise.all(
          res.map((pageDir) => {
            const pagePath = pageDir.slice(0, -2)
            return pagePath
          })
        )
        resolve(pages)
      }
    )
  })
  const filePages: string[] = await new Promise((resolve, reject) => {
    glob(
      '**/*$.@(md|mdx|js|jsx|ts|tsx)',
      {
        cwd: root,
        ignore: '**/node_modules/**/*',
        nodir: true,
      },
      (err, res) => {
        if (err) reject(err)
        const pages = res.map((filePath) => {
          const pagePath = filePath.replace(/\$\.(md|mdx|js|jsx|ts|tsx)$/, '')
          return pagePath
        })
        resolve(pages)
      }
    )
  })
  const pages = [...dirPages, ...filePages]
  return pages
}

async function resolvePageFile(
  pagePath: string,
  root: string
): Promise<null | string> {
  const filePage: string | null = await new Promise((resolve, reject) => {
    glob(
      `${pagePath}$.@(md|mdx|js|jsx|ts|tsx)`,
      {
        cwd: root,
        ignore: '**/node_modules/**/*',
        nodir: true,
      },
      (err, res) => {
        if (err) reject(err)
        invariant(
          res.length <= 1,
          `pagePath "${pagePath}" should have one index file.`
        )

        if (res.length === 0) {
          resolve(null)
          return
        }
        const absPath = path.join(root, res[0])
        resolve(absPath)
      }
    )
  })
  if (filePage) return filePage

  const dirPage: string | null = await new Promise((resolve, reject) => {
    glob(
      `${pagePath}$/`,
      {
        cwd: root,
        ignore: '**/node_modules/**/*',
      },
      async (err, res) => {
        if (err) reject(err)
        invariant(
          res.length <= 1,
          `pagePath "${pagePath}" should have one index file.`
        )
        if (res.length === 0) {
          resolve(null)
          return
        }
        const pageDirAbs = path.join(root, res[0])
        const indexFile = await resolveDirIndexFile(pageDirAbs)
        resolve(indexFile)
      }
    )
  })
  if (dirPage) return dirPage
  return null
}

async function resolveDirIndexFile(dir: string) {
  const indexs = (await fs.readdir(dir)).filter((filePath) =>
    /index\.(md|mdx|js|jsx|ts|tsx)$/.test(filePath)
  )
  invariant(
    indexs.length === 1,
    `Directory "${dir}" should contain one index file.`
  )
  const index = path.join(dir, indexs[0])
  return index
}
