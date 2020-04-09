import { MdxPlugin } from '@alicloud/console-components-build-doc'
import babel from 'rollup-plugin-babel'

const commomDeps = ['react', '@mdx-js/react']

export default {
  input: { doc: './README.mdx' },
  output: {
    dir: 'docs',
    format: 'esm',
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
