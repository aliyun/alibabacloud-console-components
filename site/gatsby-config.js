/* eslint-disable global-require, @typescript-eslint/no-var-requires */

const path = require('path')

module.exports = {
  // 如果站点被部署在子路径下，则需要在这里配置子路径
  // 我们部署在`aliyun.github.io/alibabacloud-console-components`
  pathPrefix: `/alibabacloud-console-components`,
  plugins: [
    {
      resolve: `@alicloud/gatsby-theme-console-doc`,
      options: {
        // 用于SEO
        siteMetadata: {
          // 会生成标题如：按钮 · Console components
          siteName: 'Console Components',
          description:
            'Console Components 是针对阿里云控制台场景的React组件解决方案。',
        },
        // 入口页面，即点击左上角logo跳转的地址，以及访问`/`跳转的地址
        primaryPath: '/base-components/button',
        // 从文件系统爬取.md和.mdx（我们会忽略不包含frontmatter.name的markdown文档）
        fileSystemCrawlers: [
          {
            // crawler的名称在下面用来判断每篇文章所属的category
            name: 'biz-comp-crawler',
            rootDir: path.resolve(__dirname, '../packages'),
            ignore: [
              // 忽略基础组件的目录
              `${path.resolve(__dirname, '../packages/component')}/**/*`,
            ],
          },
          {
            name: 'base-comp-crawler',
            rootDir: path.resolve(__dirname, '../packages/component'),
          },
          {
            name: 'guides-crawler',
            rootDir: path.resolve(__dirname, '../guides'),
          },
        ],
        dynamicDocs: require('./dynamic-doc-config'),
        // 透传给webpack选项resolve.module：https://webpack.js.org/configuration/resolve/#resolvemodules
        // 优先从文档项目、根目录解析依赖，
        // 如果找不到，再从发起者(即markdown或者demo位置)开始向上解析node_modules
        // 避免不同的markdown解析出各自的'react'
        nodeModules: [
          // path.resolve(__dirname, './node_modules'),
          // path.resolve(__dirname, '../node_modules'),
          'node_modules',
        ],
        // 为每个文档添加元数据：它属于哪个类目
        // 每个文档都需要有一个类目，文档的访问路径就是`/类目name/文档name`
        // 类目还被用于给左侧导航栏分类、搜索结果分类
        patchDocInfo: docInfo => {
          // debugger

          // 调试指南：
          // 为vscode配置debug参数：新建`.vscode/launch.json`
          /*
            {
              "version": "0.2.0",
              "configurations": [
                {
                  "type": "node",
                  "request": "attach",
                  "name": "Attach",
                  "port": 9229
                }
              ]
            }
           */
          // npx gatsby clean && npx --node-arg=--inspect-brk gatsby develop
          // 然后打开vscode的debug面板
          // 即可在调试期间停在这个地方，查看docInfo的结构
          if (docInfo.type === 'doc') {
            if (docInfo.fileSystemCrawlerName === 'biz-comp-crawler') {
              return {
                category: 'biz-components',
              }
            }
            if (docInfo.fileSystemCrawlerName === 'base-comp-crawler') {
              return {
                category: 'base-components',
              }
            }
            if (docInfo.fileSystemCrawlerName === 'guides-crawler') {
              return {
                category: 'guides',
              }
            }
            throw new Error(
              `unexpected docInfo.fileSystemCrawlerName: ${docInfo.fileSystemCrawlerName}`
            )
          }
        },
        // 定义类目的中文名（展示在左侧导航、搜索结果中）
        categories: {
          'base-components': '基础组件',
          'biz-components': '业务组件',
          guides: '指南',
        },
        // 顶部导航
        topNav: [
          { text: '指南', href: '/guides/quick-start' },
          { text: '组件文档', href: '/base-components/button' },
          {
            text: '国内文档镜像',
            href:
              'https://csr632.gitee.io/alibabacloud-console-components/guides/quick-start',
          },
          {
            text: 'Github',
            href: 'https://github.com/aliyun/alibabacloud-console-components',
          },
        ],
        // 左侧导航
        // 左侧导航与顶部导航的区别：
        // 顶部导航是静态的，不随着“当前所在页面”而变化
        // 左侧导航是动态的，可以随着“当前所在页面”而变化
        sideNav: context => {
          // 同理，你可以在这里打断点，观察参数的结构
          const { pageMeta } = context

          const header = (() => {
            switch (pageMeta.category) {
              case 'base-components':
              case 'biz-components':
                return '组件文档'
              case 'guides':
                return '指南'
              default:
                throw new Error(
                  `unexpected pageMeta.category ${pageMeta.category}`
                )
            }
          })()

          const navCategories = (() => {
            switch (pageMeta.category) {
              case 'base-components':
              case 'biz-components':
                // 如果当前页面是基础或业务组件
                // 则导航栏需要导航这两个类目
                return [
                  { categoryName: 'base-components' },
                  { categoryName: 'biz-components' },
                ]
              case 'guides':
                // 如果当前页面是指南
                // 则导航栏需要导航这个类目
                return [{ categoryName: 'guides' }]
              default:
                throw new Error(
                  `unexpected pageMeta.category ${pageMeta.category}`
                )
            }
          })()
          return {
            // 导航栏标题
            header,
            // 导航栏需要为哪些类目导航
            navCategories,
          }
        },
        // 下面的选项可以忽略，是仅用于wind的插件
        remarkPlugins: [
          require('./lib/buildtime/legacyImportDemoInstruction/remarkPlugin'),
        ],
        // 下面的选项可以忽略，是仅用于wind的插件
        linkInstructions: [
          require('./lib/buildtime/linkInstructions/embedAPIFromFusion'),
        ],
        bundleDemo: true,
      },
    },
  ],
}
