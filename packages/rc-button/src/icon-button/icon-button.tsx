import React from 'react'
import * as PropTypes from 'prop-types'
import { ButtonProps } from '@alifd/next/types/button'
import * as S from './styles'

const propTypes = {
  icon: PropTypes.string.isRequired,
}

/**
 * @public
 */
export interface IIconButtonProps {
  /**
   * 需要展示的基础组件Icon的type
   */
  icon: string
  /**
   * 设置IconButton的样式名
   */
  className?: string
  /**
   * 设置IconButton的样式名
   */
  style?: React.CSSProperties
}

/**
 * @public
 */
const IconButton: React.FC<IIconButtonProps & ButtonProps> = (props) => {
  const { icon, children, ...restProps } = props
  const hasRestChildren = typeof children !== 'undefined' && children !== null

  return (
    <S.SIconButton {...restProps} reset={hasRestChildren}>
      {icon && <S.SIcon type={icon} />}
      {children}
    </S.SIconButton>
  )
}

IconButton.propTypes = propTypes

export default IconButton
