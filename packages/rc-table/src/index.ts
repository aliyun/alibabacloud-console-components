import { compose } from 'recompose'
import { SearchProps } from '@alicloud/console-components/types/search'
import { PaginationProps } from '@alicloud/console-components/types/pagination'
import { ColumnProps } from '@alicloud/console-components/types/table'
import Pagination from './pagination'
import Search from './search'
import Selection from './selection'
import withSelectionProvider from './selection/withProvider'
import renderColumns from './renderColumns'
import withDefaultProps from './withDefaultProps'
import Layout from './layout'
import './index.css'

export interface IRcTableProps {
  /**
   * 定义操作器，primary位于Table的左上角，secondary位于Table的右上角
   */
  operation?: {
    primary?: () => React.ReactNode | React.ReactNode
    secondary?: () => React.ReactNode | React.ReactNode
  }
  /**
   * 定义搜索区域，`@alicloud/console-components-table`中预设了符合UED规约的搜索组件，在大多数场景下，你只需要关注一部分 Search 组件的属。也可以自行封装Search组件传入
   */
  search?: SearchProps | React.ReactNode
  /**
   * 全选
   */
  selection?: () => React.ReactNode
  /**
   * 分页
   */
  pagination?: PaginationProps | React.ReactNode
  /**
   * 上下操作框是否固定
   */
  affixActionBar?: boolean | string | string[]
  /**
   * 操作框固定时的层级
   */
  fixedBarZIndex?: string
  /**
   * 操作框固定时候的className
   */
  fixedClassName?: string
  /**
   * 操作框固定时候的style
   */
  fixedStyle?: React.CSSProperties
  /**
   * 上下操作框固定时，移入和移除可是区域时的回调函数
   */
  afterFixedBarIntersectChanged?: (
    alignType: 'top' | 'bottom',
    isIntersecting: boolean
  ) => void
  /**
   * 当 affixActionBar 开启时，锁定动作区向左``右两边延伸的宽度, 左右相同可简写为一个如：[0],按照控制台规范一般为[24, 24]
   */
  fixedBarExpandWidth?: number[]
  /**
   * 是否启用严格模式
   */
  exact?: boolean
  /**
   * 列描述数据对象，是 columns 中的一项，Column 使用相同的 API
   */
  columns: ColumnProps[]
}

const enhance = compose(withDefaultProps, withSelectionProvider, renderColumns)

const EnhancedTable = enhance(Layout)

const ExpEnhancedTable = Object.assign(EnhancedTable, {
  Selection,
  Pagination,
  Search,
})

export default ExpEnhancedTable
