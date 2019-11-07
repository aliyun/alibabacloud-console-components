import { compose } from 'recompose'
import Pagination from './pagination'
import Search from './search'
import Selection from './selection'
import withSelectionProvider from './selection/withProvider'
import renderColumns from './renderColumns'
import withDefaultProps from './withDefaultProps'
import Layout from './layout'

const enhance = compose(
  withDefaultProps,
  withSelectionProvider,
  renderColumns,
)

const EnhancedTable = enhance(Layout)

EnhancedTable.Selection = Selection
EnhancedTable.Pagination = Pagination
EnhancedTable.Search = Search

export default EnhancedTable
