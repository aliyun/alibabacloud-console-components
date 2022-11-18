import ILabelProps from './ILabelProps'
import IItemProps from './IItemProps.type'

export default interface IDataFields {
  /**
   * 字段列表数据
   */
  dataSource: Record<string, any>
  /**
   * 定义要展示哪些字段，以及如何展示。数组项的数据结构见`IItemProps`的API
   */
  items: IItemProps[]
  /**
   * 自定义标签样式(`item` 未设置`labelLayout`时生效)
   */
  labelLayout?: ILabelProps
  /**
   * 自定义wrapper div的类名
   */
  className?: string
  /**
   * 自定义wrapper div的样式
   */
  style?: React.CSSProperties
  /**
   * 自定义wrapper div中的额外内容
   */
  children?: React.ReactNode
}
