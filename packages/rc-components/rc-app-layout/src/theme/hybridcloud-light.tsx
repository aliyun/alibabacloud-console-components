import { withStyledTheme } from '@alicloud/css-var-utils';
import { theme as sourceTheme } from './xconsole';

export const theme = sourceTheme.overwrite({
  '--console-layout-nav-shadow': 'none',
  '--console-layout-nav-border': 'none',
  '--console-layout-nav-trigger-bg': '#d9d9d9',
  '--console-layout-nav-trigger-border': 'none',
  '--console-layout-nav-trigger-shadow': 'none',
  '--console-layout-nav-trigger-icon-color': '#fff',
  '--console-layout-nav-bg': '#f7f7f7',
});

export const HybridCloudLightTheme = withStyledTheme(
  theme,
  (props) => props.children,
);
