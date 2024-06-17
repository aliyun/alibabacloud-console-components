import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import Title from './Title'
import Content from './Content'
import { baseClassName } from './constants'
import type { IInfoProps } from './types/IInfoProps.type'
export type { IInfoProps }

/**
 * @public
 */
const Info: React.FC<IInfoProps> = ({
  title,
  extra,
  children,
  className,
  style,
}) => (
  <SInfoWrapper className={classNames(baseClassName, className)} style={style}>
    {title && <Title value={title} extra={extra} />}
    {children && renderChildren(children)}
  </SInfoWrapper>
)

Info.propTypes = {
  title: PropTypes.node,
  extra: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
}

export default Info

/**
 * 渲染 info 区域的子节点。
 */
function renderChildren(children: React.ReactNode): React.ReactNode {
  // avoid key warnning
  // https://stackoverflow.com/a/51668628
  return React.createElement(
    React.Fragment,
    {},
    ...React.Children.toArray(children)
      .filter((child) => !!child)
      .map((child) => {
        if (
          React.isValidElement(child) &&
          (child.type === Content || child.type === Title)
        ) {
          return child
        }
        return <Content>{child}</Content>
      })
  )
}

const SInfoWrapper = styled.div`
  margin-bottom: 32px;
`
