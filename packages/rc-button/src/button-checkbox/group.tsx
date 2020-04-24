import React, { useState, useMemo, useCallback } from 'react'
import cs from 'classnames'
import Context from './context'
import * as S from './styles'

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
   * 用户选择发生变化的回调
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

function useSelected({
  defaultValue,
  value,
  onChange,
}: {
  defaultValue: IGroupProps['defaultValue']
  value: IGroupProps['value']
  onChange: IGroupProps['onChange']
}) {
  const [selectedIds, setSelectedIds] = useState<string[]>(defaultValue || [])
  // 当前是否是受控模式
  const isControlled = Array.isArray(value)
  const actualValue = isControlled ? value : selectedIds
  const onSelectedIds = useCallback(
    (ids) => {
      if (onChange) {
        onChange(ids)
      }
      if (!isControlled) {
        setSelectedIds(ids)
      }
    },
    [onChange, isControlled]
  )
  return [actualValue, onSelectedIds] as [
    string[],
    (selectedIds: string[]) => void
  ]
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
