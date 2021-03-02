import { withStyledTheme } from '@alicloud/css-var-utils'
import { theme as sourceTheme } from './xconsole'

export const theme = sourceTheme.overwrite({
  '--console-menu-padding': '16px',
  '--console-menu-bg': '#1f1f1f',
  '--console-menu-hover-bg': '#303030',
  '--console-menu-active-bg': '#383838',
  '--console-menu-item-height': '40px',
  '--console-menu-active-bar-display': 'none',
  '--console-menu-icon-arrow-color': '#666666',
  '--console-menu-header-padding': '18px 16px',
  '--console-menu-normal-text-color': '#a8a8a8',
  '--console-menu-header-color': '#eaeaea',
  '--console-menu-active-text-color': '#eaeaea',
  '--console-menu-disabled-bg': '#1f1f1f',
  '--console-menu-divider-border': '1px solid #6b6b6b',
})

export const HybridCloudDarkTheme = withStyledTheme(
  theme,
  (props) => props.children
)
