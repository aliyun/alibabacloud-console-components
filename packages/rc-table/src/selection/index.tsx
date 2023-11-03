import React from 'react'
import PropTypes from 'prop-types'
import isFunction from 'lodash/isFunction'
import get from 'lodash/get'
import uniq from 'lodash/uniq'
import xor from 'lodash/xor'
import { CheckboxProps } from '@alicloud/console-components/types/checkbox'
import renderProps from '../renderProps'
import connect from './connect'
import SelectAll from './SelectAll'
import { ITableProps } from '../layout'
import { SSelectionWrapper, SSelectAllContainer } from './styled'

/**
 * @public
 */
export type Mode = 'single' | 'multiple'

/**
 * selection params
 * @public
 */
export interface ISelectionRenderParams {
  selectedRowKeys: any[]
  isSelectedAll: boolean
  selectAll: (checked: boolean) => void
}

/**
 * @public
 */
export interface ISelectionProps {
  render?: (selection: ISelectionRenderParams) => React.ReactNode
  isSelectedAll?: boolean
  isIndeterminate?: boolean
  isDisabled?: boolean
  rowSelection?: ITableProps['rowSelection']
  primaryKey?: ITableProps['primaryKey']
  dataSource?: ITableProps['dataSource']
  selectAll?: CheckboxProps['onChange']
}

/**
 * @public
 * mapStateToProps的参数
 */
export interface IMapStateToPropsFuncParams {
  selectedRowKeys?: any[]
  rawRowSelection?: ITableProps['rowSelection']
  dataSource?: ITableProps['dataSource']
  primaryKey?: ITableProps['primaryKey']
  mode?: Mode
}

/**
 * @public
 */
export interface IUpdaterFunc {
  (
    selectedRowKeys: any[],
    dataSource: ITableProps['dataSource'],
    primaryKey: ITableProps['primaryKey'],
    rowSelection: ITableProps['rowSelection']
  ): any[]
}

const isMultiMode = (mode: Mode): boolean => mode === 'multiple'

const isSelectable = (
  item: any,
  index: number,
  getProps?: (record: {}, index: number) => void
): boolean =>
  isFunction(getProps) ? !get(getProps(item, index), 'disabled') : true

const mapStateToProps = (
  state: IMapStateToPropsFuncParams
): ISelectionProps & ITableProps['rowSelection'] => {
  const {
    selectedRowKeys,
    dataSource = [],
    primaryKey,
    mode = 'multiple',
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

  const titleProps = get(rawRowSelection || {}, 'titleProps')
  const isDisabled = isFunction(titleProps)
    ? Boolean(get(titleProps(), 'disabled'))
    : false

  return {
    ...state,
    isSelectedAll,
    isIndeterminate,
    isDisabled,
  }
}

const getPrimaryKeys = (
  dataSource: any[],
  primaryKey: string,
  getProps?: (record: {}, index: number) => void
): any[] =>
  (isFunction(getProps)
    ? dataSource.filter((item, i) => isSelectable(item, i, getProps))
    : dataSource
  ).map((item) => item[primaryKey])

const mapUpdateToProps = (
  update: (updater: IUpdaterFunc) => void
): {
  update: (updater: IUpdaterFunc) => void
  selectAll: (checked: boolean) => void
} => ({
  update,
  selectAll(checked) {
    if (checked) {
      update((selectedRowKeys, dataSource, primaryKey, rowSelection = {}) => {
        const primaryKeys = getPrimaryKeys(
          dataSource as any[],
          primaryKey as string,
          rowSelection.getProps
        )
        return uniq([...selectedRowKeys, ...primaryKeys])
      })
    } else {
      update(
        (
          selectedRowKeys: any[],
          dataSource: ITableProps['dataSource'],
          primaryKey: ITableProps['primaryKey'],
          rowSelection: ITableProps['rowSelection'] = {}
        ) => {
          const primaryKeys = getPrimaryKeys(
            dataSource as any[],
            primaryKey as string,
            rowSelection.getProps
          )
          return xor(selectedRowKeys, primaryKeys)
        }
      )
    }
  },
})

/**
 * @public
 */
const Selection: React.FC<ISelectionProps & ITableProps['rowSelection']> = (
  props
) => {
  const {
    mode = 'multiple',
    isIndeterminate,
    isSelectedAll,
    selectAll,
    isDisabled,
  } = props
  return (
    <SSelectionWrapper className="selection">
      {isMultiMode(mode) && (
        <SSelectAllContainer className="select-all-container">
          <SelectAll
            isIndeterminate={isIndeterminate}
            isSelectedAll={isSelectedAll}
            selectAll={selectAll}
            isDisabled={isDisabled}
          />
        </SSelectAllContainer>
      )}
      {renderProps(props, props)}
    </SSelectionWrapper>
  )
}

Selection.propTypes = {
  mode: PropTypes.oneOf(['single', 'multiple']),
}

export default connect(mapStateToProps, mapUpdateToProps)(Selection)
