import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Grid } from '@alicloud/console-components'
import Context from './Context'
import Label, { ILabelProps } from './Label'
import Value, { IValueProps } from './Value'
import { itemClassName } from './constants'
import { ICol } from './typeUtils'
import { SFieldItem } from './styles'
import { IDataFieldsProps } from './DataFields'

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
 * 一个字段区域由label区域和value区域组成
 *
 * 其他字段会被传入包裹【整个字段】的`Grid.Col`组件，比如传入`span={12}`来让该字段占据一半宽度
 * @public
 */
export interface IItemProps
  extends React.ComponentProps<ICol>,
    JSX.IntrinsicAttributes {
  /**
   * 字段在dataSource对象中的key
   */
  dataIndex?: string
  /**
   * 定义字段label的展示。如果不指定，则不展示label区域
   */
  label?: React.ReactNode
  /**
   * 自定义字段value的展示
   */
  render?: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    exactValue: any,
    dataSource: IDataFieldsProps['dataSource']
  ) => React.ReactNode
  /**
   * 字段label的布局，这里定义的字段会被传入包裹【label区域】的`Grid.Col`组件
   */
  labelLayout?: ILabelProps
  /**
   * 字段value的布局，这里定义的字段会被传入包裹【value区域】的`Grid.Col`组件
   */
  valueLayout?: IValueProps
  /**
   * 在value区域额外展示的内容，极少使用
   */
  children?: React.ReactNode
  /**
   * 自定义字段的wrapper div的类名
   */
  className?: string
  /**
   * 自定义字段的wrapper div的样式
   */
  style?: React.CSSProperties
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
