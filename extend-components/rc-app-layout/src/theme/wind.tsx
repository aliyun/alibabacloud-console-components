import { withStyledTheme } from '@alicloud/css-var-utils'
import { theme as sourceTheme } from './xconsole'

export const theme = sourceTheme.overwrite({
  '--console-layout-nav-trigger-width': '0px',
  '--console-layout-nav-width-collapsed': '8px',
  '--console-layout-nav-trigger-height': '66px',
  '--console-layout-nav-trigger-clickable-width': '24px',
  '--console-layout-nav-trigger-clickable-height': '100px',
  '--console-layout-nav-trigger-border': '8px solid transparent',
  '--console-layout-nav-trigger-border-l': '16px solid #ebebeb',
  '--console-layout-nav-trigger-shadow': 'none',
  '--console-layout-nav-trigger-border-l-hover': '18px solid #dedede',
  '--console-layout-nav-trigger-icon-color-hover': '#888888',
  '--console-layout-nav-trigger-icon-left': '-8px',
  '--console-layout-nav-trigger-bg': 'transparent',
  '--console-layout-nav-shadow': 'none',
  '--console-layout-nav-bg': '#f5f5f5',
  '--console-layout-nav-border': 'none',
})

export const WindTheme = withStyledTheme(theme, (props) => props.children)
