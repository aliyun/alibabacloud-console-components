import type { UserConfig, Plugin } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import mdx from 'vite-plugin-mdx'
import pages, {
  DefaultPageStrategy,
  FileHandler,
  extractStaticData
} from 'vite-plugin-react-pages'
import * as path from 'path'
import * as fs from 'fs-extra'

const pagesDir = path.join(__dirname, 'pages')

module.exports = {
  root: __dirname,
  jsx: 'react',
  plugins: [
    reactRefresh(),
    mdx(),
    pages({
      pagesDir,
      useHashRouter: true,
      pageStrategy: new DefaultPageStrategy({
        extraFindPages: function findPages(pagesDir, helpers) {
          helpers.watchFiles(
            path.join(__dirname, 'src'),
            '*/demo/**/*.{[tj]s?(x),md?(x)}',
            fileHandler
          )
        }
      })
    }),
    cssSwitchPlugin()
  ],
  resolve: {
    alias: {
      '@alicloudfe/components': '/src'
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'prop-types',
      'solarlunar',
      'react-cropper',
      'whatwg-fetch',
      'jsonp',
      'classnames',
      'styled-components',
      'redux',
      'react-redux',
      'react-copy-to-clipboard',
      'react-dnd-html5-backend',
      'react-dnd',
      '@alifd/next/lib/locale/en-us',
      '@alifd/next/lib/locale/zh-cn',
      'moment',
      'dayjs',
      '@alifd/next',
      'hoist-non-react-statics',
      'react-loading-skeleton',
      'vite-pages-theme-basic'
    ],
    esbuildOptions: {
      plugins: [
        {
          name: 'custom-resolve',
          setup(build) {
            build.onLoad(
              { filter: /config-provider\/index/ },
              async ({ path }) => {
                const content = await fs.readFile(path, 'utf8')
                return {
                  // 替换掉fusion内部的 require('moment')
                  contents: content.replace(
                    `require('moment')`,
                    `require('moment').default`
                  )
                }
              }
            )
          }
        }
      ]
    }
  },

  build: {
    outDir: 'docs-dist'
  },
  css: {
    preprocessorOptions: {
      includePaths: ['node_modules', '../node_modules']
    }
  }
} as UserConfig

function cssSwitchPlugin(): Plugin {
  const reg = /\?pureCSS$/

  // vite 暂时不支持直接对css进行dynamic import
  // https://github.com/vitejs/vite/issues/3307
  // 我们构造一个虚拟js模块，然后dynamic import它
  return {
    name: 'cssSwitchPlugin',
    enforce: 'pre',
    async resolveId(importee, importer) {
      if (importee.match(reg)) {
        const bare = importee.replace(reg, '')
        const result = await this.resolve(bare, importer)
        const pathWithoutExt = result.id.replace(/\.scss$/, '')
        return `/@pureCSS${pathWithoutExt}`
      }
    },
    load(id) {
      if (id.startsWith('/@pureCSS')) {
        const cssPath = id.replace('/@pureCSS', '')
        return `import "${cssPath}.scss";`
      }
    }
  }
}

// 修改css选择器的postcss插件
function changePrefix(transform) {
  return function (css) {
    css.walkRules((rule) => {
      const newSelectors = rule.selectors.map((selector) => {
        const res = transform(selector)
        if (res) return res
        return selector
      })
      rule.selectors = newSelectors
    })
  }
}

const fileHandler: FileHandler = async (file, api) => {
  const { relative, path: absolute } = file
  const match = relative.match(/(.*)\/demo\/(.*)\.([tj]sx?|mdx?)$/)
  if (!match) throw new Error('unexpected file: ' + absolute)
  const [_, componentName, demoPath] = match
  // 有的demoPath就是title，会与staticData.title重复。。。
  const key = `_${demoPath}`
  const pageId = `/${componentName}`
  const runtimeDataPaths = api.getRuntimeData(pageId)
  runtimeDataPaths[key] = absolute
  const staticData = api.getStaticData(pageId)
  staticData[key] = await extractStaticData(file)
  if (!staticData.title) staticData.title = componentName
}
