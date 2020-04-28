import { MdxPlugin } from '@alicloud/console-components-build-doc'

const commomDeps = ['react', '@mdx-js/react']

const config = (name, path) => {
  return {
    input: {
      [name]: path,
    },
    output: {
      dir: 'docs',
      // 输出为systemjs、esm的情况下，无法 import React from 'react'
      format: 'amd',
      exports: 'named',
      entryFileNames: '[name].js',
    },
    plugins: [MdxPlugin()],
    external: [...commomDeps, '@alicloud/cc-demo-multi-components'],
  }
}

export default [
  config('component1', './components/component1/README.mdx'),
  config('component2', './components/component2/README.mdx'),
  config('index', './README.md'),
]
