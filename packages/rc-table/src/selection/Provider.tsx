import React, { Component } from 'react'
import PropTypes from 'prop-types'
import isFunction from 'lodash/isFunction'
import isPlainObject from 'lodash/isPlainObject'
import isArray from 'lodash/isArray'
import compact from 'lodash/compact'
import get from 'lodash/get'
import find from 'lodash/find'
import intersection from 'lodash/intersection'
import { TableProps } from '@alifd/next/types/table'
import renderProps from '../renderProps'
import Context from './Context'
import { IRcTableProps } from '../index'

const getRowKeys = (
  dataSource: TableProps['dataSource'] = [],
  primaryKey: string
): string[] => {
  if (!primaryKey) {
    return []
  }

  return compact(dataSource.map((item: any) => item[primaryKey]))
}

const getExactSelectedRowKeys = (
  selectedRowKeys: string[],
  dataSource: TableProps['dataSource'],
  primaryKey: string
): string[] => {
  const rowKeys = getRowKeys(dataSource, primaryKey)
  return intersection(rowKeys, selectedRowKeys) as string[]
}

interface IState {
  selectedRowKeys: string[] | null
}

class Provider extends Component<IRcTableProps & TableProps, IState> {
  static propTypes = {
    rowSelection: PropTypes.objectOf(PropTypes.any),
    dataSource: PropTypes.arrayOf(PropTypes.object),
    primaryKey: PropTypes.string,
    exact: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  }

  static getDerivedStateFromProps(
    nextProps: IRcTableProps & TableProps,
    prevState: IState
  ): null | { selectedRowKeys: string[] } {
    const { rowSelection, exact } = nextProps
    const { selectedRowKeys: prevSelectedRowKeys } = prevState
    let nextSelectedRowKeys = null

    if (isPlainObject(rowSelection)) {
      const {
        selectedRowKeys,
        UNSTABLE_defaultSelectedRowKeys,
      } = rowSelection as {
        selectedRowKeys: string[] | null
        UNSTABLE_defaultSelectedRowKeys: string | null
      }

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
      const selectedRowKeys = (nextSelectedRowKeys ||
        prevSelectedRowKeys) as string[]
      const exactSelectedRowKeys = getExactSelectedRowKeys(
        selectedRowKeys,
        dataSource,
        primaryKey as string
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

  constructor(props: any) {
    super(props)
    this.update = this.update.bind(this)
    this.state = {
      selectedRowKeys: null,
    }
  }

  onChange(selectedRowKeys: string[], records: any): void {
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

  getMode(): string {
    const { rowSelection } = this.props
    if (isPlainObject(rowSelection)) {
      // Based on Fusion <Table>'s props defination,
      // `rowSelection.mode`'s value is equal to `multiple` by default.
      // https://github.com/alibaba-fusion/next/blob/master/src/table/selection.jsx#L109
      return get(rowSelection, 'mode', 'multiple')
    }
    return 'multiple'
  }

  getRecords(selectedRowKeys: string[]): Array<any> {
    const { dataSource, primaryKey } = this.props
    if (primaryKey) {
      const records = selectedRowKeys.map(key =>
        find(dataSource, {
          [primaryKey]: key,
        })
      )

      return compact(records)
    }

    return []
  }

  update(
    updater: (
      selectedRowKeys: string[],
      dataSource: TableProps['dataSource'],
      primaryKey: TableProps['primaryKey'],
      rowSelection: TableProps['rowSelection']
    ) => string[]
  ): void {
    const { selectedRowKeys } = this.state
    const { dataSource, primaryKey, rowSelection } = this.props

    const updatedSelectedRowKeys = updater(
      selectedRowKeys as string[],
      dataSource,
      primaryKey,
      rowSelection
    )

    this.onChange(
      updatedSelectedRowKeys,
      this.getRecords(updatedSelectedRowKeys)
    )
  }

  hijackProps(): any {
    const { rowSelection, exact, ...restProps } = this.props
    return isPlainObject(rowSelection)
      ? {
          ...restProps,
          rowSelection: {
            selectedRowKeys: this.state.selectedRowKeys,
            ...rowSelection,
            onChange: this.onChange.bind(this),
          },
        }
      : restProps
  }

  render(): React.ReactNode {
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
