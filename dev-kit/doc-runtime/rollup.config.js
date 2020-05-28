// import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: './lib/index.js',
  output: {
    dir: './dist',
  },
  plugins: [
    {
      name: 'my-resolve',
      resolveId(id) {
        if (id === 'path') return this.resolve('path-browserify')
      },
    },
    resolve({
      browser: true,
      // resolveOnly: [
      //   // /^\.\/lib/,
      //   'tslib',
      //   'classnames',
      //   /^react-syntax-highlighter/,
      //   'unified',
      //   /remark-parse/,
      //   /parser/,
      //   'remark-rehype',
      //   'rehype-react',
      //   'rehype-raw',
      //   'rehype-sanitize',
      //   'hast-util-sanitize/lib/github.json',
      // ],
    }),
    commonjs(),
    json(),
  ],
  external: [
    'styled-components',
    '@alicloud/console-components',
    'react-dom',
    'react',
  ],
}
