import { Grid } from '@alicloud/console-components'

import ILabelProps from './ILabelProps'
import IValueProps from './IValueProps'

export default interface IDataFieldsItem
  extends React.ComponentProps<typeof Grid.Col> {
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
  render?: (exactValue: any, dataSource: Record<string, any>) => React.ReactNode
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
