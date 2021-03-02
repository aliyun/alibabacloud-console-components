export interface ISlidePanelItemProps {
  /**
   * 位于页面的位置
   */
  placement?: 'right' | 'bottom'
  /**
   * 面板的id。用于在`SlidePanelGroup`中匹配`props.activeId`。id匹配的面板处于激活状态（全宽度展示）。非激活状态的panel会有宽度坍缩，并展示`...`而不是实际内容，使用户注意力聚焦于激活状态的面板。
   */
  id: string
  /**
   * 面板的内容。
   */
  children: React.ReactNode
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
   * 如果传入该回调，则在title的左侧展示返回按钮，并且被点击时触发此回调。
   */
  onBackArrowClicked?: () => void
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
  className?: string
  /**
   * 面板之间的切换动画开始了。
   * @internal
   */
  onSwitchStarted?: () => void
  /**
   * 面板之间的切换动画取消了。
   * @internal
   */
  onSwitchCancled?: () => void
  /**
   * **面板之间的切换**动画完成了。
   */
  onSwitchCompleted?: () => void
}
