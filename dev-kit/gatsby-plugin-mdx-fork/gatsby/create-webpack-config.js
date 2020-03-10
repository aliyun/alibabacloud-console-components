const path = require(`path`)
const escapeStringRegexp = require(`escape-string-regexp`)
const defaultOptions = require(`../utils/default-options`)

module.exports = (
  { stage, loaders, actions, plugins, cache, ...other },
  pluginOptions
) => {
  const options = defaultOptions(pluginOptions)
  const testPattern = new RegExp(
    options.extensions.map(ext => `${escapeStringRegexp(ext)}$`).join(`|`)
  )
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          include: cache.directory,
          use: [loaders.js()],
        },
        {
          test: /\.js$/,
          include: path.dirname(require.resolve(`@alicloud/gatsby-plugin-mdx-fork`)),
          use: [loaders.js()],
        },

        {
          test: /mdx-components\.js$/,
          include: path.dirname(require.resolve(`@alicloud/gatsby-plugin-mdx-fork`)),
          use: [
            loaders.js(),
            {
              loader: path.join(
                `@alicloud/gatsby-plugin-mdx-fork`,
                `loaders`,
                `mdx-components`
              ),
              options: {
                plugins: options.mdxPlugins,
              },
            },
          ],
        },
        {
          test: /mdx-scopes\.js$/,
          include: path.dirname(require.resolve(`@alicloud/gatsby-plugin-mdx-fork`)),
          use: [
            loaders.js(),
            {
              loader: path.join(`@alicloud/gatsby-plugin-mdx-fork`, `loaders`, `mdx-scopes`),
              options: {
                cache: cache,
              },
            },
          ],
        },
        {
          test: /mdx-wrappers\.js$/,
          include: path.dirname(require.resolve(`@alicloud/gatsby-plugin-mdx-fork`)),
          use: [
            loaders.js(),
            {
              loader: path.join(`@alicloud/gatsby-plugin-mdx-fork`, `loaders`, `mdx-wrappers`),
              options: {
                store: other.store,
              },
            },
          ],
        },
        {
          test: testPattern,
          use: [
            loaders.js(),
            {
              loader: path.join(`@alicloud/gatsby-plugin-mdx-fork`, `loaders`, `mdx-loader`),
              options: {
                cache: cache,
                actions: actions,
                ...other,
                pluginOptions: options,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
      }),
    ],
  })
}
