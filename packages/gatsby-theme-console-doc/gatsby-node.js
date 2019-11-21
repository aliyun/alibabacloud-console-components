/* eslint-disable global-require, @typescript-eslint/no-var-requires */

const path = require('path')
const _ = require('lodash')
const DemoPlugin = require('./lib/buildtime/demoPlugin')

exports.createPages = async ({ graphql, actions }, themeOptions) => {
  const { createPage } = actions
  const {
    patchDocInfo,
    fileSystemCrawlers,
    topNav = [],
    sideNav,
    primaryPath,
    categories: categoryNameMap,
  } = themeOptions
  if (typeof patchDocInfo !== 'function')
    throw new Error(`themeOptions.patchDocInfo should be set`)
  if (!Array.isArray(topNav))
    throw new Error(`themeOptions.topNav should be set`)
  if (typeof sideNav !== 'function')
    throw new Error(`themeOptions.sideNav should be set`)
  if (typeof primaryPath !== 'string')
    throw new Error(`themeOptions.primaryPath should be set`)
  if (!_.isPlainObject(categoryNameMap)) {
    throw new Error(`themeOptions.categories should be set`)
  }
  const queryRes = await graphql(
    `
      query QueryDocs {
        allFile {
          edges {
            node {
              absolutePath
              sourceInstanceName
              relativePath
              relativeDirectory
              childMdx {
                body
                frontmatter {
                  name
                  zhName
                }
                headings(depth: h1) {
                  value
                  depth
                }
              }
            }
          }
        }
      }
    `
  )

  const pages = queryRes.data.allFile.edges
    .map(({ node }) => node)
    .filter(node => {
      const isFromFileSystemCrawlers = !!fileSystemCrawlers.find(
        ({ name }) => name === node.sourceInstanceName
      )
      return (
        isFromFileSystemCrawlers &&
        node.childMdx &&
        node.childMdx.frontmatter &&
        node.childMdx.frontmatter.name &&
        node.childMdx.frontmatter.zhName
      )
    })
    .map(node => {
      const { name } = node.childMdx.frontmatter
      const { zhName } = node.childMdx.frontmatter
      const { sourceInstanceName } = node
      return {
        zhName,
        name,
        mdxBody: node.childMdx.body,
        mdFilePath: node.relativePath,
        fileSystemCrawlerName: sourceInstanceName,
      }
    })
    .map(docInfo => {
      // category is set by themeOptions.patchDocInfo
      return { ...docInfo, ...patchDocInfo(docInfo) }
    })
    .map(docInfo => {
      const { category, name } = docInfo
      if (!category) {
        throw new Error(
          `docInfo.category should be set.
          (by themeOptions.patchDocInfo)`
        )
      }
      return {
        ...docInfo,
        path: `/${category}/${name}`,
      }
    })

  // 按照category字段分类
  const categories = (() => {
    const result = []
    pages.forEach(page => {
      const existCategory = result.find(
        category => category.name === page.category
      )
      if (existCategory) {
        existCategory.docs.push(page)
      } else {
        const newCategoryName = page.category
        if (typeof categoryNameMap[newCategoryName] !== 'string')
          throw new Error(
            `can't find chinese categoryName for ${newCategoryName}`
          )
        const newCategory = {
          name: newCategoryName,
          zhName: categoryNameMap[newCategoryName],
          docs: [page],
        }
        result.push(newCategory)
      }
    })
    return result
  })()
  if (categories.length < Object.keys(categoryNameMap).length) {
    throw new Error(
      `No doc for some category.
      Please reduce some mapping in themeOptions.categories.
      ${JSON.stringify(categories.map(({ name }) => name))}
      vs
      ${JSON.stringify(categoryNameMap)}
      `
    )
  }

  console.log(`|-------docs info---------|`)
  categories.forEach(({ name, docs }) => {
    console.log(`category: ${name}, docs count: ${docs.length}.`)
  })
  console.log(`|-------docs info---------|`)

  pages.forEach(pageInfo => {
    const sideNavConfig = sideNav({
      pageMeta: pageInfo,
      siteMeta: {
        categories,
        topNav,
      },
    })
    // checkSideNavConfig(sideNavConfig)

    createPage({
      path: pageInfo.path,
      component: path.resolve(__dirname, './src/runtime/SiteLayout/index.tsx'),
      context: {
        pageMeta: { ...pageInfo, type: 'doc', sideNav: sideNavConfig },
        siteMeta: {
          categories,
          topNav,
          primaryPath,
        },
      },
    })
  })

  createPage({
    path: '/',
    component: path.resolve(__dirname, './src/runtime/SiteLayout/index.tsx'),
    context: {
      pageMeta: { type: 'indexPage' },
      siteMeta: {
        categories,
        topNav,
        primaryPath,
      },
    },
  })

  createPage({
    path: '/404',
    component: path.resolve(__dirname, './src/runtime/SiteLayout/index.tsx'),
    context: {
      pageMeta: { type: '404' },
      siteMeta: {
        categories,
        topNav,
        primaryPath,
      },
    },
  })
}

exports.onCreateWebpackConfig = (helpers, themeOptions) => {
  const { actions } = helpers
  if (!themeOptions.nodeModules) {
    throw new Error(`themeOptions.nodeModules should be set`)
  }
  const resolveAlias = themeOptions.resolveAlias || {}
  actions.setWebpackConfig({
    resolve: {
      modules: [...themeOptions.nodeModules],
      alias: {
        '@runtime': path.resolve(__dirname, 'src/runtime'),
        ...resolveAlias,
      },
    },
    plugins: [new DemoPlugin()],
    module: {
      rules: [
        {
          resourceQuery: /loadDemoInfo/,
          use: path.resolve(__dirname, './lib/buildtime/demoLoader.js'),
        },
      ],
    },
  })

  modifyCssConfig(helpers)
}

/**
 * Fix loading of nexticon font.
 * Protocol-relative URL not work in css loaded by blob url.
 * See 'Source maps and assets referenced with url' at https://github.com/webpack-contrib/style-loader
 */
function modifyCssConfig({ rules, actions, getConfig }) {
  // https://github.com/gatsbyjs/gatsby/issues/6018
  // we modify webpack config to disable sourceMap for css loader
  const defaultConfig = getConfig()

  const defaultRules = defaultConfig.module.rules

  const cleanedRules = defaultRules.reduce((accu, rule) => {
    // replace this rule https://github.com/gatsbyjs/gatsby/blob/0ffbe59ab583bb17c232e31636f5c4b4c725115e/packages/gatsby/src/utils/webpack.config.js#L310
    // with {oneOf: [rules.cssModules(), rules.css()]}
    if (
      rule.oneOf &&
      rule.oneOf[0] &&
      rule.oneOf[0].test &&
      rule.oneOf[0].test.toString() === '/\\.module\\.css$/' &&
      rule.oneOf[1] &&
      rule.oneOf[1].test &&
      rule.oneOf[1].test.toString() === '/\\.css$/' &&
      rule.oneOf[1].use[0].loader.match(/style-loader/)
    ) {
      accu.push({
        oneOf: [rules.cssModules(), rules.css({ sourceMap: false })],
      })
    } else {
      accu.push(rule)
    }
    return accu
  }, [])

  // NOTE: cleaned config without url-loader
  defaultConfig.module.rules = cleanedRules
  actions.replaceWebpackConfig(defaultConfig)
}
