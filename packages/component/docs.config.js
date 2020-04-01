const path = require('path')
// eslint-disable-next-line import/no-extraneous-dependencies
const glob = require('glob')

const basePath = path.resolve(__dirname, '.')

function getBaseComponentList() {
  const filePaths = glob.sync('src/components/*/README.md', {
    cwd: basePath,
  })
  const components = filePaths.map((filePath) => ({
    // filePath类似于 src/components/card/README.md
    name: filePath.split('/')[2],
    path: path.resolve(__dirname, filePath),
  }))
  return components
}

const compilations = getBaseComponentList().reduce((acc, cur) => {
  acc[cur.name] = {
    entry: cur.path,
    outputFileName: `${cur.name}.system.js`,
  }
  return acc
}, {})

module.exports = {
  // mode: 'production',
  // mode: 'development',
  outputDir: path.resolve(__dirname, 'dist/docs'),
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
}
