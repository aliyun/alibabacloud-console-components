import React from 'react'
import * as S from './styles'

/**
 * @public
 */
export interface ILinkButtonProps {
  /**
   * 用什么组件来渲染链接。请传入一个组件。
   * 你可以渲染为'a'或者react-router的Link组件。
   *
   * @defaultValue 'span'
   */
  Component?: string | React.ComponentType<any>
  /**
   * 是否禁用
   * @defaultValue `false`
   */
  disabled?: boolean
  [key: string]: any
}

/**
 * @public
 */
const LinkButton: React.FC<
  React.HTMLProps<HTMLSpanElement> & ILinkButtonProps
> = ({ children, onClick, disabled, Component, ...props }) => {
  // disbaled的时候需要渲染为span 以阻止<a /> 和 <Link /> 的跳转事件
  const actualComponent = disabled ? 'span' : Component

  return (
    <S.SLinkButton
      {...(props as any)}
      as={actualComponent}
      disabled={!!disabled}
      onClick={(e) => {
        if (!disabled && typeof onClick === 'function') onClick(e)
      }}
    >
      {children}
    </S.SLinkButton>
  )
}

export default LinkButton
