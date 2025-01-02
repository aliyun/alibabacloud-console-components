import { withStyledTheme } from '@alicloud/css-var-utils';
import { theme as sourceTheme } from './xconsole';

export const theme = sourceTheme.overwrite({
  '--console-layout-nav-shadow': 'none',
  '--console-layout-nav-border': 'none',
  '--console-layout-nav-trigger-bg': '#383838',
  '--console-layout-nav-trigger-border': 'none',
  '--console-layout-nav-trigger-shadow': 'none',
  '--console-layout-nav-trigger-icon-color': '#6B6B6B',
  '--console-layout-nav-bg': '#1f1f1f',
});

export const HybridCloudDarkTheme = withStyledTheme(
  theme,
  (props) => props.children,
);
