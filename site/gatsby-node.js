const path = require('path')
const DemoPlugin = require('./lib/buildTools/demoPlugin')
const _ = require('lodash')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const bizComponents = await findBizDocs(graphql)
  const baseComponents = await findBaseDocs(graphql)
  const guides = await findGuides(graphql)

  console.log(
    `Found ${bizComponents.length} document files for business components
    and ${baseComponents.length} document files for base components
    and ${guides.length} guides`
  )

  bizComponents.forEach(docInfo => {
    createPage({
      path: docInfo.path,
      component: path.resolve('./src/components/SiteLayout/index.tsx'),
      context: {
        mdxId: docInfo.mdxId,
        pageMeta: docInfo,
        siteMeta: {
          bizComponents,
          baseComponents,
          guides,
        },
      },
    })
  })

  baseComponents.forEach(docInfo => {
    createPage({
      path: docInfo.path,
      component: path.resolve('./src/components/SiteLayout/index.tsx'),
      context: {
        mdxId: docInfo.mdxId,
        pageMeta: docInfo,
        siteMeta: {
          bizComponents,
          baseComponents,
          guides,
        },
      },
    })
  })

  guides.forEach(guideInfo => {
    createPage({
      path: guideInfo.path,
      component: path.resolve('./src/components/SiteLayout/index.tsx'),
      context: {
        mdxId: guideInfo.mdxId,
        pageMeta: guideInfo,
        siteMeta: {
          bizComponents,
          baseComponents,
          guides,
        },
      },
    })
  })
}

exports.onCreateWebpackConfig = helpers => {
  const { actions } = helpers
  actions.setWebpackConfig({
    resolve: {
      modules: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, '../node_modules'),
        'node_modules',
      ],
      alias: {
        '@site': path.resolve(__dirname, 'src'),
        '@siteComp': path.resolve(__dirname, 'src/components'),
        '@siteBuildTools': path.resolve(__dirname, 'lib/buildTools'),
      },
    },
    plugins: [new DemoPlugin()],
    module: {
      rules: [
        {
          resourceQuery: /loadDemoInfo/,
          use: './lib/buildTools/demoLoader.js',
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

async function findBizDocs(graphql) {
  const result = await graphql(
    `
      query QueryBizComponentDocs {
        allFile(filter: { sourceInstanceName: { eq: "biz-component" } }) {
          edges {
            node {
              absolutePath
              sourceInstanceName
              relativePath
              relativeDirectory
              childMdx {
                frontmatter {
                  name
                  zhName
                  type
                }
                id
              }
            }
          }
        }
      }
    `
  )
  if (result.errors) {
    console.error(result.errors)
    throw result.errors
  }
  return result.data.allFile.edges
    .map(({ node }) => node)
    .filter(
      node =>
        node.childMdx &&
        node.childMdx.frontmatter &&
        node.childMdx.frontmatter.name &&
        node.childMdx.frontmatter.type === 'biz-component'
    )
    .map(node => {
      // name should be CamelCase
      const name = capitalizeFirstLetter(
        _.camelCase(node.childMdx.frontmatter.name)
      )
      return {
        name,
        zhName: node.childMdx.frontmatter.zhName,
        type: 'biz-component',
        mdxId: node.childMdx.id,
        path: `/BizComponents/${name}`,
      }
    })
}

async function findBaseDocs(graphql) {
  const result = await graphql(`
    query QueryBaseComponentDocs {
      allFile(filter: { sourceInstanceName: { eq: "base-component" } }) {
        edges {
          node {
            absolutePath
            sourceInstanceName
            relativePath
            relativeDirectory
            childMdx {
              id
              headings(depth: h1) {
                value
                depth
              }
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
    throw result.errors
  }
  return result.data.allFile.edges
    .filter(({ node }) =>
      node.relativePath.match(/^src\/components\/([^/]+)\/README.md$/)
    )
    .map(({ node }) => {
      const match = node.relativePath.match(
        /^src\/components\/([^/]+)\/README.md$/
      )
      // we expect markdown path like: src/components/button/README.md
      if (!match) {
        throw new Error(`unexpected markdown file: ${node.relativePath}`)
      }
      if (node.childMdx.headings.length !== 1) {
        throw new Error(
          `${node.relativePath} should have single level 1 heading!`
        )
      }
      // 【从Readme路径解析出的name】
      // componentName should be kebab-case
      const componentName = match[1]

      // 【从Readme标题解析出的name】
      // nameFromHeading should be CamelCase
      const { name: nameFromHeading, zhName } = resolveBaseComponentDocHeading(
        node.childMdx.headings[0].value
      )
      // 【从Readme路径解析出的name】应该与【从Readme标题解析出的name】保持一致
      if (
        _.kebabCase(nameFromHeading) !== componentName ||
        capitalizeFirstLetter(_.camelCase(componentName)) !== nameFromHeading
      ) {
        throw new Error(
          `component name from path and component name from heading don't match: ${componentName} != ${nameFromHeading} `
        )
      }

      return {
        name: nameFromHeading,
        zhName,
        type: 'base-component',
        mdxId: node.childMdx.id,
        path: `/BaseComponents/${nameFromHeading}`,
      }
    })
}

/**
 * 基础组件的标题是`英文名 中文名`的格式
 */
function resolveBaseComponentDocHeading(text) {
  const arr = text.split(' ')
  if (arr.length !== 2) throw new Error(`unexpected heading: ${text}`)
  const name = arr[0]
  const zhName = arr[1]
  // 检查英文名只有英文字母
  if (!/^[A-Za-z]+$/.test(name)) {
    throw new Error(`invalid name in heading: ${name}`)
  }
  return {
    name,
    zhName,
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

async function findGuides(graphql) {
  const result = await graphql(
    `
      query QueryGuides {
        allFile(filter: { sourceInstanceName: { eq: "guide" } }) {
          edges {
            node {
              absolutePath
              sourceInstanceName
              relativePath
              relativeDirectory
              childMdx {
                id
                frontmatter {
                  sort
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
  if (result.errors) {
    console.error(result.errors)
    throw result.errors
  }
  return result.data.allFile.edges
    .map(({ node }) => node)
    .filter(node => node.childMdx)
    .sort((node1, node2) => {
      const order1 = node1.childMdx.frontmatter.order || Number.MAX_SAFE_INTEGER
      const order2 = node2.childMdx.frontmatter.order || Number.MAX_SAFE_INTEGER
      return order1 - order2
    })
    .map(node => {
      if (
        !(
          node.childMdx &&
          node.childMdx.frontmatter &&
          node.childMdx.frontmatter.name &&
          node.childMdx.frontmatter.zhName
        )
      ) {
        throw new Error(`invalid guide: no frontmatter`)
      }
      // eslint-disable-next-line prefer-destructuring
      const name = node.childMdx.frontmatter.name
      // eslint-disable-next-line prefer-destructuring
      const zhName = node.childMdx.frontmatter.zhName
      return {
        name: zhName,
        zhName: '',
        type: 'guide',
        mdxId: node.childMdx.id,
        path: `/guides/${name}`,
      }
    })
}
