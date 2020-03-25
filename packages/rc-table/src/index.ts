import { compose } from 'recompose'
import Pagination from './pagination'
import Search from './search'
import Selection from './selection'
import withSelectionProvider from './selection/withProvider'
import renderColumns from './renderColumns'
import withDefaultProps from './withDefaultProps'
import Layout, { ITableProps } from './layout'

import './index.css'

/**
 * @public
 */
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
export type ITable = typeof EnhancedTable & {
  Selection: typeof Selection
  Pagination: typeof Pagination
  Search: typeof Search
}

/**
 * @public
 */
const ExpEnhancedTable: ITable = Object.assign(EnhancedTable, {
  Selection,
  Pagination,
  Search,
})

export default ExpEnhancedTable

export { EnhancedTable, Selection, Pagination, Search }

export * from './selection'
export * from './pagination'
export * from './search'
export * from './layout'
