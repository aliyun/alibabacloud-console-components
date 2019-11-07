import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import {
  titleContainerClassName,
  titleClassName,
  titleExtraClassName,
  titleChildrenClassName,
} from './constants'

/**
 * @public
 */
export interface ITitleProps {
  /**
   * 标题内容
   */
  value?: React.ReactNode
  /**
   * 标题附加内容
   */
  extra?: React.ReactNode
  /**
   * 自定义wrapper div的类名
   */
  className?: string
  /**
   * 自定义wrapper div的样式
   */
  style?: React.CSSProperties
  /**
   * 等价于{@link ITitleProps.value | value}，同时设置两者时，优先使用value
   */
  children?: React.ReactNode
}

/**
 * @public
 */
const Title: React.FC<ITitleProps> = ({
  value,
  extra,
  children,
  className,
  style,
}) => (
  <STitleWrapper
    className={classNames(titleContainerClassName, className)}
    style={style}
  >
    <h3 className={classNames(titleClassName)}>
      {value === undefined ? children : value}
    </h3>
    {extra && <div className={classNames(titleExtraClassName)}>{extra}</div>}
    {/* {children && (
      <div className={classNames(titleChildrenClassName)}>{children}</div>
    )} */}
  </STitleWrapper>
)

Title.propTypes = {
  value: PropTypes.node,
  extra: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
}

export default Title

const STitleWrapper = styled.div`
  height: 32px;
  line-height: 32px;
  margin-bottom: 16px;

  .${titleClassName} {
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
  }

  .${titleExtraClassName} {
    margin-left: 40px;
    display: inline-block;
  }

  .${titleChildrenClassName} {
    display: inline-block;
  }
`
