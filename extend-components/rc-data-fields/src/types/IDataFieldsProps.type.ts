import { IItemProps } from "./IItemProps.type";

/**
 * @public
 */
 export interface IDataFieldsProps {
  /**
   * 字段列表数据
   */
  dataSource: {
    [key: string]: any
  }
  /**
   * 定义要展示哪些字段，以及如何展示。数组项的数据结构见`IItemProps`的API
   */
  items: IItemProps[]
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