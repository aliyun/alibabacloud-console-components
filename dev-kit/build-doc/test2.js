const { watch } = require('rollup')
const babel = require('@rollup/plugin-babel').default
const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const react = require('react')
const reactIs = require('react-is')
const propTypes = require('prop-types')

console.log(Object.keys(react))

const rollupConfig = {
  input: '@@dev-entry.jsx',
  plugins: [
    // MdxPlugin(),
    babel({
      babelrc: false,
      presets: [['@babel/env', { modules: false }], '@babel/react'],
      babelHelpers: 'bundled',
      extensions: ['js', 'jsx', 'md', 'mdx'],
      exclude: /node_modules/,
    }),
    resolve({
      // resolveOnly: [
      //   'react',
      //   '@mdx-js/react',
      //   'react-dom',
      //   '@alicloud/console-components-lib-documenter/src/runtime/MdxWrapper',
      // ],
    }),
    // https://github.com/rollup/rollup-plugin-commonjs/issues/290#issuecomment-537683484
    commonjs({
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
  // external: [...externals],
  output: {
    dir: 'dist',
    format: 'iife',
    entryFileNames: 'local-dev.js',
  },
}

const watcher = watch(rollupConfig)
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
