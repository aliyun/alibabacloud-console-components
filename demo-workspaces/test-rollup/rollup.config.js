import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import builtins from 'rollup-plugin-node-builtins';
import replace from '@rollup/plugin-replace';

import * as react from 'react'
import * as reactDom from 'react-dom'
import * as reactIs from 'react-is'
import * as propTypes from 'prop-types'
import * as ConsoleComponents from '@alicloud/console-components'

export default {
  input: './index.js',
  plugins: [
    json(),
    builtins(),
    replace({
      'window.process.env.NODE_ENV': JSON.stringify( 'production' ),
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    // https://github.com/rollup/rollup-plugin-commonjs/issues/290#issuecomment-537683484
    commonjs({
      namedExports: {
        react: Object.keys(react).filter((k) => k !== 'default'),
        'react-dom': Object.keys(reactDom).filter((k) => k !== 'default'),
        'react-is': Object.keys(reactIs).filter((k) => k !== 'default'),
        'prop-types': Object.keys(propTypes).filter((k) => k !== 'default'),
        '@alicloud/console-components': Object.keys(ConsoleComponents).filter(
          (k) => k !== 'default'
        ),
      },
    }),
    resolve({
      browser: true
    }),
  ],
  external: [],
  output: {
    dir: 'dist',
    format: 'iife',
  },
  onwarn(warning, warn) {
    if (warning.code === 'THIS_IS_UNDEFINED') return
    if (warning.code === 'CIRCULAR_DEPENDENCY') return
    warn(warning)
  }
}
