import React, { useState, useMemo, useCallback } from 'react'
import cs from 'classnames'
import { isFunction, isArray } from 'lodash'
import Context from './context'
import * as S from './style'

function useGroupSelected({
  selectedIds,
  onChange,
}: {
  selectedIds: string[]
  onChange: (ids: string[], e: React.SyntheticEvent) => void
}) {
  const onSelect = useCallback(
    (id: string, e: React.SyntheticEvent) => {
      const nextSelecteds = ((ids) => {
        // 没有则添加
        if (!ids.includes(id)) {
          return [...ids, id]
        }
        // 有则移除
        return ids.filter((v) => v !== id)
      })(selectedIds)

      onChange(nextSelecteds, e)
    },
    [onChange, selectedIds]
  )

  const providerValue = useMemo(
    () => ({
      selectedIds,
      onSelect,
    }),
    [selectedIds, onSelect]
  )

  const wrapProvider = (children: React.ReactNode) => (
    <Context.Provider value={providerValue}>{children}</Context.Provider>
  )

  return wrapProvider
}

/**
 * @public
 */
export interface IGroupProps {
  /**
   * 子节点
   */
  children: React.ReactNode
  /**
   * 样式名
   */
  className?: string
  /**
   * 样式
   */
  style?: React.CSSProperties
  /**
   * 点击之`ButtonCheckbox`后的回调函数
   */
  onChange?: (selectedIds: string[], e: React.SyntheticEvent) => void
  /**
   * 当前选中的ButtonCheckbox的一组id（受控）。
   */
  value?: string[]
  /**
   * 默认选中的ButtonCheckbox的一组id（不受控）
   */
  defaultValue?: string[]
}

function useSelected({
	defaultValue,
	value,
	onChange,
}: {
	defaultValue: IGroupProps['defaultValue'],
	value: IGroupProps['value'],
	onChange: IGroupProps['onChange']
}) {
	const [selectedIds, setSelectedIds] = useState<string[]>(defaultValue || []);
	// 当前是否是受控模式
	const isControlled = isArray(value);
	const actualValue = isControlled ? value : selectedIds
	const onSelectedIds = useCallback((ids, e) => {
		isFunction(onChange) && onChange(ids, e)
		if (!isControlled) {
			setSelectedIds(ids)
		}
	}, [onChange, isControlled])
	return [actualValue, onSelectedIds] as [string[], (selectedIds: string[], e: React.SyntheticEvent) => void]
}

/**
 * @public
 */
const Group: React.FC<IGroupProps> = ({
  children,
  className,
  onChange,
  value,
  defaultValue,
  ...restProps
}) => {
	const [selectedIds, onSelectedIds] = useSelected({
		defaultValue,
		value,
		onChange,
	})

  const wrapProvider = useGroupSelected({
    selectedIds,
    onChange: onSelectedIds,
  })

  return wrapProvider(
    <S.SGroup
      className={cs(className, 'wind-button-checkbox-group')}
      {...restProps}
    >
      {children}
    </S.SGroup>
  )
}

export default Group
