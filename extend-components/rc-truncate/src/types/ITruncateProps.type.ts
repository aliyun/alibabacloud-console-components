import React from 'react'
import { BalloonProps } from '@alicloud/console-components/types/balloon'
import { AlignType } from '../constants'

/**
 * @public
 */

export interface ITruncateProps {
  /**
   * 需要被截断的内容<br/>
   * 如果想要通过字符长度来截断，则children必须为string；<br/>
   * 如果想要通过宽度来截断，则children可以为任意可渲染元素；
   */
  children: string | React.ReactNode
  /**
   * 如何判断是否需要截断：<br/>
   * 'length': 内容字符串长度是否大于`threshold`
   * 'width': 内容渲染后的宽度是否大于`threshold`
   * @defaultValue 'length'
   */
  type?: 'length' | 'width'
  /**
   * 截断临界值：<br/>
   * `type` 为 'length' 时，threshold限制字符串长度，必须传入number类型。<br/>
   * `type` 为 'width' 时，threshold限制内容渲染后的宽度，可以传入number或`'auto'`。<br/>
   * 其中`'auto'`表示截断宽度自动设置为容器元素的宽度。尤其适用于flex布局下，截断宽度由剩余宽度决定的场景。
   * @defaultValue 30
   */
  threshold?: number | 'auto'
  /**
   * 在被截断时，是否使用气泡展示完整内容
   * @defaultValue true
   */
  showTooltip?: boolean
  /**
   * 气泡对齐方式，可选值参见 Balloon（Tooltip）组件文档
   * @defaultValue 'r'(右)
   */
  align?: AlignType
  /**
   * 省略符号
   */
  omission?: React.ReactNode
  /**
   * tooltip的最大宽度限制，`showTooltip`为true时才有效
   */
  tooltipMaxWidth?: number
  /**
   * 容器的类名
   */
  className?: string
  /**
   * 容器的样式
   */
  style?: React.CSSProperties

  /**
   * 当tooltip展示时，设置弹层组件style，透传给Popup
   */
  popupStyle?: React.CSSProperties
  /**
   * 当tooltip展示时，设置弹层组件的className，透传给Popup
   */
  popupClassName?: string
  /**
   * 完全控制tooltip的props。比如指定`popupContainer`。<br/>
   * `BalloonProps`的类型见Balloon组件文档。
   */
  patchPopupProps?: (originalProps: BalloonProps) => BalloonProps
  /**
   * 【极少使用】如果你绕过React的更新机制来更新子节点（比如直接用js操作DOM，或者加载图片造成子节点变宽），我们无法及时检查子节点是否需要截断。这种情况下，你需要通过这个prop来获取updater来手动调用。见"non-string"这个Demo。<br/>
   * 仅当`type` 为 'width' 时有效。
   */
  updaterRef?: React.MutableRefObject<(() => void) | null>
  /**
   * 【极少使用】方便父组件知道当前是否发生了截断，`type==='width'`时可用（`type==='length'`时你自己就很容易判断是否会截断）。<br/>
   * 慎用，避免`截断状态->你扩大父容器->非截断状态->你缩小父容器->截断状态->...`这样的无限循环。
   */
  isOverflowChange?: (newIsOverflow: boolean) => void
  /**
   * 【已废弃】，请使用`threshold`
   * @deprecated 此prop用于兼容旧的API。以后请使用`threshold`
   * @internal
   */
  value?: number | string
  /**
   * 在被截断时，是否使用气泡展示完整内容
   * <br /> 【已废弃】，请使用`showTooltip`
   * @defaultValue 'enable'
   * @deprecated 此prop用于兼容旧的API。以后请使用`showTooltip`
   * @internal
   */
  tooltip?: boolean | string
}
