import React from 'react';

/**
 * @public
 */
export interface IInfoProps {
  /**
   * 标题。使用它等价于使用`ITitleProps.value`
   */
  title?: React.ReactNode
  /**
   * 标题附加内容。使用它等价于使用`ITitleProps.extra`
   */
  extra?: React.ReactNode
  /**
   * 内容。在这里应该使用`ITitleProps.value`和`IContentProps.children`来语义化地定义内容。<br>
   * 如果直接子节点不是Title组件或者Content组件，那么我们会自动用Content组件来包裹它
   */
  children?: React.ReactNode
  /**
   * 自定义wrapper div的类名
   */
  className?: string
  /**
   * 自定义wrapper div的样式
   */
  style?: React.CSSProperties
}
