import type { UserConfig } from 'vite'
import { readBody } from 'vite'
import { createPlugin } from 'vite-plugin-mdx'
import react from 'vite-plugin-react'
import glob from 'glob'

module.exports = {
  jsx: 'react',
  plugins: [
    react,
    createPlugin({
      remarkPlugins: [],
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
} as UserConfig
