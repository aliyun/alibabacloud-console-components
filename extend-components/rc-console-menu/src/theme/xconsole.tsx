import { CssVarTheme, withStyledTheme } from '@alicloud/css-var-utils'

export const theme = CssVarTheme.create({
  '--console-menu-divider-margin': { default: '15px' },
  '--console-menu-divider-border': { default: '1px solid #e3e4e6' },
  '--console-menu-header-color': { default: '#333333' },
  '--console-menu-bg': { default: '#fff' },
  '--console-menu-header-padding': { default: '24px 24px 16px' },
  '--console-menu-normal-text-color': { default: '#333333' },
  '--console-menu-padding': { default: '24px' },
  '--console-menu-hover-bg': { default: '#f7f9fa' },
  '--console-menu-item-height': { default: '32px' },
  '--console-menu-icon-arrow-color': { default: '#a8a8a8' },
  '--console-menu-active-bg': { default: '#eff3f8' },
  '--console-menu-active-text-color': { default: '#0064c8' },
  '--console-menu-active-bar-display': { default: 'none' },
  '--console-menu-disabled-text-color': { default: '#c1c1c1' },
  '--console-menu-disabled-bg': { default: '#f5f5f5' },
})

export const XConsoleTheme = withStyledTheme(theme, (props) => props.children)
