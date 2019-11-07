import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import Title from './Title'
import Content from './Content'
import { baseClassName } from './constants'

/* eslint-disable @typescript-eslint/no-use-before-define */

/**
 * @public
 */
export interface IInfoProps {
  /**
   * 标题。使用它等价于使用{@link ITitleProps.value | Title组件}
   */
  title?: React.ReactNode
  /**
   * 标题附加内容。使用它等价于使用{@link ITitleProps.extra | Title组件}
   */
  extra?: React.ReactNode
  /**
   * 内容。在这里应该使用{@link ITitleProps.value | Title组件}和{@link IContentProps.children | Content组件}来语义化地定义内容。<br>
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
      .filter(child => !!child)
      .map(child => {
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
