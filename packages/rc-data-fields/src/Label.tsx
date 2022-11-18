import React from 'react'

import classNames from 'classnames'

import { LABEL_CLASS_NAME } from './consts'
import { ILabelProps } from './types'
import { SFieldLabel } from './styles'

function Label(props: ILabelProps& {
  isNextCol: true
}) {
  const { className, ...restProps } = props

  return (
    <SFieldLabel
      fixedSpan={8}
      className={classNames(LABEL_CLASS_NAME, className)}
      {...restProps}
    />
  )
}

Label.isNextCol = true as const

export default Label
