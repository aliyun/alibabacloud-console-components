import React from 'react'
import ReactDOM from 'react-dom'
import ConfigProvider from '../config-provider'
import cls from 'classnames'
import Button from '../button'
import Input from '../input'
import Switch from '../switch'
import Balloon from '../balloon'
import Icon from '../icon'
import { events, KEYCODE } from '../utils'

const { Tooltip } = Balloon

export interface IModalProps {
  prefix?: string;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactChild;
  /**
   * 是否默认可见，非受控
   */
  defaultVisible?: boolean
  /**
   * 是否可见，受控
   */
  visible?: boolean
  /**
   * 点击关闭按钮回调
   */
  onClose?: () => void
  /**
   * 点击返回按钮回调
   */
  onBack?: () => void
  /**
   * 是否显示标题前的返回
   */
  hasArrow?: boolean
  /**
   * Modal标题
   */
  title?: string
  /**
   * Modal标题位置
   */
  titleAlign?: 'left' | 'center'
  /**
   * Modal标题是否可编辑
   */
  titleEditable?: boolean
  /**
   * 标题编辑图标提示文案
   */
  titleEditTooltip?: string
  /**
   * 可编辑时标题输入框的宽度
   */
  titleInputWidth?: string | number
  /**
   * 标题编辑回调
   */
  onEditTitleChange?: (title: string) => void
  /**
   * Modal描述
   */
  description?: string
  /**
   * 操作区
   */
  operations?: React.ReactNode
  /**
   * 侧边栏内容
   */
  sideDrawer?: React.ReactNode
  /**
   * 侧边栏内容宽度
   */
  sideDrawerWidth?: number
  /**
   * 侧边栏切换显示Switch前label
   */
  sideDrawerLabel?: string
  /**
   * 侧边栏内容是否可见
   */
  sideDrawerVisible?: boolean
  /**
   * 侧边栏内容切换可见回调
   */
  onSideDrawerVisibleChange?: (sideDrawerVisible: boolean) => void
  /**
   * 是否支持 esc 按键关闭弹层
   */
  canCloseByEsc?: boolean
}

class Modal extends React.Component<
  IModalProps,
  { visible: boolean; isEditing: boolean }
> {
  static defaultProps = {
    prefix: 'next-',
    sideDrawerWidth: 400,
    titleEditTooltip: '点击即可编辑',
    onClose: () => {},
    onBack: () => {},
    onSideDrawerVisibleChange: () => {},
    onEditTitleChange: () => {},
    canCloseByEsc: true
  }

  container: HTMLDivElement | null

  _keydownEvents: any

  constructor(props: IModalProps) {
    super(props)
    this.state = {
      visible:
        'visible' in props ? props.visible : props.defaultVisible || false,
      isEditing: false
    }
    this.container = document.createElement('div')
  }


  componentDidMount() {
    document.body.appendChild(this.container)
    if (this.state.visible) {
      document.body.classList.add('next-modal-open')
    }
    this.addDocumentEvents()
  }

  addDocumentEvents = () => {
    if (this.props.canCloseByEsc) {
      this._keydownEvents = events.on(
        document,
        'keydown',
        this.handleDocumentKeyDown
      )
    }
  }

  handleDocumentKeyDown = (e: React.KeyboardEvent) => {
    if (this.state.visible && e.keyCode === KEYCODE.ESC) {
      this.setState({
        visible: false
      })
      this.onClose()
    }
  }

  removeDocumentEvents = () => {
    if (this._keydownEvents) {
      this._keydownEvents.off()
      this._keydownEvents = null
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps: IModalProps) {
    if (nextProps.visible !== this.props.visible) {
      this.setState({
        visible: nextProps.visible
      })
    }
  }

  componentDidUpdate() {
    if (this.state.visible === false) {
      document.body.classList.remove('next-modal-open')
    }
  }

  componentWillUnmount() {
    document.body.removeChild(this.container)
    document.body.classList.remove('next-modal-open')
    this.container = null
    this.removeDocumentEvents()
  }

  onSideDrawerVisibleChange = (checked: boolean) => {
    this.props.onSideDrawerVisibleChange(checked)
  }

  onEditTitleChange = (value: string) => {
    this.props.onEditTitleChange(value)
  }

  onEnterEditing = () => {
    this.setState({
      isEditing: true
    })
  }

  onLeaveEditing = () => {
    this.setState({
      isEditing: false
    })
  }

  onClose = () => {
    const { onClose } = this.props
    if (!('visible' in this.props)) {
      this.setState({
        visible: false
      })
    }
    onClose()
  }

  renderTitle = () => {
    const {
      prefix,
      title,
      titleEditable,
      titleEditTooltip,
      titleInputWidth,
      hasArrow = false,
      titleAlign = 'left'
    } = this.props
    // const refElement = ConfigProvider.useRefElement()
    // const theme = window.getComputedStyle?.(refElement).getPropertyValue('--alicloudfe-components-theme') ?? ''
    // console.log(theme);
    
    const { isEditing } = this.state
    const editTitle = isEditing ? (
      <Input
        autoFocus
        value={title}
        onChange={this.onEditTitleChange}
        onBlur={this.onLeaveEditing}
        onPressEnter={this.onLeaveEditing}
        style={{ width: titleInputWidth }}
      />
    ) : (
      <span>
        <span className="edit-title">{title}</span>
        <Tooltip
          trigger={
            <Button
              className={`${prefix}modal-edit-icon`}
              type="secondary"
              onClick={this.onEnterEditing}
              size="small"
              text
            >
              {/* <Icon type="pencil" /> */}
              <Icon type="edit" />
            </Button>
          }
          align="r"
        >
          {titleEditTooltip}
        </Tooltip>
      </span>
    )
    return (
      <>
        <div className={`${prefix}modal-title-box`}>
          {this.props.hasArrow && (
            <Icon
              type="arrow-left"
              className={`${prefix}modal-title-icon`}
              onClick={() => {
                const { onBack } = this.props
                onBack?.()
              }}
            />
          )}{' '}
          {titleAlign === 'left'  && (
            <div className={`${prefix}modal-title`}>
              {titleEditable ? editTitle : title}
            </div>
          )}
        </div>
        {titleAlign === 'center' && (
          <div className={`${prefix}modal-title ${prefix}modal-title-center`}>
            {titleEditable ? editTitle : title}
          </div>
        )}
      </>
    )
  }

  renderHeader = () => {
    const {
      prefix,
      description,
      operations,
      sideDrawer,
      sideDrawerLabel,
      sideDrawerVisible
    } = this.props
    const title = this.renderTitle()
    return (
      <div className={`${prefix}modal-header`}>
        <div className="left-part">
          {title}
          <div className={`${prefix}modal-description`}>{description}</div>
        </div>
        <div className="right-part">
          <div className={`${prefix}modal-operations`}>{operations}</div>
          {sideDrawer ? (
            <div className={`${prefix}modal-side-drawer-switch`}>
              <span className={`${prefix}modal-side-drawer-switch-label`}>
                {sideDrawerLabel}
              </span>
              <Switch
                size="small"
                checked={sideDrawerVisible}
                onChange={this.onSideDrawerVisibleChange}
              />
            </div>
          ) : null}
          <Button
            className={`${prefix}modal-close`}
            onClick={this.onClose}
            text
          >
            {/* <Icon type="remove" /> */}
            <Icon type="close" />
          </Button>
        </div>
      </div>
    )
  }

  renderBody = () => {
    const { prefix, sideDrawer, sideDrawerVisible, sideDrawerWidth, children } =
      this.props
    return (
      <div className={`${prefix}modal-body`}>
        <div className={`${prefix}modal-children`}>{children}</div>
        {sideDrawer ? (
          <div
            className={cls({
              [`${prefix}modal-side-drawer`]: true,
              [`${prefix}modal-side-drawer-visible`]: sideDrawerVisible
            })}
            style={{
              width: sideDrawerVisible ? sideDrawerWidth : 0
            }}
          >
            {sideDrawer}
          </div>
        ) : null}
      </div>
    )
  }

  renderModal = () => {
    const { prefix, className, style } = this.props
    const header = this.renderHeader()
    const body = this.renderBody()
    return (
      <div
        className={cls({
          [`${prefix}modal`]: true,
          [className]: !!className
        })}
        style={style}
      >
        {header}
        {body}
      </div>
    )
  }

  render() {
    const { visible } = this.state
    if (visible) {
      return ReactDOM.createPortal(this.renderModal(), this.container)
    }
    return null
  }
}

export default ConfigProvider.config(Modal, 'Modal')
