import React, { useState, useEffect, useCallback } from 'react'
import isFunction from 'lodash/isFunction'
import isPlainObject from 'lodash/isPlainObject'
import isArray from 'lodash/isArray'
import compact from 'lodash/compact'
import get from 'lodash/get'
import find from 'lodash/find'
import intersection from 'lodash/intersection'
import omit from 'lodash/omit'
import isNil from 'lodash/isNil'
import renderProps from '../renderProps'
import Context from './Context'
import { Mode } from './index'
import { ITableProps } from '../layout'

const getRowKeys = (
  dataSource: ITableProps['dataSource'] = [],
  primaryKey: string
): string[] => {
  if (!primaryKey) {
    return []
  }
  return compact(dataSource.map((item: any) => item[primaryKey]))
}

const getExactSelectedRowKeys = (
  selectedRowKeys: any[],
  dataSource: ITableProps['dataSource'],
  primaryKey: string
): string[] => {
  const rowKeys = getRowKeys(dataSource, primaryKey)
  return intersection(rowKeys, selectedRowKeys) as string[]
}

interface IState {
  selectedRowKeys: any[] | null
}

const Provider: React.FC<ITableProps> = (props) => {
  const { rowSelection, exact, dataSource, primaryKey } = props

  const [selectedRowKeys, setSelectedRowKeys] = useState<any[] | null>(null)

  useEffect((): void => {
    let nextSelectedRowKeys = null
    if (isPlainObject(rowSelection)) {
      const {
        selectedRowKeys: propsSelectedRowKeys,
        UNSTABLE_defaultSelectedRowKeys,
      } = rowSelection as {
        selectedRowKeys: any[]
        UNSTABLE_defaultSelectedRowKeys: any[]
      }
      // use props selectedRowKeys
      if (isArray(propsSelectedRowKeys)) {
        nextSelectedRowKeys = propsSelectedRowKeys
      } else if (!selectedRowKeys && isArray(UNSTABLE_defaultSelectedRowKeys)) {
        nextSelectedRowKeys = UNSTABLE_defaultSelectedRowKeys
      }
    }
    // Initialize the `selectedRowKeys as empty array
    if (!nextSelectedRowKeys && !selectedRowKeys) {
      setSelectedRowKeys([])
      return
    }

    if (exact) {
      const actualSelectedRowKeys = (nextSelectedRowKeys ||
        selectedRowKeys) as any[]
      const exactSelectedRowKeys = getExactSelectedRowKeys(
        actualSelectedRowKeys,
        dataSource,
        primaryKey as string
      )
      setSelectedRowKeys(exactSelectedRowKeys)
      return
    }

    if (nextSelectedRowKeys) {
      setSelectedRowKeys(nextSelectedRowKeys)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSource, exact, primaryKey, rowSelection])

  const handleChange = useCallback(
    (rowKeys: any[], records: any): void => {
      const {
        rowSelection: {
          selectedRowKeys: originSelectedRowKeys = null,
          onChange: originOnChange = null,
        } = {},
      } = props

      if (isFunction(originOnChange)) {
        originOnChange(rowKeys, records)
      }

      if (!originSelectedRowKeys) {
        setSelectedRowKeys(rowKeys)
      }
    },
    [props]
  )

  const getMode = (): Mode => {
    if (isPlainObject(rowSelection)) {
      // Based on Fusion <Table>'s props defination,
      // `rowSelection.mode`'s value is equal to `multiple` by default.
      // https://github.com/alibaba-fusion/next/blob/master/src/table/selection.jsx#L109
      return get(rowSelection, 'mode', 'multiple')
    }
    return 'multiple'
  }

  const getRecords = useCallback(
    (rowKeys: any[]): any[] => {
      if (primaryKey) {
        const records = rowKeys.map((key) =>
          find(dataSource, {
            [primaryKey]: key,
          })
        )

        return compact(records)
      }

      return []
    },
    [dataSource, primaryKey]
  )

  const handleUpdate = useCallback(
    (
      updater: (
        selectedRowKeys: any[],
        dataSource: ITableProps['dataSource'],
        primaryKey: ITableProps['primaryKey'],
        rowSelection: ITableProps['rowSelection']
      ) => string[]
    ): void => {
      const updatedSelectedRowKeys = updater(
        selectedRowKeys as string[],
        dataSource,
        primaryKey,
        rowSelection
      )
      handleChange(updatedSelectedRowKeys, getRecords(updatedSelectedRowKeys))
    },
    [
      dataSource,
      getRecords,
      handleChange,
      primaryKey,
      rowSelection,
      selectedRowKeys,
    ]
  )

  const hijackProps = (): any => {
    const restProps = omit(props, ['rowSelection', 'exact'])
    return isPlainObject(rowSelection)
      ? {
          ...restProps,
          rowSelection: {
            selectedRowKeys,
            ...rowSelection,
            onChange: handleChange,
          },
        }
      : restProps
  }

  const providerValue: {
    selectedRowKeys: any[]
    rawRowSelection: ITableProps['rowSelection']
    dataSource: ITableProps['dataSource']
    primaryKey: ITableProps['primaryKey']
    mode: Mode
    update: (updater: any) => void
  } = {
    selectedRowKeys: isNil(selectedRowKeys) ? [] : selectedRowKeys,
    rawRowSelection: rowSelection,
    dataSource,
    primaryKey,
    mode: getMode(),
    update: handleUpdate,
  }

  const ownerProps = props
  const hijackedProps = hijackProps()

  return (
    <Context.Provider value={providerValue}>
      {renderProps(props, hijackedProps, ownerProps)}
    </Context.Provider>
  )
}

export default Provider
