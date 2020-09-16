const path = require('path')

const resolveCwd = (...args) => path.resolve(process.cwd(), ...args)

exports.CONFIG = path.resolve(__dirname)
exports.DEMO = resolveCwd('demo')
exports.DEMO_INDEX_FILE = resolveCwd('demo', 'index.js')
exports.SRC = resolveCwd('src')
exports.SRC_INDEX_FILE = resolveCwd('src', 'index.js')
// exports.SRC_SASS_INDEX_FILE = resolveCwd('src', 'index.scss')
exports.SRC_SASS_INDEX_FILE = '@alife/alicloud-components/dist/xconsole.css'
// exports.SRC_SASS_NORESET_INDEX_FILE = resolveCwd('src', 'index-noreset.scss')
exports.SRC_SASS_NORESET_INDEX_FILE =
  '@alife/alicloud-components/dist/xconsole-no-reset.css'
exports.BUNDLE = resolveCwd('dist')
exports.LIB = resolveCwd('lib')
exports.NODE_MODULES = resolveCwd('node_modules')
exports.WORKSPACE_ROOT = resolveCwd('../..')
exports.WORKSPACE_ROOT_NODE_MODULES = resolveCwd('../../node_modules')
