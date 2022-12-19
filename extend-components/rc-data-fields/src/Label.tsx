import React from 'react'
import * as PropTypes from 'prop-types'
import classNames from 'classnames'
import { labelClassName } from './constants'
import { SFieldLabel } from './styles'
import { ICol } from './typeUtils'

/**
 * @public
 */
export interface ILabelProps extends React.ComponentProps<ICol> {
  className?: string
}

/**
 * @public
 */
const Label: React.FC<ILabelProps> & {
  isNextCol: true
} = ({ className, ...restProps }) => (
  <SFieldLabel
    fixedSpan={8}
    className={classNames(labelClassName, className)}
    {...restProps}
  />
)

Label.propTypes = {
  className: PropTypes.string,
}

Label.isNextCol = true as const

export default Label
