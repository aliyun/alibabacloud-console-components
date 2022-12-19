import React, { CSSProperties } from 'react';

/**
 * @public
 */

export interface IContentProps {
  /**
   * 内容容器的类名。
   */
  className?: string;
  /**
   * 内容容器的样式。
   */
  style?: CSSProperties;
  /**
   * 内容的导航菜单。通常使用`Page.Menu`组件来定义，传给这个prop。
   */
  menu?: React.ReactNode;
  /**
   * 设置内容导航的高度。默认值已经适配阿里云控制台顶部导航，阿里云开发者不需要特别关注。
   * @internal
   */
  adjustHeight?: number | string;
  /**
   * 实际展示的内容。
   */
  children?: React.ReactNode;

  /**
   * 侧栏的最小宽度
   */
  menuMinWidth?: number;
}
