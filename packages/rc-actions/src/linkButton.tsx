import React from 'react'
import { Icon } from '@alicloud/console-components'
import styled from 'styled-components'
import { expandMenuClassName, collapsedItemClassName } from './constants'

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
    /* 充满li.next-menu-item容器 */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0 16px;
    color: ${({ disabled }) => (disabled ? '#c1c1c1' : '#333333')};
    text-decoration: none;
  }
`

/**
 * @public
 */
export const LinkButton: React.FC<React.HTMLProps<HTMLSpanElement>> = ({
  children,
  onClick,
  disabled,
  ...props
}) => {
  return (
    <SLinkButton
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
      disabled={disabled}
      onClick={e => {
        !disabled && typeof onClick === 'function' && onClick(e)
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
