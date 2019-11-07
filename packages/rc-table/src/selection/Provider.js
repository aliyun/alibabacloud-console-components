import React, { Component } from 'react'
import PropTypes from 'prop-types'
import isFunction from 'lodash/isFunction'
import isPlainObject from 'lodash/isPlainObject'
import isArray from 'lodash/isArray'
import compact from 'lodash/compact'
import get from 'lodash/get'
import find from 'lodash/find'
import intersection from 'lodash/intersection'
import renderProps from '../renderProps'
import Context from './Context'

const getRowKeys = (dataSource, primaryKey) => {
  if (!primaryKey) {
    return []
  }

  return compact(dataSource.map(item => item[primaryKey]))
}

const getExactSelectedRowKeys = (selectedRowKeys, dataSource, primaryKey) => {
  const rowKeys = getRowKeys(dataSource, primaryKey)
  return intersection(rowKeys, selectedRowKeys)
}

class Provider extends Component {
  static propTypes = {
    rowSelection: PropTypes.objectOf(PropTypes.any),
    dataSource: PropTypes.arrayOf(PropTypes.object),
    primaryKey: PropTypes.string,
    exact: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { rowSelection, exact } = nextProps
    const { selectedRowKeys: prevSelectedRowKeys } = prevState
    let nextSelectedRowKeys = null

    if (isPlainObject(rowSelection)) {
      const {
        selectedRowKeys,
        UNSTABLE_defaultSelectedRowKeys,
      } = rowSelection

      if (isArray(selectedRowKeys)) {
        nextSelectedRowKeys = selectedRowKeys
      } else if (
        !prevSelectedRowKeys &&
        isArray(UNSTABLE_defaultSelectedRowKeys)
      ) {
        nextSelectedRowKeys = UNSTABLE_defaultSelectedRowKeys
      }
    }

    // Initialize the `selectedRowKeys as empty array
    if (!nextSelectedRowKeys && !prevSelectedRowKeys) {
      return {
        selectedRowKeys: [],
      }
    }

    if (exact) {
      const { dataSource, primaryKey } = nextProps
      const selectedRowKeys = nextSelectedRowKeys || prevSelectedRowKeys
      const exactSelectedRowKeys = getExactSelectedRowKeys(
        selectedRowKeys,
        dataSource,
        primaryKey
      )
      return {
        selectedRowKeys: exactSelectedRowKeys,
      }
    }

    if (nextSelectedRowKeys) {
      return {
        selectedRowKeys: nextSelectedRowKeys,
      }
    }

    return null
  }

  constructor(...args) {
    super(...args)
    this.update = this.update.bind(this)
    this.state = {
      selectedRowKeys: null,
    }
  }

  onChange(selectedRowKeys, records) {
    const {
      rowSelection: {
        selectedRowKeys: originSelectedRowKeys,
        onChange: originOnChange,
      } = {},
    } = this.props

    if (isFunction(originOnChange)) {
      originOnChange(selectedRowKeys, records)
    }

    if (!originSelectedRowKeys) {
      this.setState({ selectedRowKeys })
    }
  }

  getMode() {
    const { rowSelection } = this.props
    if (isPlainObject(rowSelection)) {
      // Based on Fusion <Table>'s props defination,
      // `rowSelection.mode`'s value is equal to `multiple` by default.
      // https://github.com/alibaba-fusion/next/blob/master/src/table/selection.jsx#L109
      return get(rowSelection, 'mode', 'multiple')
    }
  }

  getRecords(selectedRowKeys) {
    const { dataSource, primaryKey } = this.props
    if (primaryKey) {
      const records = selectedRowKeys.map(key => find(dataSource, {
        [primaryKey]: key,
      }))

      return compact(records)
    }

    return []
  }

  update(updater) {
    const { selectedRowKeys } = this.state
    const {
      dataSource,
      primaryKey,
      rowSelection,
    } = this.props

    const updatedSelectedRowKeys = updater(
      selectedRowKeys,
      dataSource,
      primaryKey,
      rowSelection
    )

    this.onChange(
      updatedSelectedRowKeys,
      this.getRecords(updatedSelectedRowKeys)
    )
  }

  hijackProps() {
    const { rowSelection, exact, ...restProps } = this.props
    return isPlainObject(rowSelection) ? {
      ...restProps,
      rowSelection: {
        selectedRowKeys: this.state.selectedRowKeys,
        ...rowSelection,
        onChange: this.onChange.bind(this),
      },
    } : restProps
  }

  render() {
    const providerValue = {
      selectedRowKeys: this.state.selectedRowKeys,
      rawRowSelection: this.props.rowSelection,
      dataSource: this.props.dataSource,
      primaryKey: this.props.primaryKey,
      mode: this.getMode(),
      update: this.update,
    }

    const ownerProps = this.props
    const hijackedProps = this.hijackProps()

    return (
      <Context.Provider value={providerValue}>
        {renderProps(this.props, hijackedProps, ownerProps)}
      </Context.Provider>
    )
  }
}

export default Provider
