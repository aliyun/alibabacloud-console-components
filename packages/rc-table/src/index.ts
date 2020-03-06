import React from 'react'
import { compose } from 'recompose'
import { SearchProps } from '@alicloud/console-components/types/search'
import { PaginationProps } from '@alicloud/console-components/types/pagination'
import { CheckboxProps } from '@alicloud/console-components/types/checkbox'
import {
  ColumnProps,
  TableProps,
} from '@alicloud/console-components/types/table'
import Pagination from './pagination'
import Search from './search'
import Selection from './selection'
import withSelectionProvider from './selection/withProvider'
import renderColumns from './renderColumns'
import withDefaultProps from './withDefaultProps'
import Layout from './layout'
import './index.css'

/**
 * rowSelection mode
 * @public
 */
export type Mode = 'single' | 'multiple'

/**
 * selection params
 * @public
 */
export interface ISelectionRenderParams {
  selectedRowKeys: Array<any>
  isSelectedAll: boolean
  selectAll: (checked: boolean) => void
}

/**
 * @public
 */
export interface ISelectionProps {
  render?: (selection: ISelectionRenderParams) => React.ReactNode
  isSelectedAll?: boolean
  isIndeterminate?: boolean
  rowSelection?: ITableProps['rowSelection']
  primaryKey?: ITableProps['primaryKey']
  dataSource?: ITableProps['dataSource']
  selectAll?: CheckboxProps['onChange']
}

/**
 * @public
 */
export type TableOperaion =
  | ((tableProps: ITableProps) => React.ReactNode)
  | React.ReactNode

/**
 * @public
 */
export type Operation =
  | TableOperaion
  | {
      primary?: TableOperaion
      secondary?: TableOperaion
    }

/**
 * @public
 */
export type Pagination = TableOperaion | PaginationProps

/**
 * @public
 */
export type Search = TableOperaion | SearchProps

/**
 * @public
 */
export interface IRcTableProps {
  /**
   * 位于 Table 左上角和右上角的操作区，没有任何预设组件和行为，通过 operation 来定义操作区的内容，也可`operation`传入一个对象，通过指定`primary`和`secondary`来定义左上角和右上角的内容。也可直接传入ReactNode只定义左上角行为。详见下`operation`小节
   * @defaultValue `null`
   */
  operation?: Operation
  /**
   * 搜索，组件内置`Search`组件，开发者只需要传入`SearchProps`即可。也可以传入自定义Search组件来覆盖内置的Search，也可以传入一个函数返回一个Search组件。详见下`search`小节
   * @defaultValue `null`
   */
  search?: Search
  /**
   * 批量操作选择器，详见下`selection`小节
   * @defaultValue `null`
   */
  selection?: (selection: ISelectionRenderParams) => React.ReactNode
  /**
   * 分页，组件内置`Pagination`组件，开发者只需要传入`PaginationProps`即可。也可以传入自定义Pagination组件来覆盖内置的Pagination，也可以传入一个函数返回Pagination组件。详见下 `pagination`小节
   * @defaultValue `null`
   */
  pagination?: Pagination
  /**
   * 动作区滚动锁定, 在 rc-table 中最多会有上下两个动作区, 可以指定 `affixActionBar` 的值为 `true` 来同时开启两个动作区的滚动锁定特性, 也可以通过字符串`affixActionBar: ('bottom'|'top')`或者是数组`['bottom', 'top']`声明  指定某一个动作区开启该特性
   * @defaultValue `false`
   */
  affixActionBar?: boolean | string | string[]
  /**
   * 设置上下操作栏 affix 时候的层级
   * @defaultValue `1000`
   */
  fixedBarZIndex?: number
  /**
   * 设置上下操作栏 affix 的时候的className
   */
  fixedClassName?: string
  /**
   * 设置上下操作栏 affix 的时候的样式
   */
  fixedStyle?: React.CSSProperties
  /**
   * 当 affixActionBar 开启时，顶部和底部的操作栏移入或者移出Table可视区域的回调函数
   */
  afterFixedBarIntersectChanged?: (
    alignType: 'top' | 'bottom',
    isIntersecting: boolean
  ) => void

  /**
   * 当 affixActionBar 开启时，锁定动作区向`左` `右`两边延伸的宽度, 左右相同可简写为一个如：[0], 按照控制台规范一般为[24, 24]
   * @defaultValue `[0, 0]`
   */
  fixedBarExpandWidth?: number[]
  /**
   * 为`true`时将会对传入的`selectedRowKeys`进行过滤，把不存在于dataSource中primaryKey过滤掉。
   * @defaultValue `false`
   */
  exact?: boolean
  /**
   * 列描述数据对象，是 columns 中的一项，继承`Table.Column`的 API
   */
  columns?: ColumnProps[]
  /**
   * 是否启用选择模式，继承基础组件`Table`的rowSelection 的API。可通过传入UNSTABLE_defaultSelectedRowKeys 指定默认的selectedRowKeys
   */
  rowSelection?: TableProps['rowSelection'] & {
    UNSTABLE_defaultSelectedRowKeys?: Array<any>
  }
}

/**
 * @public
 */
export type ITableProps = TableProps & IRcTableProps

const EnhancedTable = compose<
  Omit<ITableProps, 'columns' | 'exact'>,
  ITableProps
>(
  withDefaultProps,
  withSelectionProvider,
  renderColumns
)(Layout)

/**
 * @public
 */
const ExpEnhancedTable = Object.assign(EnhancedTable, {
  Selection,
  Pagination,
  Search,
})

export default ExpEnhancedTable
