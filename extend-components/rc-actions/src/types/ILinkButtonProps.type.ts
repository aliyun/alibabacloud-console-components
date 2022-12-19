import React from 'react'

/**
 * @public
 */
 export interface ILinkButtonProps {
  /**
   * 用什么组件来渲染链接。请传入一个组件。
   * 你可以传入'a'或者react-router的Link组件。
   *
   * @defaultValue "button"
   */
  Component?: string | React.ComponentType<any>
}
