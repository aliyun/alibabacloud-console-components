import { DialogProps } from '@alifd/next/types/dialog'
import { MessageProps } from '@alifd/next/types/message'

/**
 * @public
 */
export interface IConfirmProps {
  /**
   * 对话框的信息类型，会影响弹窗上的图标
   */
  type?: 'success' | 'warning' | 'error' | 'notice' | 'help' | 'loading'
  /**
   * 对话框的标题
   */
  title: React.ReactNode
  /**
   * 对话框的信息内容
   */
  content?: React.ReactNode
  /**
   * 用户点击对话框确认按钮的回调
   */
  onConfirm?: () => void
  /**
   * 用户点击对话框取消按钮的回调
   */
  onCancel?: () => void
  /**
   * 透传给基础组件`<Dialog>`组件的props，控制弹窗的展示。其中的`onConfirm`、`onCancel`、`visible`无作用，由本组件来控制
   */
  dialogProps?: DialogProps
  /**
   * 透传给基础组件`<Message>`组件的props，控制信息的内容。其中的`type`、`title`、`content`无作用，由本组件来控制
   */
  messageProps?: MessageProps
  /**
   * 用来激活对话框的trigger，点击以后会打开对话框。一般是一个button
   */
  children?: React.ReactNode
}
