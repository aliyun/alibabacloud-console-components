import type { ButtonProps } from '@alicloud/console-components/types/button'

export interface ISlidePanelProps {
  /* ----------------Copyed from ISlidePanelItemProps---------------- */
  /**
   * 面板的内容。
   */
  children: React.ReactNode
  /**
   * 位于页面的位置
   */
  placement?: 'right' | 'bottom'
  /**
   * 面板处于激活状态时的正常宽度。
   */
  width?: 'tiny' | 'small' | 'medium' | 'large' | number | string
  /**
   * header title的内容。
   */
  title?: React.ReactNode
  /**
   * header的额外内容，展示在title的右侧。
   */
  headerExtra?: React.ReactNode
  /**
   * header的关闭按钮的点击事件。如果没有传入此事件处理函数，则不展示关闭按钮。
   */
  onClose?: () => void
  /**
   * footer取消按钮的点击事件。如果没有传入此事件处理函数，则不展示取消按钮。
   */
  onCancel?: () => void
  /**
   * footer取消按钮文字。
   */
  cancelText?: React.ReactNode
  /**
   * 自定义footer取消按钮的props，比如disabled
   */
  cancelProps?: ButtonProps
  /**
   * footer确认按钮的点击事件。如果没有传入此事件处理函数，则不展示确认按钮。
   */
  onOk?: () => void
  /**
   * footer确认按钮文字。
   */
  okText?: React.ReactNode
  /**
   * 自定义footer确认按钮的props，比如disabled
   */
  okProps?: ButtonProps
  /**
   * footer确认按钮是否展示加载中状态。加载中的按钮不可点击。
   */
  isProcessing?: boolean
  /**
   * footer确认按钮处于加载中状态时的文字。
   */
  processingText?: React.ReactNode
  /**
   * 自定义整个footer的内容。
   */
  customFooter?: React.ReactNode

  /* ----------------Copyed from ISlidePanelGroupProps---------------- */

  /**
   * 自定义整个SlidePanelGroup的wrapper div的类名。
   */
  className?: string
  /**
   * 是否在`isShowing===true`时展示背景蒙板。
   */
  hasMask?: boolean
  /**
   * 用户点击背景蒙板。大部分情况下，开发者想要在这个事件处理函数中设置`props.isShowing`为`false`。已废弃，请使用 onVisibleChange。
   * @deprecated 请使用 onVisibleChange
   */
  onMaskClick?: () => void
  /**
   * 弹层显示或隐藏时触发的回调函数，透传给Overlay.Popup
   */
  onVisibleChange?: (visible: boolean, type: string, e: object) => void
  /**
   * 控制整个SlidePanelGroup的滑入、滑出。
   */
  isShowing?: boolean
  /**
   * 滑动组件离视口顶部的距离。比如，开发者不希望SlidePanel滑出时挡住顶栏，那么可以将`props.top`设置为顶栏的高度。
   */
  top?: number | string
  /**
   * 面板的滑出、滑入动画完成了。
   */
  onSlideCompleted?: () => void
  /**
   * 渲染组件的容器，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点
   */
  container?: any
  /**
   * 透传给Popup的属性
   */
  popupProps?: any
}
