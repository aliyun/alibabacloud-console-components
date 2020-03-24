import React from 'react'
import PropTypes from 'prop-types'
import { Table } from '@alicloud/console-components'
import {
  TableProps,
  ColumnProps,
} from '@alicloud/console-components/types/table'
import { SearchProps } from '@alicloud/console-components/types/search'
import { PaginationProps } from '@alicloud/console-components/types/pagination'
import { withProps } from 'recompose'
import styled from 'styled-components'
import isArray from 'lodash/isArray'
import ActionBar, { IntersectionFixedActionBar } from '../action-bar'
import Context from './FixedBarContext'
import Search from '../search'
import Selection from '../selection'
import Pagination from '../pagination'
import renderComponent from '../renderComponent'
import { IRcTableProps } from '../index'

const FixedTopActionBar = withProps({
  fixedAlign: 'top',
})(IntersectionFixedActionBar)

const FixedBottomActionBar = withProps({
  fixedAlign: 'bottom',
})(IntersectionFixedActionBar)

const defaultExpandedWidth = 0

const getActionBarComponent = (
  status: ITableProps['affixActionBar']
): {
  top?: React.ReactNode
  bottom?: React.ReactNode
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
): {
  marginLeft: number
  width: string
} => {
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
    marginLeft: -actualExpandedWidth[0],
    width: `calc(100% + ${actualExpandedWidth[0] + actualExpandedWidth[1]}px)`,
  }
}

const Layout: React.FC<TableProps & IRcTableProps> = props => {
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
      <STableWrapper>
        {(operation || search) && (
          <ExactTopActionBar
            afterIntersectChanged={afterFixedBarIntersectChanged}
          >
            <ActionBar.Left>
              {operation &&
                renderComponent(null, operation.primary || operation, props)}
              {renderComponent(Search, search, props)}
            </ActionBar.Left>
            <ActionBar.Right>
              {operation && renderComponent(null, operation.secondary, props)}
            </ActionBar.Right>
          </ExactTopActionBar>
        )}
        <div>
          <Table {...restProps} />
        </div>
        {(selection || pagination) && (
          <ExactBottomActionBar
            align="bottom"
            afterIntersectChanged={afterFixedBarIntersectChanged}
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
  // operation: PropTypes.oneOfType([
  //   PropTypes.func,
  //   PropTypes.node,
  //   PropTypes.objectOf(PropTypes.any),
  // ]),
  // search: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
  // selection: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  // pagination: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
  // affixActionBar: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.bool,
  //   PropTypes.array,
  // ]),
  // fixedBarZIndex: PropTypes.number,
  // fixedClassName: PropTypes.string,
  // fixedStyle: PropTypes.objectOf(PropTypes.any),
  // afterFixedBarIntersectChanged: PropTypes.func,
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
