import { CssVarTheme, withStyledTheme } from '@alicloud/css-var-utils'

export const theme = CssVarTheme.create({
  '--console-menu-divider-margin': { default: '15px' },
  '--console-menu-divider-border': { default: '1px solid #e3e4e6' },
  '--console-menu-header-color': { default: '#aaaaaa' },
  '--console-menu-bg': { default: 'transparent' },
  '--console-menu-header-padding': { default: '24px 24px 16px' },
  '--console-menu-normal-text-color': { default: '#aaaaaa' },
  '--console-menu-padding': { default: '24px' },
  '--console-menu-hover-bg': { default: 'rgba(255,255,255,0.04)' },
  '--console-menu-item-height': { default: '32px' },
  '--console-menu-icon-arrow-color': { default: '#a8a8a8' },
  '--console-menu-active-bg': { default: 'rgba(255,255,255,0.04)' },
  '--console-menu-active-text-color': { default: '#0064c8' },
  '--console-menu-active-bar-display': { default: 'block' },
  '--console-menu-disabled-text-color': { default: '#c1c1c1' },
  '--console-menu-disabled-bg': { default: '#f5f5f5' },
})

export const XConsoleDarkTheme = withStyledTheme(theme, (props) => props.children)
