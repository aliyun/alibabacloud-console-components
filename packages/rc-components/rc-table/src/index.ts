import { compose } from 'recompose';
import { Table } from '@alifd/next';

import Pagination from './pagination';
import Search from './search';
import Selection from './selection';
import withSelectionProvider from './selection/withProvider';
import renderColumns from './renderColumns';
import withDefaultProps from './withDefaultProps';
import Layout, { ITableProps, StickyLockLayout } from './layout';

import './index.css';

/**
 * @public
 */
const EnhancedTable = compose<
Omit<ITableProps, 'columns' | 'exact'>,
ITableProps
>(
  withDefaultProps,
  withSelectionProvider,
  renderColumns,
)(Layout);

/**
 * @public
 */
const EnhancedStickyLockTable = compose<
Omit<ITableProps, 'columns' | 'exact'>,
ITableProps
>(
  withDefaultProps,
  withSelectionProvider,
  renderColumns,
)(StickyLockLayout);

/**
 * @public
 */
export type ITable = typeof EnhancedTable & {
  Selection: typeof Selection
  Pagination: typeof Pagination
  Search: typeof Search
  Column: typeof Table.Column
  ColumnGroup: typeof Table.ColumnGroup
  GroupHeader: typeof Table.GroupHeader
  GroupFooter: typeof Table.GroupFooter
  StickyLock: typeof EnhancedStickyLockTable
};

/**
 * @public
 */
const ExpEnhancedTable: ITable = Object.assign(EnhancedTable, {
  Selection,
  Pagination,
  Search,
  Column: Table.Column,
  ColumnGroup: Table.ColumnGroup,
  GroupHeader: Table.GroupHeader,
  GroupFooter: Table.GroupFooter,
  StickyLock: EnhancedStickyLockTable,
});

export default ExpEnhancedTable;

export { EnhancedTable, Selection, Pagination, Search };

export * from './selection';
export * from './pagination';
export * from './search';
export * from './layout';
