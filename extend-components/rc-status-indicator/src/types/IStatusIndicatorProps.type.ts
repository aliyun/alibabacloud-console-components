import React from 'react';
import { StatusType, ShapeType } from '../index';

/**
 * @public
 */

export interface IStatusIndicatorProps {
  /**
   * 自定义wrapper类名
   */
  className?: string;
  /**
   * 自定义wrapper样式
   */
  style?: React.CSSProperties;
  /**
   * 指定状态类型。它会决定图标类型和字体颜色。<br/><br/>
   * 可选值：`'success' | 'warning' | 'error' | 'loading' | 'disabled'`
   * @defaultValue 'success'
   */
  type?: StatusType;
  /**
   * 使用图标还是小圆点。可选值：`'icon' | 'dot'`
   * @defaultValue 'icon'
   */
  shape?: ShapeType;
  /**
   * 自定义图标类型
   */
  iconType?: string;
  /**
   * 状态文字内容
   */
  children?: React.ReactNode;
}
