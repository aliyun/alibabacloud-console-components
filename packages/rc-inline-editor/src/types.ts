import { OverlayProps } from '@alicloud/console-components/types/overlay'

/**
 * @public
 */
export interface IProps {
  /**
   * 修改的类型, 名字或者描述
   * @defaultValue `name`
   */
  type?: 'name' | 'desc'
  /**
   * 子节点
   * @defaultValue `-`
   */
  children?: string
  /**
   * 提交之后的回调函数
   */
  onSubmit?: (value: string) => void
  /**
   * 触发修改的类型
   * @defaultValue `icon`
   */
  shape?: 'icon' | 'text'
  /**
   * 弹窗关闭的回调
   */
  onClose?: () => void
  /**
   * 文案最小长度
   * @defaultValue `2`
   */
  minLength?: number
  /**
   * 文案最大长度
   * @defaultValue 当type === 'name' 时为128，当type === 'desc' 时为256
   */
  maxLength?: number
  /**
   * 展示文案的长度
   * @defaultValue `200`
   */
  length?: number
  /**
   * 弹窗确认按钮文案
   * @defaultValue `确定`
   */
  okText?: string
  /**
   * 弹窗取消按钮文案
   * @defaultValue `取消`
   */
  cancelText?: string
  /**
   * 编辑文案，在shape为text时生效
   * @defaultValue `编辑`
   */
  editText?: string
  /**
   * 校验的表达式
   * @defaultValue 当type==='name'时，`/^[a-zA-Z\\p{L}][a-zA-Z0-9_\\p{L}\\-]*?$/`。当type==='desc'时，`/^(?!(http(s)?://)).*$/`
   */
  validateRegExp?: any
  /**
   * 提示格式的 Message
   * @defaultValue 长度为`{min}-{max}`个字符，以大小字母或中文开头，可包含数字，"_"或"-"
   */
  tipFormatText?: string
  /**
   * 输入为空的时候的提示文案
   * @defaultValue `不能为空`
   */
  noEmptyText?: string
  /**
   * 格式错误的文案
   * @defaultValue `格式不合法`
   */
  invalidText?: string
  /**
   * 弹层的props，透传给弹层Overlay。<br />
   * 继承基础组件`Overlay`的API
   */
  overlayProps?: OverlayProps
  /**
   * @internal
   */
  intl?: (message: string, args?: any) => string
}
