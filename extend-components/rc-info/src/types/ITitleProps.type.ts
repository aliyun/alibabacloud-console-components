import React from 'react';

/**
 * @public
 */

export interface ITitleProps {
  /**
   * 标题内容
   */
  value?: React.ReactNode;
  /**
   * 标题附加内容
   */
  extra?: React.ReactNode;
  /**
   * 自定义wrapper div的类名
   */
  className?: string;
  /**
   * 自定义wrapper div的样式
   */
  style?: React.CSSProperties;
  /**
   * 等价于`ITitleProps.value`，同时设置两者时，优先使用value
   */
  children?: React.ReactNode;
}
