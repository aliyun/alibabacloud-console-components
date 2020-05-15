/* eslint-disable */

const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
const __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    const result = {}
    if (mod != null)
      for (const k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
    result.default = mod
    return result
  }

const rollup_1 = require('rollup')
const plugin_babel_1 = __importDefault(require('@rollup/plugin-babel'))
const plugin_node_resolve_1 = __importDefault(
  require('@rollup/plugin-node-resolve')
)
const plugin_commonjs_1 = __importDefault(require('@rollup/plugin-commonjs'))
const react = __importStar(require('react'))
const reactIs = __importStar(require('react-is'))
const propTypes = __importStar(require('prop-types'))

console.log(Object.keys(react))

const test = () => {
  const rollupConfig = {
    input: '@@dev-entry.jsx',
    plugins: [
      plugin_babel_1.default({
        babelrc: false,
        presets: [['@babel/env', { modules: false }], '@babel/react'],
        babelHelpers: 'bundled',
        extensions: ['js', 'jsx', 'md', 'mdx'],
        exclude: /node_modules/,
      }),
      plugin_node_resolve_1.default(),
      // https://github.com/rollup/rollup-plugin-commonjs/issues/290#issuecomment-537683484
      plugin_commonjs_1.default({
        namedExports: {
          react: Object.keys(react),
          'react-is': Object.keys(reactIs),
          'prop-types': Object.keys(propTypes),
        },
      }),
      {
        name: 'load-dev-entry',
        resolveId(id) {
          if (id === '@@dev-entry.jsx') return id
        },
        load(id) {
          if (id === '@@dev-entry.jsx') {
            return `
        import React from 'react'
        console.log(React)
        `
          }
        },
      },
    ],
    output: {
      dir: 'dist',
      format: 'iife',
      entryFileNames: 'local-dev.js',
    },
  }
  const watcher = rollup_1.watch(rollupConfig)
  watcher.on('event', (event) => {
    // event.code can be one of:
    //   START        — the watcher is (re)starting
    //   BUNDLE_START — building an individual bundle
    //   BUNDLE_END   — finished building a bundle
    //   END          — finished building all bundles
    //   ERROR        — encountered an error while bundling
    console.log(event.code)
    if (event.code === 'ERROR') {
      debugger
      console.log(event.error)
    }
  })
}
test()
// # sourceMappingURL=index.js.map
