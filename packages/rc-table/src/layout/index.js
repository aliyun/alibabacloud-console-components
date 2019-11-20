import React from 'react'
import PropTypes from 'prop-types'
import { Table } from '@alicloud/console-components'
import { withProps } from 'recompose'
import styled from 'styled-components'
import ActionBar, { IntersectionFixedActionBar } from '../action-bar'
import Context from './FixedBarContext'
import Search from '../search'
import Selection from '../selection'
import Pagination from '../pagination'
import renderComponent from '../renderComponent'

const FixedTopActionBar = withProps({
  fixedAlign: 'top',
})(IntersectionFixedActionBar)

const FixedBottomActionBar = withProps({
  fixedAlign: 'bottom',
})(IntersectionFixedActionBar)

const getActionBarComponent = status => {
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

const Layout = props => {
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
    ...restProps
  } = props

  const {
    top: ExactTopActionBar = ActionBar,
    bottom: ExactBottomActionBar = ActionBar,
  } = getActionBarComponent(affixActionBar)

  return (
    <Context.Provider
      value={{
        fixedBarZIndex,
        fixedClassName,
        fixedStyle,
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
            <ActionBar.Right>
              {renderComponent(Pagination, pagination, props)}
            </ActionBar.Right>
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
  search: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
  selection: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  pagination: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
  affixActionBar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
  ]),
  fixedBarZIndex: PropTypes.number,
  fixedClassName: PropTypes.string,
  fixedStyle: PropTypes.objectOf(PropTypes.any),
  afterFixedBarIntersectChanged: PropTypes.func,
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
