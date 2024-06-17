import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { valueClassName } from './constants'
import { SFieldValue } from './styles'
import { ICol } from './typeUtils'

/**
 * @public
 */
export interface IValueProps extends React.ComponentProps<ICol> {
  className?: string
}

/**
 * @public
 */
const Value: React.FC<IValueProps> & {
  isNextCol: true
} = ({ className, ...restProps }) => (
  <SFieldValue
    className={classNames(valueClassName, className)}
    {...restProps}
  />
)

Value.propTypes = {
  className: PropTypes.string,
}

Value.isNextCol = true as const

export default Value
