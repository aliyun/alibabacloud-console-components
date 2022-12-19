import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Grid } from '@alicloud/console-components'
import Context from './Context'
import Label from './Label'
import Value from './Value'
import { itemClassName } from './constants'
import { SFieldItem } from './styles'
import { IDataFieldsProps } from './DataFields'
import type { IItemProps } from './types/IItemProps.type'
export type {IItemProps}

const { Row } = Grid

const renderValue = (
  dataIndex: string | undefined,
  dataSource: IDataFieldsProps['dataSource'],
  render?: IItemProps['render']
): React.ReactNode => {
  const exactValue = dataIndex && dataSource[dataIndex]
  if (render) {
    return render(exactValue, dataSource)
  }
  return exactValue
}

/**
 * @public
 */
const Item: React.FC<IItemProps> & {
  isNextCol: true
} = ({
  label,
  dataIndex,
  render,
  labelLayout = {},
  valueLayout = {},
  children,
  className,
  style,
  ...restProps
}) => {
  const dataSource = useContext(Context)
  return (
    <SFieldItem
      span={12}
      className={classNames(itemClassName, className)}
      style={style}
      {...restProps}
    >
      <Row gutter={16}>
        {label && <Label {...labelLayout}>{label}</Label>}
        <Value {...valueLayout}>
          {renderValue(dataIndex, dataSource, render)}
          {children}
        </Value>
      </Row>
    </SFieldItem>
  )
}

Item.propTypes = {
  label: PropTypes.node,
  dataIndex: PropTypes.string,
  render: PropTypes.func,
  labelLayout: PropTypes.objectOf(PropTypes.any),
  valueLayout: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node,
}

Item.isNextCol = true as const

export default Item
