import React from 'react';

/**
 * @public
 */

export interface IContentProps {
  /**
   * 内容节点
   */
  children?: React.ReactNode;
  /**
   * 自定义wrapper div的类名
   */
  className?: string;
  /**
   * 自定义wrapper div的样式
   */
  style?: React.CSSProperties;
}
