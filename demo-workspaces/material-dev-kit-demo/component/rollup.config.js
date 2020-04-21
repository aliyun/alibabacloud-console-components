import { MdxPlugin } from '@alicloud/console-components-build-doc'
import babel from 'rollup-plugin-babel'

const commomDeps = ['react', '@mdx-js/react']

export default {
  input: { doc: './README.mdx' },
  output: {
    dir: 'docs',
    // 输出为systemjs、esm的情况下，无法 import React from 'react'
    format: 'amd',
    // exports: 'named',
    entryFileNames: '[name].[format].js',
  },
  plugins: [
    MdxPlugin(),
    babel({
      babelrc: false,
      presets: [['@babel/env', { modules: false }], '@babel/react'],
      extensions: ['md', 'mdx'],
    }),
  ],
  external: [...commomDeps, '@alicloud/cc-demo-component'],
}
