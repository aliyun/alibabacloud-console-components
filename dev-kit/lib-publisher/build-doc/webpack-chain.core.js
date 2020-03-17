const Config = require('webpack-chain')
const DemoPlugin = require('../lib/buildtools/demoPlugin')({
  ConstDependency: require('webpack/lib/dependencies/ConstDependency'),
  ModuleDependency: require('webpack/lib/dependencies/ModuleDependency'),
  NormalModule: require('webpack/lib/NormalModule'),
})
const path = require('path')
const webpack = require('webpack')
const babelConfig = require('./babel.config')

module.exports.createConfig = ({ entryMDX, rootDir, entryJS }) => {
  const config = new Config()

  config
    // add entry
    .entry('doc')
    .clear()
    .add(entryJS)
    .end()
    .output.chunkFilename('doc-chunk-[id].js')
    .end()

    .resolve.extensions // config resolve.extensions
    .add('.tsx')
    .add('.ts')
    .add('.jsx')
    .add('.js')
    .add('.json')
    .end()
    .end()
    .resolve.alias.set('@entry-mdx', entryMDX)
    .set('@cc-dev-out', path.resolve(rootDir, 'cc-dev-out'))
    .end()
    .end()
    // demo plugin
    .plugin('demo-plugin')
    .use(DemoPlugin)
    .end()
    // https://fusion.design/component/basic/config-provider#%E5%87%8F%E5%B0%8F%E5%BA%94%E7%94%A8%E4%B8%AD-webpack-%E6%89%93%E5%8C%85-moment-%E4%BD%93%E7%A7%AF
    .plugin('optimize-moment')
    .use(webpack.ContextReplacementPlugin, [/moment[\/\\]locale$/, /zh-cn/])
    .end()
    // transpile js/ts
    .module.rule('js')
    .test(/\.(j|t)sx?$/)
    .exclude.add(/(node_modules|bower_components)/)
    .end()
    .use('babel-loader')
    .loader('babel-loader')
    .options({
      ...babelConfig,
    })
    .end()
    .end()
    // transpile css
    .rule('css')
    .test(/\.css$/)
    .use('style-loader')
    .loader('style-loader')
    .end()
    .use('css-loader')
    .loader('css-loader')
    .end()
    .end()
    // transpile mdx
    .rule('mdx')
    .test(/\.mdx?$/)
    // .use('debug-loader')
    // .loader(path.resolve(__dirname, './debugLoader.js'))
    // .end()
    .use('babel-loader')
    .loader('babel-loader')
    .options({
      ...babelConfig,
    })
    .end()
    // .use('debug-loader')
    // .loader(path.resolve(__dirname, './debugLoader.js'))
    // .end()
    .use('mdx-loader')
    .loader('@mdx-js/loader')
    .options({
      remarkPlugins: [
        [
          require('../lib/buildtools/remarkPlugins/linkInstructions/remarkPlugin'),
          {
            instructions: [
              require('../lib/buildtools/remarkPlugins/linkInstructions/importDemo'),
              require('../lib/buildtools/remarkPlugins/linkInstructions/lazyImportDemo'),
              require('../lib/buildtools/remarkPlugins/linkInstructions/renderInterface'),
            ],
          },
        ],
        require('../lib/buildtools/remarkPlugins/transformImg'),
        require('../lib/buildtools/remarkPlugins/addHeadings'),
      ],
      rehypePlugins: [require('rehype-slug')],
    })
    .end()
    .use('frontmatter-loader')
    .loader(
      path.resolve(__dirname, '../lib/buildtools/mdxFrontmatterLoader.js')
    )
    .end()
    .end()
    // process demo entry
    .rule('demo-entry')
    .resourceQuery(/loadDemo/)
    .use('demoLoader')
    .loader(path.resolve(__dirname, '../lib/buildtools/demoLoader.js'))
    .end()
    .end()
    .rule('load-image')
    .test(/\.(gif|png|jpe?g|svg)$/i)
    .use('url-loader')
    .loader('url-loader')
    .end()
    .use('image-webpack-loader')
    .loader('image-webpack-loader')
    .end()
    .end()
    .end()
    .end()

  return config
}
