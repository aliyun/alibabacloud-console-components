import React from 'react';

/**
 * @public
 */

export interface IPageProps {
  /**
   * Page元素的类名。
   */
  className?: string;
  /**
   * Page元素的样式。
   */
  style?: React.CSSProperties;
  /**
   * 内容。通常利用 `Page.Header` / `Page.Content` 组件来定义内容节点，以获得结构化的布局。
   */
  children?: React.ReactNode;
  /**
   * 背板的样式主题。默认是`white`。<br/>
   * 这个组件会在`useEffect`回调中设置`sceneryRef`元素（默认情况下是 `document.body` ）的背景颜色。
   */
  sceneryTheme?: 'white' | 'grey';
  /**
   * Page组件利用此值来获取背板元素（一个HTMLElement对象）的引用。默认获取`document.body`作为背板元素。背板元素会被增加额外的样式，样式由`sceneryTheme`属性来决定。<br>
   * 当其值为一个字符串时，Page会在内部调用 document.querySelector(props.sceneryRef) 来获取背板元素的引用；当其为函数时，Page调用该函数拿到背板元素的引用。
   * 拿到背板元素以后，Page就根据`sceneryTheme`属性来设置elem.style.backgroundColor。
   * 由于设置背板的主题有可能导致与应用的样式冲突，你可以通过更改`sceneryRef`的值来决定将哪个元素作为背板，或者将其设置为`false`来关闭背板样式设置。
   */
  sceneryRef?: string | boolean | (() => HTMLElement);
}
