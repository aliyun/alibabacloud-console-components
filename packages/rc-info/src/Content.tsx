import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import { contentClassName } from './constants'
import type { IContentProps } from './types/IContentProps.type'
export type { IContentProps }

/**
 * @public
 */
const Content: React.FC<IContentProps> = ({ children, className, style }) => (
  <SContentWrapper
    className={classNames(contentClassName, className)}
    style={style}
  >
    {children}
  </SContentWrapper>
)

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
}

export default Content

const SContentWrapper = styled.div`
  margin-bottom: 16px;
  line-height: 20px;
`
