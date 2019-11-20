import React, { Component } from 'react'
import PropTypes from 'prop-types'
import isFunction from 'lodash/isFunction'
import get from 'lodash/get'
import uniq from 'lodash/uniq'
import xor from 'lodash/xor'
import renderProps from '../renderProps'
import connect from './connect'
import SelectAll from './SelectAll'
import { SelectionWrapper, SelectionContainer } from './styled'

const isMultiMode = mode => mode === 'multiple'

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

@connect(
  mapStateToProps,
  mapUpdateToProps
)
class Selection extends Component {
  static propTypes = {
    mode: PropTypes.string,
  }

  render() {
    const { mode } = this.props
    return (
      <SelectionWrapper>
        {isMultiMode(mode) && (
          <SelectionContainer>
            <SelectAll {...this.props} />
          </SelectionContainer>
        )}
        {renderProps(this.props, this.props)}
      </SelectionWrapper>
    )
  }
}

export default Selection
