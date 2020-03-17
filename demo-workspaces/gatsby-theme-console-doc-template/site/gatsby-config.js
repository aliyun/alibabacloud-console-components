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
        // 从文件系统爬取.md和.mdx（我们会忽略不包含frontmatter.name和zhName的markdown文档）。这些文档是静态的文档，文档数据在构建期间收集。如果静态文档更新，则需要重新构建文档站点。静态文档的元数据通过markdown顶部的frontmatter来指定
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
        // 指定动态文档的元数据。文档框架需要从中确定文档的加载位置
        dynamicDocs: [
          {
            name: 'rc-actions',
            zhName: '表格中的行操作器',
            category: 'components',
            // 文档资源加载地址：
            // https://cdn.jsdelivr.net/npm/${prodPkgName}@latest/dist/_doc.system.js
            prodPkgName: '@alicloud/console-components-actions',
            actualLoadPkgName: '@cc-dev-kit-test/console-components-actions', // 默认为prodPkgName
            actualLoadPkgVersion: '1.0.9-preview.0', // 默认为latest
            // 文档标签
            tags: {
              testTag1: true,
              自定义类目1: true,
              _自定义类目sort: 0,
            },
          },
          {
            name: 'rc-demo-component',
            zhName: '示例组件',
            category: 'components',
            // 文档资源加载地址：
            // https://cdn.jsdelivr.net/npm/${actualLoadPkgName}@${actualLoadPkgVersion}/dist/_doc.system.js
            prodPkgName: '@alicloud/cc-demo-component',
            actualLoadPkgName: '@cc-dev-kit-test/cc-demo-component',
            actualLoadPkgVersion: '1.0.1-preview.33',
            tags: {
              testTag1: true,
              testTag2: 'tagVal',
              自定义类目1: true,
            },
          },
        ],
        // 为每个文档添加其他元数据，比如类目
        // 每个文档都需要有一个类目（category），文档的访问路径就是`/类目name/文档name`
        // 类目还被用于给左侧导航栏分类、搜索结果分类
        patchDocInfo: docInfo => {
          // debugger;

          // 调试指南：
          // .vscode/launch.json参考本项目的配置。
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
        // 定义顶部导航
        topNav: [
          { text: '指南', href: '/guides/quick-start' },
          { text: '组件文档', href: '/components/component-1' },
        ],
        // 左侧导航
        // 左侧导航与顶部导航的区别：
        // 顶部导航是静态的，不随着“当前所在页面”而变化
        // 左侧导航是动态的，可以随着“当前所在页面”而变化
        sideNav: context => {
          // 同理，你可以在这里打断点调试，观察参数的结构
          const { pageMeta } = context

          const header = (() => {
            // 根据正在展示的文档的元数据，来决定左侧导航栏的标题
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

          // 左侧导航栏编排
          const navCategories = (() => {
            switch (pageMeta.category) {
              // 根据当前页面的信息，来决定左侧导航栏应该展示哪些导航项
              case 'components':
                // 如果当前页面是组件
                // 则导航栏需要导航这下面选中的文档：
                return [
                  {
                    // 选中那些具有tag"自定义类目1"的文档
                    tagSelector: {
                      自定义类目1: true, // true匹配任何tagValue
                      // 自定义类目1: 'myvalue',  // 只匹配具有tag"自定义类目1:myvalue"的文档
                    },
                    /**
                     * 根据文档的tag值来排序。没有对应tag的文档，优先级默认为1。
                     * 例子：
                     * 文档1有tag：_自定义类目sort:2,
                     * 文档2有tag：_自定义类目sort:0,
                     * 文档3没有tag。
                     * 那么在导航菜单中的顺序为[文档2，文档3，文档1]
                     */
                    sortByTag: '_自定义类目sort',
                  },
                  {
                    tagSelector: {
                      baseComp: true,
                    },
                    // 将选中的文档放在一个SubMenu中，指定这个SubMenu的label
                    // 仅当flat不为true时有效
                    label: '基础组件',
                  },
                ]
              case 'guides':
                // 也可以选中指定category的文档
                return [
                  {
                    categoryName: 'guides',
                    // 不将这些文档放在可展开/收起的SubMenu中
                    flat: true,
                  },
                ]
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
      },
    },
  ],
}
