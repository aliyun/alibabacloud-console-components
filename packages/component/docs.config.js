const path = require('path')
const {
  getBaseComponentList,
} = require('./docBuildToolsOut/getBaseComponentList')

const compilations = getBaseComponentList().reduce((acc, cur) => {
  acc[cur.name] = {
    entry: cur.path,
    outputFileName: `${cur.name}.system.js`,
  }
  return acc
}, {})

const OUT_DIR = path.resolve(__dirname, 'doc-data/dist')

module.exports = {
  outputDir: OUT_DIR,
  compilations,
  devServeConfig: {
    mode: 'development',
    alias: {
      // dev-kit/lib-publisher/build-doc/dev-index.tsx 这一行引了它，将它换成源码
      '@alicloud/console-components/dist/wind.css': path.resolve(
        __dirname,
        './src/styles/prerequisite.scss'
      ),
      '@alicloud/console-components': path.resolve(__dirname, './src'),
    },
  },
  buildConfig: {
    mode: 'production',
    externals: ['@alicloud/console-components', 'lodash'],
  },
  remarkPlugins: [
    require('./docBuildToolsOut/legacyImportDemoInstruction/remarkPlugin'),
  ],
  linkInstructions: [
    require('./docBuildToolsOut/linkInstructions/embedAPIFromFusion'),
  ],
}
