import React from 'react'
import SlidePanelGroup from './SlidePanelGroup'
import SlidePanelItem from './SlidePanelItem'
import type { ISlidePanelGroupProps } from './types/ISlidePanelGroupProps.type'
import type { ISlidePanelProps } from './types/ISlidePanelProps.type'
import type { ISlidePanelItemProps } from './types/ISlidePanelItemProps.type'

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
  popupProps,
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
    popupProps,
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
