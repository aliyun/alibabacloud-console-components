import React from 'react'
import { Icon } from '@alicloud/console-components'
import styled from 'styled-components'
import { expandMenuClassName, collapsedItemClassName } from './constants'

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

  [key: string]: any
}

/**
 * looks like a link
 * @internal
 */
export const SLinkButton = styled.span<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  color: ${({ disabled }) => (disabled ? '#c1c1c1' : '#0070cc')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    text-decoration: ${({ disabled }) => (disabled ? 'none' : 'underline')};
  }
  /* 在下拉菜单中的SLinkButton，不应该展示下划线，字体颜色也不应该是蓝色 */
  .${expandMenuClassName} .${collapsedItemClassName} & {
    color: ${({ disabled }) => (disabled ? '#c1c1c1' : '#333333')};
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
`

/**
 * @public
 */
export const LinkButton: React.FC<
  React.HTMLProps<HTMLSpanElement> & ILinkButtonProps
> = ({ children, onClick, disabled, Component, ...props }) => {
  // disbaled的时候需要渲染为span 以阻止<a /> 和 <Link /> 的跳转事件
  const actualComponent = disabled ? 'span' : Component

  return (
    <SLinkButton
      {...(props as any)}
      as={actualComponent}
      disabled={disabled}
      onClick={(e) => {
        if (!disabled && typeof onClick === 'function') onClick(e)
      }}
    >
      {children}
    </SLinkButton>
  )
}

/**
 * @public
 */
export const LinkMore: React.FC<React.HTMLProps<HTMLSpanElement>> = ({
  children,
  ...props
}) => {
  return (
    <LinkButton {...props}>
      {children}
      <Icon type="caret-down" size="xs" />
    </LinkButton>
  )
}
