import React from 'react'
import { Link, LinkProps } from 'dva/router'
import * as S from './style'

/**
 * @public
 */
export interface ILinkProps {
  /**
   * 站内跳转的链接，如果设置这个属性，则该节点为`<Link />`
   */
  to?: string
  /**
   * 站外跳转链接，如果设置这个属性，则该节点为`<a />`
   */
  href?: string
  /**
   * @internal
   */
  [propName: string]: any
}

/**
 * @public
 */
const LinkComponent: React.FC<
  ILinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ to, href, ...restProps }) => {
  const actualElement = href ? 'a' : Link

  const actualProps = (() => {
    let props = {}
    if (href) {
      props = {
        href,
      }
    } else if (to) {
      props = {
        to,
      }
    }
    return props
  })()

  return (
    <S.SWrapper>
      <S.SLink
        {...(actualProps as LinkProps)}
        as={actualElement}
        {...restProps}
      />
    </S.SWrapper>
  )
}

export default LinkComponent
