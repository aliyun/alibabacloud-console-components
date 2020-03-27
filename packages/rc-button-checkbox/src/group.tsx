import React, { useState, useMemo, useCallback } from 'react'
import cs from 'classnames'
import { isFunction } from 'lodash'
import Context from './context'
import * as S from './style'

function useGroupSelected({
  selectedIds,
  onChange,
}: {
  selectedIds: string[]
  onChange: (ids: string[]) => void
}) {
  const onSelect = useCallback(
    (id: string) => {
      const nextSelecteds = ((ids) => {
        // 没有则添加
        if (!ids.includes(id)) {
          return [...ids, id]
        }
        // 有则移除
        return ids.filter((v) => v !== id)
      })(selectedIds)

      onChange(nextSelecteds)
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
  onChange?: (selectedIds: string[]) => void
  /**
   * 当前选中的ButtonCheckbox的一组id（受控）。
   */
  value?: string[]
  /**
   * 默认选中的ButtonCheckbox的一组id（不受控）
   */
  defaultValue?: string[]
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
  const initValue = value || defaultValue || []

  const [selectedIds, setSelectedIds] = useState<string[]>(initValue)

  const handleChange = useCallback(
    (ids: string[]) => {
      if (isFunction(onChange)) onChange(ids)
      if (!value) {
        setSelectedIds(ids)
      }
    },
    [onChange, value]
  )

  const actualSelectedIds = useMemo(() => value || selectedIds, [
    selectedIds,
    value,
  ])

  const wrapProvider = useGroupSelected({
    selectedIds: actualSelectedIds,
    onChange: handleChange,
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
