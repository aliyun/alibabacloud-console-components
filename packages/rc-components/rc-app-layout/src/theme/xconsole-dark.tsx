import { CssVarTheme, withStyledTheme } from '@alicloud/css-var-utils';

export const theme = CssVarTheme.create({
  '--console-layout-nav-width': { default: '208px' },
  '--console-layout-nav-width-collapsed': { default: '0px' },
  '--console-layout-nav-trigger-height': { default: '34px' },
  '--console-layout-nav-trigger-width': { default: '16px' },
  '--console-layout-nav-trigger-clickable-height': { default: '34px' },
  '--console-layout-nav-trigger-clickable-width': { default: '16px' },
  '--console-layout-nav-trigger-shadow': {
    default: '0 2px 4px 0 rgba(0, 0, 0, 0.16)',
  },
  '--console-layout-nav-trigger-border': { default: '1px solid rgba(255,255,255,0.08)' },
  '--console-layout-nav-trigger-border-l': { default: 'none' },
  '--console-layout-nav-trigger-border-l-hover': { default: 'none' },
  '--console-layout-nav-trigger-icon-color': { default: '#c1c1c1' },
  '--console-layout-nav-trigger-icon-color-hover': { default: '#c1c1c1' },
  '--console-layout-nav-trigger-icon-left': { default: '0px' },
  '--console-layout-nav-trigger-bg': { default: 'rgba(255,255,255,0.04)' },
  '--console-layout-nav-shadow': { default: '2px 0 4px 0 rgba(0, 0, 0, 0.16)' },
  '--console-layout-nav-bg': { default: 'rgba(255,255,255,0.04)' },
  '--console-layout-nav-border': { default: 'none' },
});

export const XConsoleDarkTheme = withStyledTheme(theme, (props) => props.children);
