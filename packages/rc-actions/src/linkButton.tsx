import React from 'react'
import { Icon } from '@alicloud/console-components'
import styled from 'styled-components'
import { expandMenuClassName, collapsedItemClassName } from './constants'
import WithLink from './with-link'

/**
 * @public
 */
export interface IWithLinkProps {
  /**
   * 跳转链接，使用该属性后`LinkButton`将被渲染为`a`标签，此时开发者需要注意`onClick`等事件的影响
   */
  href?: string
  /**
   * 跳转链接，使用该属性后`LinkButton`将被渲染为`<Link />`
   */
  to?: string
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
const LinkButton: React.FC<React.HTMLProps<HTMLSpanElement>> = ({
  children,
  onClick,
  disabled,
  ...props
}) => {
  return (
    <SLinkButton
      {...(props as any)}
      disabled={disabled}
      onClick={(e) => {
        !disabled && typeof onClick === 'function' && onClick(e)
      }}
    >
      {children}
    </SLinkButton>
  )
}

export default WithLink(LinkButton)

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
