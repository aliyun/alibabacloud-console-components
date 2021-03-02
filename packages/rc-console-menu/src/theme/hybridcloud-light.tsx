import { withStyledTheme } from '@alicloud/css-var-utils'
import { theme as sourceTheme } from './xconsole'

export const theme = sourceTheme.overwrite({
  '--console-menu-padding': '16px',
  '--console-menu-bg': '#f7f7f7',
  '--console-menu-hover-bg': '#f0f0f0',
  '--console-menu-active-bg': '#e6e6e6',
  '--console-menu-active-text-color': '#1a1a1a',
  '--console-menu-item-height': '40px',
  '--console-menu-active-bar-display': 'none',
  '--console-menu-icon-arrow-color': '#666666',
  '--console-menu-header-padding': '18px 16px',
})

export const HybridCloudLightTheme = withStyledTheme(
  theme,
  (props) => props.children
)
