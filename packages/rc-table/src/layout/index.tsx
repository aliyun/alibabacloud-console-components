import React from 'react'
import PropTypes from 'prop-types'
import { Table } from '@alicloud/console-components'
import { withProps } from 'recompose'
import styled from 'styled-components'
import isArray from 'lodash/isArray'
import { PaginationProps } from '@alicloud/console-components/types/pagination'
import { TableProps } from '@alicloud/console-components/types/table'
import { SearchProps } from '@alicloud/console-components/types/search'
import { OverlayProps } from '@alicloud/console-components/types/overlay'

import ActionBar, {
  IntersectionFixedActionBar,
  IActionBarProps,
} from '../action-bar'
import Context from './FixedBarContext'
import Search from '../search'
import Selection from '../selection'
import Pagination from '../pagination'
import renderComponent from '../renderComponent'
import type { IRcTableProps } from '../types/IRcTableProps.type'
export type { IRcTableProps }

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
export type IPaginationProps = TableOperaion | PaginationProps

/**
 * @public
 */
export type ISearchProps = TableOperaion | SearchProps

interface IRcTablePropsInternal {
  /**
   * @internal
   * 当action-bar为affix状态的时候，透传给弹层overlay，继承基础组件`Overlay`。可以指定action-bar在affix状态时候渲染的容器
   */
  affixBarOverlayProps?: OverlayProps
  /**
   * @internal
   * Table组件，可以是fusion的Table或者Table.StickyLock
   */
  TableComponent?: React.ComponentType
}

/**
 * @public
 */
export type ITableProps = TableProps & IRcTableProps & IRcTablePropsInternal

interface IFixedAlign {
  fixedAlign?: 'top' | 'bottom'
}

const getFixedAlign = (
  align: 'top' | 'bottom'
): {
  fixedAlign: 'top' | 'bottom'
} => ({
  fixedAlign: align,
})

const FixedTopActionBar = withProps<IFixedAlign, IActionBarProps & IFixedAlign>(
  getFixedAlign('top')
)(IntersectionFixedActionBar)

const FixedBottomActionBar = withProps<
  IFixedAlign,
  IActionBarProps & IFixedAlign
>(getFixedAlign('bottom'))(IntersectionFixedActionBar)

// init ExpandedWidth
const defaultExpandedWidth = 0

const getActionBarComponent = (
  status: ITableProps['affixActionBar']
): {
  top?: React.ComponentType<IActionBarProps & IFixedAlign>
  bottom?: React.ComponentType<IActionBarProps & IFixedAlign>
} => {
  if (status === true) {
    return {
      top: FixedTopActionBar,
      bottom: FixedBottomActionBar,
    }
  }

  let arrStatus = status

  if (typeof status === 'string') {
    arrStatus = status.replace(/\s/g, '').split(',')
  }

  if (Array.isArray(arrStatus)) {
    return arrStatus.reduce((result, key) => {
      switch (key) {
        case 'top': {
          return {
            ...result,
            top: FixedTopActionBar,
          }
        }
        case 'bottom': {
          return {
            ...result,
            bottom: FixedBottomActionBar,
          }
        }
        default: {
          return result
        }
      }
    }, {})
  }

  return {}
}

// eslint-disable-next-line import/no-named-as-default-member
const ScActionBarRight = styled(ActionBar.Right)`
  flex: 0 0 auto;
`
const getExpandedStyle = (
  fixedBarExpandWidth: number[]
): React.CSSProperties => {
  let actualExpandedWidth = []
  if (isArray(fixedBarExpandWidth)) {
    if (fixedBarExpandWidth.length === 0) {
      actualExpandedWidth = [defaultExpandedWidth, defaultExpandedWidth]
    } else if (fixedBarExpandWidth.length === 1) {
      actualExpandedWidth = [fixedBarExpandWidth[0], fixedBarExpandWidth[0]]
    } else {
      actualExpandedWidth = [fixedBarExpandWidth[0], fixedBarExpandWidth[1]]
    }
  } else {
    actualExpandedWidth = [defaultExpandedWidth, defaultExpandedWidth]
  }
  return {
    paddingLeft: actualExpandedWidth[0],
    paddingRight: actualExpandedWidth[1],
    marginLeft: -actualExpandedWidth[0],
    width: `calc(100% + ${actualExpandedWidth[0] + actualExpandedWidth[1]}px)`,
  }
}

const Layout: React.FC<Omit<ITableProps, 'columns' | 'exact'>> = (props) => {
  const {
    operation,
    search,
    selection,
    pagination,
    affixActionBar,
    fixedBarZIndex,
    fixedClassName,
    fixedStyle,
    afterFixedBarIntersectChanged,
    fixedBarExpandWidth = [defaultExpandedWidth, defaultExpandedWidth],
    affixBarOverlayProps,
    TableComponent = Table,
    ...restProps
  } = props

  const {
    top: ExactTopActionBar = ActionBar,
    bottom: ExactBottomActionBar = ActionBar,
  } = getActionBarComponent(affixActionBar)
  const extraStyle = getExpandedStyle(fixedBarExpandWidth)
  return (
    <Context.Provider
      value={{
        fixedBarZIndex,
        fixedClassName,
        fixedStyle: {
          ...fixedStyle,
          ...extraStyle,
        },
      }}
    >
      <STableWrapper className="wind-rc-table">
        {(operation || search) && (
          <ExactTopActionBar
            afterIntersectChanged={afterFixedBarIntersectChanged}
            affixBarOverlayProps={affixBarOverlayProps}
          >
            <ActionBar.Left>
              {operation &&
                renderComponent(
                  null,
                  (operation as { primary: TableOperaion }).primary ||
                    operation,
                  props
                )}
              {renderComponent(Search, search, props)}
            </ActionBar.Left>
            <ActionBar.Right>
              {operation &&
                renderComponent(
                  null,
                  (operation as { secondary: TableOperaion }).secondary,
                  props
                )}
            </ActionBar.Right>
          </ExactTopActionBar>
        )}
        <div>
          <TableComponent {...restProps} />
        </div>
        {(selection || pagination) && (
          <ExactBottomActionBar
            align="bottom"
            afterIntersectChanged={afterFixedBarIntersectChanged}
            affixBarOverlayProps={affixBarOverlayProps}
          >
            <ActionBar.Left>
              {selection && <Selection render={selection} />}
            </ActionBar.Left>
            <ScActionBarRight>
              {renderComponent(Pagination, pagination, props)}
            </ScActionBarRight>
          </ExactBottomActionBar>
        )}
      </STableWrapper>
    </Context.Provider>
  )
}

Layout.propTypes = {
  operation: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.objectOf(PropTypes.any),
  ]),
  search: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.node,
    PropTypes.func,
  ]),
  selection: PropTypes.oneOfType([PropTypes.func]),
  pagination: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.node,
    PropTypes.func,
  ]),
  affixActionBar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
  ]),
  fixedBarZIndex: PropTypes.number,
  fixedClassName: PropTypes.string,
  fixedStyle: PropTypes.objectOf(PropTypes.any),
  afterFixedBarIntersectChanged: PropTypes.func,
  fixedBarExpandWidth: PropTypes.arrayOf(PropTypes.any),
}

export default Layout

const STableWrapper = styled.div`
  .next-table-header {
    .next-table-cell-wrapper {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
`

export const StickyLockLayout: React.FC<ITableProps> = (props) => {
  return <Layout TableComponent={Table.StickyLock} {...props} />
}
