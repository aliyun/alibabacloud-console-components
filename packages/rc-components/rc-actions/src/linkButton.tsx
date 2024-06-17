import React from 'react'
import { Icon } from '@alicloud/console-components'
import styled from 'styled-components'
import { expandMenuClassName, collapsedItemClassName } from './constants'
import { ILinkButtonProps } from './types/ILinkButtonProps.type'
export type { ILinkButtonProps }

/**
 * looks like a link
 * @internal
 */
export const SLinkButton = styled.button<{ disabled?: boolean }>`
  /* reset button style */
  background: transparent;
  border: none;
  padding: 0;
  line-height: inherit;

  display: inline-flex;
  align-items: center;
  color: ${({ disabled }) => (disabled ? '#c1c1c1' : '#0070cc')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    text-decoration: ${({ disabled }) => (disabled ? 'none' : 'underline')};
  }
  /* 在下拉菜单中的SLinkButton，不应该展示下划线，字体颜色也不应该是蓝色 */
  .${expandMenuClassName} .${collapsedItemClassName} && {
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
  React.HTMLProps<HTMLSpanElement> & ILinkButtonProps & { [key: string]: any }
> = ({ children, onClick, disabled, Component, ...props }) => {
  return (
    <SLinkButton
      {...(props as any)}
      as={Component}
      disabled={disabled}
      onClick={(e) => {
        if (!disabled && typeof onClick === 'function') onClick(e)
      }}
    >
      {children}
    </SLinkButton>
  )
}
;(LinkButton as any).__windType = 'LinkButton'

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
