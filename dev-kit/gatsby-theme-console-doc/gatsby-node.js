/* eslint-disable global-require, @typescript-eslint/no-var-requires */

const path = require('path')
const _ = require('lodash')
const IgnoreNotFoundExportPlugin = require('ignore-not-found-export-webpack-plugin')
const resolveFrom = require('resolve-from')

// 从gatsby依赖的webpack中拿到这几个webpack内部模块
// 因为项目中可能不止存在一个webpack，所以不能直接require('webpack/...')
const gatsbyPath = require.resolve('gatsby')
const ConstDependency = require(resolveFrom(
  gatsbyPath,
  'webpack/lib/dependencies/ConstDependency'
))
const ModuleDependency = require(resolveFrom(
  gatsbyPath,
  'webpack/lib/dependencies/ModuleDependency'
))
const NormalModule = require(resolveFrom(
  gatsbyPath,
  'webpack/lib/NormalModule'
))

const DemoPlugin = require('@alicloud/console-components-lib-publisher/lib/buildtools/demoPlugin')(
  {
    ConstDependency,
    ModuleDependency,
    NormalModule,
  }
)
const WrapReqPlugin = require('./lib/buildtime/WrapRequestWebpackPlugin')

exports.createPages = async ({ graphql, actions }, themeOptions) => {
  const { createPage } = actions
  const {
    patchDocInfo,
    fileSystemCrawlers,
    topNav = [],
    sideNav,
    primaryPath,
    categories: categoryNameMap,
    siteMetadata,
    dynamicDocs = [],
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
  if (!_.get(themeOptions, ['siteMetadata', 'siteName'])) {
    throw new Error(`themeOptions.siteMetadata.siteName should be set`)
  }
  if (!Array.isArray(dynamicDocs)) {
    throw new Error(`themeOptions.dynamicDocs should be an array`)
  }

  const queryRes = await graphql(
    `
      query QueryDocs {
        allMdx {
          nodes {
            parent {
              ... on File {
                absolutePath
                sourceInstanceName
                relativePath
                relativeDirectory
              }
            }
            body
            frontmatter {
              name
              zhName
              sort
              tags
            }
          }
        }
      }
    `
  )

  // 从本地获取数据的文档
  const localDocsInfo = queryRes.data.allMdx.nodes
    .filter(node => {
      const isFromFileSystemCrawlers = !!fileSystemCrawlers.find(
        ({ name }) => name === node.parent.sourceInstanceName
      )
      return (
        isFromFileSystemCrawlers &&
        node &&
        node.frontmatter &&
        node.frontmatter.name &&
        node.frontmatter.zhName
      )
    })
    .map(node => {
      const { name, zhName, sort, tags } = node.frontmatter
      const { sourceInstanceName, relativePath } = node.parent
      return {
        zhName,
        name,
        sort,
        mdxBody: node.body,
        mdFilePath: relativePath,
        fileSystemCrawlerName: sourceInstanceName,
        type: 'doc',
        tags,
      }
    })

  const dynamicDocsInfo = createDynamicDocsMeta({ themeOptions })

  const AllDocsInfo = [...localDocsInfo, ...dynamicDocsInfo]
    .map(docInfo => {
      // category is set by themeOptions.patchDocInfo
      return { ...docInfo, ...patchDocInfo(docInfo) }
    })
    .map(docInfo => {
      const { category, name } = docInfo
      return {
        ...docInfo,
        path: `/${category}/${name}`,
      }
    })

  // 不管是本地文档还是动态加载的文档，都需要有name, zhName, category, path元信息
  AllDocsInfo.forEach(checkDocInfo)

  // 按照category字段分类
  const categories = (() => {
    const result = []
    AllDocsInfo.forEach(page => {
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

  const siteMeta = {
    ...siteMetadata,
    categories,
    topNav,
    primaryPath,
  }

  checkSiteMeta(siteMeta)

  AllDocsInfo.forEach(docInfo => {
    const sideNavConfig = sideNav({
      pageMeta: docInfo,
      siteMeta,
    })
    // checkSideNavConfig(sideNavConfig)

    createPage({
      path: docInfo.path,
      component: path.resolve(
        __dirname,
        './src/runtime/SiteLayout/PageElement.tsx'
      ),
      context: {
        pageMeta: { ...docInfo, sideNav: sideNavConfig },
        siteMeta,
      },
    })
  })

  createPage({
    path: '/',
    component: path.resolve(
      __dirname,
      './src/runtime/SiteLayout/PageElement.tsx'
    ),
    context: {
      pageMeta: { type: 'index-page' },
      siteMeta,
    },
  })

  createPage({
    path: '/doc-preview',
    component: path.resolve(
      __dirname,
      './src/runtime/SiteLayout/PageElement.tsx'
    ),
    context: {
      pageMeta: { type: 'doc-preview' },
      siteMeta,
    },
  })

  createPage({
    path: '/404',
    component: path.resolve(
      __dirname,
      './src/runtime/SiteLayout/PageElement.tsx'
    ),
    context: {
      pageMeta: { type: '404' },
      siteMeta,
    },
  })
}

exports.onCreateWebpackConfig = (helpers, themeOptions) => {
  const { actions } = helpers

  const resolveAlias = themeOptions.resolveAlias || {}
  actions.setWebpackConfig({
    resolve: {
      modules: Array.isArray(themeOptions.nodeModules)
        ? [...themeOptions.nodeModules]
        : undefined,
      alias: {
        '@runtime': '@alicloud/console-components-lib-documenter/src/runtime',
        ...resolveAlias,
      },
    },
    plugins: [
      new DemoPlugin(),
      new IgnoreNotFoundExportPlugin(),
      new WrapReqPlugin(require('./lib/buildtime/WrapDemoRequest')),
    ],
    module: {
      rules: [
        {
          resourceQuery: /loadDemo/,
          use: [
            {
              loader: require.resolve(
                '@alicloud/console-components-lib-publisher/lib/buildtools/demoLoader.js'
              ),
            },
          ],
        },
        { parser: { system: false } },
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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MdxFrontmatter @infer {
      sort: Float
      tags: JSON
    }
  `
  createTypes(typeDefs)
}

function createDynamicDocsMeta({ themeOptions }) {
  const { dynamicDocs } = themeOptions

  return dynamicDocs.map(dynamicDoc => {
    if (typeof dynamicDoc.prodPkgName !== 'string') {
      throw new Error(`dynamicDoc.prodPkgName should be a string`)
    }
    return {
      ...dynamicDoc,
      type: 'dynamic-doc',
    }
  })
}

function checkDocInfo(docInfo) {
  if (typeof docInfo.name !== 'string' || docInfo.name.length === 0) {
    throw new Error(`docInfo.name should be a string`)
  }
  if (typeof docInfo.zhName !== 'string' || docInfo.zhName.length === 0) {
    throw new Error(`docInfo.zhName should be a string`)
  }
  if (typeof docInfo.path !== 'string' || docInfo.path.length === 0) {
    throw new Error(`docInfo.path should be a string`)
  }
  if (typeof docInfo.category !== 'string' || docInfo.category.length === 0) {
    throw new Error(
      `docInfo.category should be set. (by themeOptions.patchDocInfo)`
    )
  }
}

function checkSiteMeta(siteMeta) {}
