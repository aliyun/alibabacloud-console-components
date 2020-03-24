import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TableProps } from '@alicloud/console-components/types/table'
import { isFunction, get, uniq, xor } from 'lodash'
import renderProps from '../renderProps'
import connect from './connect'
import SelectAll from './SelectAll'
import { SSelectionWrapper, SSelectAllContainer } from './styled'

export interface IrenderFunc {
  (selection: {
    selectedRowKeys: string[]
    isSelectedAll: boolean
    selectAll: (checked: boolean) => void
  }): React.ReactNode
}
export interface ISelectionProps {
  render: IrenderFunc
  isSelectedAll: boolean
  isIndeterminate: boolean
}

const isMultiMode = (mode: string): boolean => mode === 'multiple'

const isSelectable = (item, index, getProps) =>
  isFunction(getProps) ? !get(getProps(item, index), 'disabled') : true

const mapStateToProps = state => {
  const {
    selectedRowKeys,
    dataSource,
    primaryKey,
    mode,
    rawRowSelection,
  } = state

  if (
    !primaryKey ||
    !isMultiMode(mode) ||
    !selectedRowKeys ||
    !selectedRowKeys.length ||
    !dataSource ||
    !dataSource.length
  ) {
    return state
  }

  const getProps = get(rawRowSelection || {}, 'getProps')
  const initialIsSelectedAll = true
  const initialIsIndeterminate = false
  let isSelectedAll = initialIsSelectedAll
  let isIndeterminate = initialIsIndeterminate

  // Use legacy `for...` loop that can be to break
  // eslint-disable-next-line
  for (let i = 0, len = dataSource.length; i < len; i++) {
    const item = dataSource[i]
    const key = item[primaryKey]
    const isItemSelectable = isSelectable(item, i, getProps)

    if (key && isItemSelectable) {
      if (selectedRowKeys.indexOf(key) < 0) {
        isSelectedAll = false
      } else {
        isIndeterminate = true
      }
    }

    // Break the loop ASAP
    if (
      isSelectedAll !== initialIsSelectedAll &&
      isIndeterminate !== initialIsIndeterminate
    ) {
      break
    }
  }

  if (isSelectedAll) {
    isIndeterminate = false
  }

  return {
    ...state,
    isSelectedAll,
    isIndeterminate,
  }
}

const getPrimaryKeys = (dataSource, primaryKey, getProps) =>
  (isFunction(getProps)
    ? dataSource.filter((item, i) => isSelectable(item, i, getProps))
    : dataSource
  ).map(item => item[primaryKey])

const mapUpdateToProps = update => ({
  update,
  selectAll(checked) {
    if (checked) {
      update((selectedRowKeys, dataSource, primaryKey, rowSelection = {}) => {
        // eslint-disable-next-line max-len
        const primaryKeys = getPrimaryKeys(
          dataSource,
          primaryKey,
          rowSelection.getProps
        )
        return uniq([...selectedRowKeys, ...primaryKeys])
      })
    } else {
      update((selectedRowKeys, dataSource, primaryKey, rowSelection) => {
        // eslint-disable-next-line max-len
        const primaryKeys = getPrimaryKeys(
          dataSource,
          primaryKey,
          rowSelection.getProps
        )
        return xor(selectedRowKeys, primaryKeys)
      })
    }
  },
})

@connect(mapStateToProps, mapUpdateToProps)
class Selection extends Component<
  ISelectionProps & TableProps['rowSelection'],
  {}
> {
  static propTypes = {
    mode: PropTypes.string,
  }

  render(): React.ReactNode {
    const { mode = 'multiple' } = this.props
    return (
      <SSelectionWrapper>
        {isMultiMode(mode) && (
          <SSelectAllContainer>
            <SelectAll {...this.props} />
          </SSelectAllContainer>
        )}
        {renderProps(this.props, this.props)}
      </SSelectionWrapper>
    )
  }
}

export default Selection
