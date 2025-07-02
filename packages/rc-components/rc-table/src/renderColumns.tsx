import React from 'react';
import get from 'lodash/get';
import { wrapDisplayName } from 'recompose';
import {
  TableProps,
  ColumnProps,
} from '@alifd/next/types/table';
import { Table } from '@alifd/next';
import { ITableProps } from './layout';

const getColumnKeyByIndex = (index: number): string => `wind-table-column-${index}`;

const getColumnKey = (
  column: ColumnProps,
  primaryKey: TableProps['primaryKey'],
  index: number,
): string => (primaryKey
  ? get(column, primaryKey, getColumnKeyByIndex(index))
  : getColumnKeyByIndex(index));

const toComponent = (primaryKey: TableProps['primaryKey']) => (
  column: ColumnProps,
  i: number,
) => {
  if (column.children) {
    return (
      // @ts-ignore
      <Table.ColumnGroup title={column.title} align={column.align}>
        {
          (column.children as ColumnProps[]).map((col, index) => {
            return toComponent(
              (col as { primaryKey?: ITableProps['primaryKey'] }).primaryKey,
            )(col, index);
          })
        }
      </Table.ColumnGroup>
    );
  }

  return <Table.Column key={getColumnKey(column, primaryKey, i)} {...column} />;
};

function renderColumns<T>(
  WrappedComponent: React.ComponentType<T>,
): React.FC<T & { columns: ITableProps['columns'] }> {
  const H: React.FC<T & { columns: ITableProps['columns'] }> = ({
    columns = [],
    ...restProps
  }) => {
    return (
      <WrappedComponent {...(restProps as T)}>
        {columns.map(
          (toComponent)(
            (restProps as { primaryKey?: ITableProps['primaryKey'] }).primaryKey,
          ),
        )}
        {restProps.children}
      </WrappedComponent>
    );
  };
  H.displayName = wrapDisplayName(WrappedComponent, 'renderColumns');
  return H;
}

export default renderColumns;
