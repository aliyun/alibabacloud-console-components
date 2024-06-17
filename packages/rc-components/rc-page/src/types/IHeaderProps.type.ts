import React from 'react';

/**
 * @public
 */

export interface IHeaderProps {
  /**
   * Header元素的类名。
   */
  className?: string;
  /**
   * Header元素的样式。
   */
  style?: React.CSSProperties;
  /**
   * 页面一级标题。
   */
  title?: React.ReactNode;
  /**
   * 页面二级标题。
   */
  subTitle?: React.ReactNode;
  /**
   * 定义面包屑导航区域的内容。
   * 通常使用`Page.Breadcrumb`组件来定义面包屑导航，然后传给这个prop。
   */
  breadcrumb?: React.ReactNode;
  /**
   * 面包屑额外内容
   */
  breadcrumbExtra?: React.ReactNode;
  /**
   * 面包屑额外内容的位置
   */
  breadcrumbExtraAlign?: 'left' | 'right';
  /**
   * 是否展示「返回上级」的图标按钮。
   */
  hasBackArrow?: boolean;
  /**
   * 自定义「返回上级」按钮的渲染。<br/>
   * 该函数被调用时，会传入默认的「返回上级」按钮，用户可以在这个React Element的基础上自行封装。当然，用户也可以选择返回一个与默认无关的React Element，但是要注意自己绑定`onClick`回调。
   */
  renderBackArrow?: (arrowIcon: React.ReactElement) => React.ReactElement;
  /**
   * 【默认的「返回上级」按钮】所绑定的`onClick`回调。<br/>
   * 注意，如果用户通过renderBackArrow返回了一个全新的按钮，没有渲染默认的按钮，那么用户需要自己绑定`onClick`回调。
   */
  onBackArrowClick?: (e: React.SyntheticEvent) => void | never;
  /**
   * Header的额外内容。
   */
  children?: React.ReactNode;
  /**
   * 额外内容在 Header 区域的相对位置，默认为 `left`。
   */
  childrenAlign?: 'left' | 'right';
}
