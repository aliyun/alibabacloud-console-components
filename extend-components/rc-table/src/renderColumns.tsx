import React from 'react'
import get from 'lodash/get'
import { wrapDisplayName } from 'recompose'
import {
  TableProps,
  ColumnProps,
} from '@alicloud/console-components/types/table'
import { Table } from '@alicloud/console-components'
import { ITableProps } from './layout'

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

function renderColumns<T>(
  WrappedComponent: React.ComponentType<T>
): React.FC<T & { columns: ITableProps['columns'] }> {
  const H: React.FC<T & { columns: ITableProps['columns'] }> = ({
    columns = [],
    ...restProps
  }) => {
    return (
      <WrappedComponent {...(restProps as T)}>
        {columns.map(
          toComponent(
            (restProps as { primaryKey?: ITableProps['primaryKey'] }).primaryKey
          )
        )}
        {restProps.children}
      </WrappedComponent>
    )
  }
  H.displayName = wrapDisplayName(WrappedComponent, 'renderColumns')
  return H
}

export default renderColumns
