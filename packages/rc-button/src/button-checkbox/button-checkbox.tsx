import React, { useContext, useCallback, MouseEvent } from 'react'
import { ButtonProps } from '@alicloud/console-components/types/button'
import cs from 'classnames'
import context from './context'
import * as S from './styles'

/**
 * @public
 */
export interface IButtonCheckboxProps {
  /**
   * 必选，作为ButtonCheckbox的唯一标识
   */
  id: string
  /**
   * 点击ButtonCheckbox执行的回调函数
   */
  onClick?: (id: string, e: MouseEvent) => void
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
const ButtonCheckbox: React.FC<
  Omit<ButtonProps, 'onClick'> & IButtonCheckboxProps
> = ({
  id,
  disabled = false,
  onClick,
  text,
  size = 'medium',
  className,
  ...restProps
}) => {
  const { selectedIds, onSelect } = useContext(context)
  const handleClick = useCallback(
    (e: any) => {
      if (onClick) {
        onClick(id, e)
      }
      onSelect(id)
    },
    [id, onClick, onSelect]
  )

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
