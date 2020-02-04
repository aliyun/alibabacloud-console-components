/* eslint-disable global-require, @typescript-eslint/no-var-requires */

// const path = require('path')

module.exports = themeOptions => {
  const {
    fileSystemCrawlers,
    remarkPlugins = [],
    linkInstructions = [],
  } = themeOptions

  const fsPlugins = (() => {
    if (!fileSystemCrawlers) return []
    if (!Array.isArray(fileSystemCrawlers))
      throw new Error(`themeOptions.fileSystemCrawlers should be array or undefined`)
    return fileSystemCrawlers.map(
      ({ rootDir, ignore = [], name = 'default-file-system-crawler-name' }) => {
        if (!Array.isArray(ignore))
          throw new Error(
            `themeOptions.fileSystemCrawlers[].ignore should be array`
          )
        if (!rootDir)
          throw new Error(
            `themeOptions.fileSystemCrawlers[].rootDir should be set`
          )
        return {
          resolve: 'gatsby-source-filesystem',
          options: {
            name,
            path: rootDir,
            ignore: ['**/.*', '**/*.!(md|mdx)', ...ignore],
          },
        }
      }
    )
  })()

  return {
    plugins: [
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          extensions: ['.mdx', '.md'],
          remarkPlugins: [
            [
              require('@alicloud/console-components-lib-publisher/lib/buildtools/remarkPlugins/linkInstructions/remarkPlugin'),
              {
                instructions: [
                  require('./lib/buildtime/remarkPlugins/linkInstructions/importDemo'),
                  require('./lib/buildtime/remarkPlugins/linkInstructions/renderInterface'),
                  ...linkInstructions,
                ],
              },
            ],
            ...remarkPlugins,
          ],
          rehypePlugins: [require('rehype-slug')],
        },
      },
      ...fsPlugins,
      'gatsby-plugin-typescript',
      'gatsby-plugin-styled-components',
      'gatsby-plugin-less',
      'gatsby-plugin-react-helmet',
    ],
  }
}
