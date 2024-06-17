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
import type { ITitleProps } from './types/ITitleProps.type'
export type { ITitleProps }

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
