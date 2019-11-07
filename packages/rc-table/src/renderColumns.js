import React, { Component } from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import { wrapDisplayName } from 'recompose'
import { Table } from '@alicloud/console-components'

const getColumnKeyByIndex = index => `wind-table-column-${index}`

const getColumnKey = (column, primaryKey, index) =>
  primaryKey
    ? get(column, primaryKey, getColumnKeyByIndex(index))
    : getColumnKeyByIndex(index)

const toComponent = primaryKey => (column, i) => (
  <Table.Column key={getColumnKey(column, primaryKey, i)} {...column} />
)

const renderColumns = WrappedComponent =>
  class H extends Component {
    static displayName = wrapDisplayName(WrappedComponent, 'renderColumns')

    static propTypes = {
      columns: PropTypes.arrayOf(PropTypes.object),
    }

    render() {
      const { columns, ...restProps } = this.props
      return (
        <WrappedComponent {...restProps}>
          {columns.map(toComponent(restProps.primaryKey))}
        </WrappedComponent>
      )
    }
  }

export default renderColumns
