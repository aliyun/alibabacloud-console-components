const path = require('path')

module.exports = {
  pathPrefix: `/sirui.csr/test-wind-site-deploy`,
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        remarkPlugins: [
          [
            require('./lib/buildTools/linkInstructions/remarkPlugin'),
            {
              instructions: [
                require('./lib/buildTools/linkInstructions/importDemo'),
                require('./lib/buildTools/linkInstructions/renderInterface'),
                require('./lib/buildTools/linkInstructions/embedAPIFromFusion'),
              ],
            },
          ],
          require('./lib/buildTools/legacyImportDemoInstruction/remarkPlugin'),
        ],
        rehypePlugins: [require('rehype-slug')],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
        ],
        // https://github.com/gatsbyjs/gatsby/issues/15486#issuecomment-510153237
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'biz-component',
        path: path.resolve(__dirname, '../packages'),
        ignore: [
          // ignore the base components folder
          path.resolve(__dirname, '../packages', 'component'),
          // ignore files/folders starting with a dot
          '**/.*',
          // ignore files that is not markdown
          '**/*.!(md|mdx)',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'base-component',
        path: path.resolve(__dirname, '../packages', 'component'),
        ignore: ['**/.*', '**/*.!(md|mdx)'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'guide',
        path: path.resolve(__dirname, '../guides'),
      },
    },
    // 'gatsby-transformer-json',
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-less',
  ],
}
