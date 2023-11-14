import React, { useMemo } from 'react'
import { PopupProps } from '@alicloud/console-components/types/overlay'
import Truncate, { ITruncateProps } from '@alicloud/console-components-truncate'
import cs from 'classnames'
import * as S from './style'

/**
 * @public
 */
export type truncateProps = Partial<ITruncateProps>

/**
 * @public
 */
export interface IBadgeProps {
  /**
   * 徽标展示的内容
   * @defaultValue `HOT`
   */
  content?: string
  /**
   * balloon展示的位置, 可选值为`top` | `right`。<br />
   * 组件内部的气泡根据传入的`position`来进行定位。<br />
   * @defaultValue `top`
   */
  position?: 'top' | 'right'
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
   * 继承基础组件Popup的API，透传给弹层气泡Popup。<br />
   * 注意：气泡根据position来进行定位。align属性将失效。
   */
  popupProps?: PopupProps
  /**
   * 是否使用文字截断
   */
  useTruncate?: boolean
  /**
   * 与userTruncate配合使用，继承Truncate组件的API
   */
  truncateProps?: truncateProps
}

/**
 * @public
 */
const Badge: React.FC<IBadgeProps> = ({
  content = 'HOT',
  position = 'top',
  children,
  className,
  style,
  popupProps = {},
  useTruncate = false,
  truncateProps = {},
}) => {
  const { offset, ...restProps } = popupProps

  const actualAlign = useMemo(() => (position === 'top' ? 'bc tr' : 'cl cr'), [
    position,
  ])

  const actualOffset = useMemo(() => {
    if (Array.isArray(offset) && offset.length > 0) {
      return offset
    }
    return position === 'top' ? [0, -4] : [4, 0]
  }, [offset, position])

  const actualTrigger = useMemo(() => {
    return useTruncate ? (
      <Truncate {...truncateProps}>{children}</Truncate>
    ) : (
      <S.STrigger className="rc-badge-trigger">{children}</S.STrigger>
    )
  }, [useTruncate, truncateProps, children])

  return (
    <S.SPopup
      {...restProps}
      animation={false}
      trigger={actualTrigger}
      visible
      offset={actualOffset}
      align={actualAlign}
    >
      <S.SInner
        className={cs(className, `badge-balloon-${position}`)}
        style={style}
      >
        {content}
      </S.SInner>
    </S.SPopup>
  )
}

export default Badge
