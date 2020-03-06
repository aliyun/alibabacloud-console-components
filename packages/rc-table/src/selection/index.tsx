import React from 'react'
import PropTypes from 'prop-types'
import { isFunction, get, uniq, xor } from 'lodash'
import renderProps from '../renderProps'
import connect from './connect'
import SelectAll from './SelectAll'
import { Mode, ITableProps, ISelectionProps } from '../index'
import { SSelectionWrapper, SSelectAllContainer } from './styled'

/**
 * mapStateToProps的参数
 */
export interface IMapStateToPropsFuncParams {
  selectedRowKeys?: Array<any>
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
    selectedRowKeys: Array<any>,
    dataSource: ITableProps['dataSource'],
    primaryKey: ITableProps['primaryKey'],
    rowSelection: ITableProps['rowSelection']
  ): Array<any>
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

  return {
    ...state,
    isSelectedAll,
    isIndeterminate,
  }
}

const getPrimaryKeys = (
  dataSource: Array<any>,
  primaryKey: string,
  getProps?: (record: {}, index: number) => void
): Array<any> =>
  (isFunction(getProps)
    ? dataSource.filter((item, i) => isSelectable(item, i, getProps))
    : dataSource
  ).map(item => item[primaryKey])

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
          dataSource as Array<any>,
          primaryKey as string,
          rowSelection.getProps
        )
        return uniq([...selectedRowKeys, ...primaryKeys])
      })
    } else {
      update(
        (
          selectedRowKeys: Array<any>,
          dataSource: ITableProps['dataSource'],
          primaryKey: ITableProps['primaryKey'],
          rowSelection: ITableProps['rowSelection'] = {}
        ) => {
          const primaryKeys = getPrimaryKeys(
            dataSource as Array<any>,
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
const Selection: React.FC<ISelectionProps &
  ITableProps['rowSelection']> = props => {
  const { mode = 'multiple', isIndeterminate, isSelectedAll, selectAll } = props
  return (
    <SSelectionWrapper>
      {isMultiMode(mode) && (
        <SSelectAllContainer>
          <SelectAll
            isIndeterminate={isIndeterminate}
            isSelectedAll={isSelectedAll}
            selectAll={selectAll}
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
