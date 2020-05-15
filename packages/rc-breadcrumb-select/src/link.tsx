import React from 'react'
import * as S from './style'

/**
 * @public
 */
export interface ILinkProps {
  /**
   * 用什么组件来渲染链接。请传入一个组件。 你可以渲染为'a'或者react-router的Link组件。
   * @defaultValue `Link`
   */
  component?: 'a' | React.ComponentType<any>
  /**
   * @internal
   */
  [propName: string]: any
}

/**
 * @public
 */
const LinkComponent: React.FC<ILinkProps> = ({
  component,
  to = '',
  ...restProps
}) => {
  const actualTo = (() => {
    return to ? { to } : {}
  })()

  return (
    <S.SWrapper>
      <S.SLink as={component} {...(actualTo as any)} {...restProps} />
    </S.SWrapper>
  )
}

export default LinkComponent
