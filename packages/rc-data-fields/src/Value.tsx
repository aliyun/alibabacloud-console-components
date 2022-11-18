import React from 'react'

import classNames from 'classnames'

import { VALUE_CLASS_NAME } from './consts'
import { IValueProps } from './types'
import { SFieldValue } from './styles'

function Value(
  props: IValueProps & {
    isNextCol: true
  }
) {
  const { className, ...restProps } = props
  return (
    <SFieldValue
      className={classNames(VALUE_CLASS_NAME, className)}
      {...restProps}
    />
  )
}

Value.isNextCol = true as const

export default Value
