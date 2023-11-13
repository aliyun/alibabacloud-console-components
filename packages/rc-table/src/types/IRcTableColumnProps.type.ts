import { ColumnProps } from '@alicloud/console-components/types/table'
import { ReactNode } from 'react'

export interface IRcTableColumnProps
  extends Omit<ColumnProps, 'title' | 'cell'> {
  /**
   * 表头显示的内容
   * value, rowIndex, record, context四个属性只可读不可被更改
   */
  title: ColumnProps['title'] | (() => ReactNode)
  /**
   * 行渲染的逻辑
   * value, rowIndex, record, context四个属性只可读不可被更改
   * Function(value, index, record) => Element
   */
  cell?:
    | ColumnProps['cell']
    | ((value: any, index: number, record: any) => ReactNode)
}
