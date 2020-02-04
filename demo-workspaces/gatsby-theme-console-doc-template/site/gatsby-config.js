/* eslint-disable global-require, @typescript-eslint/no-var-requires */

const path = require('path')

module.exports = {
  // 该页面会部署到 `aliyun.github.io/alibabacloud-console-components`路径下
  // 请根据你的项目名修改
  pathPrefix: `/alibabacloud-console-components`,
  plugins: [
    {
      resolve: `@alicloud/gatsby-theme-console-doc`,
      options: {
        // 用于SEO
        siteMetadata: {
          // 会生成标题如：文章名 · Demo Site
          siteName: 'Demo Site',
          description:
            'Console Components 是针对阿里云控制台场景的React组件解决方案。',
        },
        // 入口页面，即点击左上角logo跳转的地址，以及访问`/`跳转的地址
        primaryPath: '/components/component-1',
        // 从文件系统爬取.md和.mdx（我们会忽略不包含frontmatter.name的markdown文档）
        fileSystemCrawlers: [
          {
            // crawler的名称在下面用来判断每篇文章所属的category
            name: 'comp-crawler',
            rootDir: path.resolve(__dirname, '../src'),
          },
          {
            name: 'guides-crawler',
            rootDir: path.resolve(__dirname, '../guides'),
          },
        ],
        // 为每个文档添加元数据：它属于哪个类目
        // 每个文档都需要有一个类目，文档的访问路径就是`/类目name/文档name`
        // 类目还被用于给左侧导航栏分类、搜索结果分类
        patchDocInfo: docInfo => {
          // debugger;

          // 调试指南：
          // npm run debug
          // 然后在vscode中按下F5，启动vscode的debug
          // 即可在调试期间停在这个地方，查看docInfo的结构
          if (docInfo.type === 'doc') {
            if (docInfo.fileSystemCrawlerName === 'comp-crawler') {
              return {
                category: 'components',
                /**
                 * 你可以自定义文章在菜单中的显示文字
                 * 默认是`英文名 中文名`
                 * 文章标题出现的地方：左侧导航栏、搜索结果
                 */
                labelInMenu: docInfo.zhName,
              }
            }
            if (docInfo.fileSystemCrawlerName === 'guides-crawler') {
              return {
                category: 'guides',
                labelInMenu: docInfo.zhName,
              }
            }
            throw new Error(
              `unexpected docInfo.fileSystemCrawlerName: ${docInfo.fileSystemCrawlerName}`
            )
          }
        },
        // 定义类目的中文名（展示在左侧导航、搜索结果中）
        categories: {
          components: '组件',
          guides: '指南',
        },
        // 顶部导航
        topNav: [
          { text: '指南', href: '/guides/quick-start' },
          { text: '组件文档', href: '/components/component-1' },
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
              case 'components':
                return '组件'
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
              case 'components':
                // 如果当前页面是组件
                // 则导航栏需要导航这个类目
                return [{ categoryName: 'components' }]
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
        dynamicDocs: [
          {
            name: 'rc-page',
            zhName: '页面内容区域布局',
            category: 'components',
            // 文档资源加载地址：
            // https://cdn.jsdelivr.net/npm/${prodPkgName}@latest/dist/_doc.system.js
            prodPkgName: '@alicloud/console-components-page',
          },
          {
            name: "rc-demo-component",
            zhName: "示例组件",
            category: 'components',
            // 文档资源加载地址：
            // https://cdn.jsdelivr.net/npm/${actualLoadPkgName}@${actualLoadPkgVersion}/dist/_doc.system.js
            prodPkgName: '@alicloud/cc-demo-component',
            actualLoadPkgName: '@cc-dev-kit-test/cc-demo-component',
            actualLoadPkgVersion: '1.0.1-preview.29',
          },
        ],
      },
    },
  ],
}
