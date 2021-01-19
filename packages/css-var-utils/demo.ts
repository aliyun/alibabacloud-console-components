import styled from 'styled-components'
import { CssVarTheme } from './src'

export const defaultTheme = CssVarTheme.create({
  /** 按钮背景颜色 */
  '--btn-bg-color': { default: '#fff' },
  /** 卡片圆角 */
  '--card-border-radius': { default: '4px' },
  /** 输入框 */
  '--input-border-color': { default: '#dcdfe6' },

  // TODO，支持引用其他变量
  // test: {
  //   testFun: () => {
  //     // return defaultTheme.vars['--input-border-color']
  //     return {
  //       default: `calc(${defaultTheme.vars['--card-border-radius'].consume} + 1px)`
  //     }
  //   },
  // },
} as const)

export const darkTheme = defaultTheme.extends({
  '--btn-bg-color': defaultTheme.vars['--input-border-color'].default,
  '--input-border-color': '#6b6f83',
} as const)

export const anotherDarkTheme = darkTheme.extends({
  '--input-border-color': '#8272ec',
  '--card-border-radius': '2px',
} as const)
