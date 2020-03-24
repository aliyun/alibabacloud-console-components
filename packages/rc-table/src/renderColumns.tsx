import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import { wrapDisplayName } from 'recompose'
import {
  TableProps,
  ColumnProps,
} from '@alicloud/console-components/types/table'
import { Table } from '@alicloud/console-components'

const getColumnKeyByIndex = (index: number): string =>
  `wind-table-column-${index}`

const getColumnKey = (
  column: ColumnProps,
  primaryKey: TableProps['primaryKey'],
  index: number
): string =>
  primaryKey
    ? get(column, primaryKey, getColumnKeyByIndex(index))
    : getColumnKeyByIndex(index)

const toComponent = (primaryKey: TableProps['primaryKey']) => (
  column: ColumnProps,
  i: number
) => <Table.Column key={getColumnKey(column, primaryKey, i)} {...column} />

// const renderColumns = (WrappedComponent: React.CompoentType) => {
//   const H: React.FC<ITableProps & TableProps> = ({ columns, ...restProps }) => {
//     return (
//       <WrappedComponent {...restProps}>
//         {columns.map(toComponent(restProps.primaryKey))}
//       </WrappedComponent>
//     )
//   }
//   H.displayName = wrapDisplayName(WrappedComponent, 'renderColumns')
//   // H.propTypes = {
//   //   columns: PropTypes.arrayOf(PropTypes.object),
//   // }

//   return H
// }
// Omit<ITableProps, 'columns'> & TableProps

function renderColumns<T>(
  WrappedComponent: React.ComponentType<T>
): React.FC<
  T & { columns: ColumnProps[]; primaryKey: TableProps['primaryKey'] }
> {
  const H: React.FC<T & {
    columns: ColumnProps[]
    primaryKey: TableProps['primaryKey']
  }> = ({ columns, ...restProps }) => {
    return (
      <WrappedComponent {...(restProps as T)}>
        {columns.map(toComponent(restProps.primaryKey))}
      </WrappedComponent>
    )
  }
  H.displayName = wrapDisplayName(WrappedComponent, 'renderColumns')
  // H.propTypes = {
  //   columns: PropTypes.arrayOf(PropTypes.object),
  // }
  return H
}

// class H extends Component {
//   static displayName = wrapDisplayName(WrappedComponent, 'renderColumns')

// static propTypes = {
//   columns: PropTypes.arrayOf(PropTypes.object),
// }

//   render() {
//     const { columns, ...restProps } = this.props
//     return (
// <WrappedComponent {...restProps}>
//   {columns.map(toComponent(restProps.primaryKey))}
// </WrappedComponent>
//     )
//   }
// }

export default renderColumns
