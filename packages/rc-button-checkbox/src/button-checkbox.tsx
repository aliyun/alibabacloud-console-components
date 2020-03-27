import React, { useContext, useCallback } from 'react'
import { ButtonProps } from '@alicloud/console-components/types/button'
import { isFunction } from 'lodash'
import cs from 'classnames'
import context from './context'
import * as S from './style'

/**
 * @public
 */
export interface IButtonCheckboxProps {
  /**
   * 作为一组ButtonCheckbox中的唯一标识
   */
  id: string
  /**
   * 是否禁用
   * @defaultValue `false`
   */
  disabled?: boolean
  /**
   * 点击ButtonCheckbox执行的回调函数
   */
  onClick?: (id: string) => void
  /**
   * 设置ButtonCheckbox的样式名
   */
  className?: string
  /**
   * 设置ButtonCheckbox的样式
   */
  style?: React.CSSProperties
}

/**
 * @public
 */
const ButtonCheckbox: React.FC<IButtonCheckboxProps & ButtonProps> = ({
  id,
  disabled = false,
  onClick,
  text,
  size = 'medium',
  className,
  ...restProps
}) => {
  const { selectedIds, onSelect } = useContext(context)

  const handleClick = useCallback(() => {
    if (isFunction(onClick)) onClick(id)
    onSelect(id)
  }, [id, onClick, onSelect])

  return (
    <S.SButton
      disabled={disabled}
      className={cs('button-checkbox', className, {
        selected: selectedIds.includes(id),
        normal: !disabled && !text,
        disabled,
        text,
      })}
      size={size}
      onClick={handleClick}
      text={text}
      {...restProps}
      type="normal"
    />
  )
}

export default ButtonCheckbox
