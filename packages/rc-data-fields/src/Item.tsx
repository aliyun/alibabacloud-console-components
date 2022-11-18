import React, { useContext } from 'react'

import { Grid } from '@alicloud/console-components'
import classNames from 'classnames'

import { ITEM_CLASS_NAME } from './consts'
import { IItemProps } from './types'
import { SFieldItem } from './styles'

import Context from './Context'
import Label from './Label'
import Value from './Value'

const { Row } = Grid

const renderValue = (
  dataIndex: string | undefined,
  dataSource: Record<string, any>,
  render?: (exactValue: any, dataSource: Record<string, any>) => React.ReactNode
): React.ReactNode => {
  const exactValue = dataIndex && dataSource[dataIndex]
  if (render) {
    return render(exactValue, dataSource)
  }
  return exactValue
}

function Item(
  props: IItemProps & {
    isNextCol: true
  }
) {
  const {
    label,
    dataIndex,
    render,
    labelLayout = {},
    valueLayout = {},
    children,
    className,
    style,
    ...restProps
  } = props

  const dataSource = useContext(Context)

  return (
    <SFieldItem
      span={12}
      className={classNames(ITEM_CLASS_NAME, className)}
      style={style}
      {...restProps}
    >
      <Row gutter={16}>
        {label && (
          <Label isNextCol {...labelLayout}>
            {label}
          </Label>
        )}
        <Value isNextCol {...valueLayout}>
          {renderValue(dataIndex, dataSource, render)}
          {children}
        </Value>
      </Row>
    </SFieldItem>
  )
}

Item.isNextCol = true as const

export default Item
