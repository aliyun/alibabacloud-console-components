import React from 'react'
import SlidePanelGroup, { ISlidePanelGroupProps } from './SlidePanelGroup'
import SlidePanelItem, { ISlidePanelItemProps } from './SlidePanelItem'

/* eslint-disable react/prop-types */

/**
 * @public
 */
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
   * footer确认按钮的点击事件。如果没有传入此事件处理函数，则不展示确认按钮。
   */
  onOk?: () => void
  /**
   * footer确认按钮文字。
   */
  okText?: React.ReactNode
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
   * 是否在`isShowing===true`时展示背景蒙板。
   */
  hasMask?: boolean
  /**
   * 用户点击背景蒙板。大部分情况下，开发者想要在这个事件处理函数中设置`props.isShowing`为`false`。
   */
  onMaskClick?: () => void
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
}

/**
 * 基于SlidePanelGroup和SlidePanelItem的简单封装，用于**只展示一个panel**的情况(其实这应该符合大部分情况)。
 * 如果要展示多个panel，请使用SlidePanelGroup和SlidePanelItem。
 * @public
 */
const SlidePanel: React.FC<ISlidePanelProps> = ({
  children,
  width,
  placement,
  title,
  headerExtra,
  onClose,
  onCancel,
  cancelText,
  onOk,
  okText,
  isProcessing,
  processingText,
  customFooter,
  hasMask,
  onMaskClick,
  onSlideCompleted,
  isShowing,
  top,
  container,
}) => {
  const slidePanelGroupProps: ISlidePanelGroupProps = {
    isShowing,
    activeId: '__SlidePanelId__',
    hasMask,
    onMaskClick,
    onSlideCompleted,
    top,
    container,
    placement,
  }
  const slidePanelItemProps: ISlidePanelItemProps = {
    id: '__SlidePanelId__',
    children,
    width,
    title,
    headerExtra,
    onClose,
    onCancel,
    cancelText,
    onOk,
    okText,
    isProcessing,
    processingText,
    customFooter,
    placement,
  }
  checkPanelShouldBeClosable(slidePanelGroupProps, slidePanelItemProps)
  return (
    <SlidePanelGroup {...slidePanelGroupProps}>
      <SlidePanelItem {...slidePanelItemProps} />
    </SlidePanelGroup>
  )
}

export default SlidePanel

function checkPanelShouldBeClosable(
  slidePanelGroupProps: ISlidePanelGroupProps,
  slidePanelItemProps: ISlidePanelItemProps
) {
  if (
    !slidePanelGroupProps.onMaskClick &&
    !slidePanelItemProps.onClose &&
    !slidePanelItemProps.onCancel
  ) {
    console.warn(
      `All onMaskClick, onClose and onCancel are not enabled. User is not able to close this SlidePanel. This will lead to bad user experience.`
    )
  }
}
