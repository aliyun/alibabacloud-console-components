import React, { useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider, Drawer as NextDrawer } from '@alifd/next'
import { withThemeClass } from '../utils/withThemeClass'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { default as Button } from '../button'
import cls from 'classnames'
import { useCssVar } from '../utils/useCssVar'
import { ButtonProps } from '@alifd/next/types/button'
import zhCN from '../locale/zh-cn'

type NextDrawerProps = React.ComponentProps<typeof NextDrawer>

interface IDrawer {
  /**
   * 点击确定按钮时的回调。有此参数就默认显示确定按钮
   */
  onOk?: (event: React.MouseEvent) => void
  /**
   * 点击取消按钮时的回调。有此参数就默认显示取消按钮
   */
  onCancel?: (event: React.MouseEvent) => void
  /**
   * 完全自定义底部操作栏
   */
  renderFooter?: React.ReactNode
  /**
   * 是否有底部分割线
   */
  hasFooterLine?: boolean
  /**
   * 底部按钮位置
   */
  footerAlign?: 'left' | 'center' | 'right'
  /**
   * 取消按钮的文字
   */
  cancelText?: React.ReactNode
  /**
   * 确定按钮的文字
   */
  okText?: React.ReactNode
  /**
   * 透传给取消按钮的Props
   */
  cancelBtnProps?: ButtonProps
  /**
   * 透传给确定按钮的Props
   */
  okBtnProps?: ButtonProps
  /**
   * 给footer增加className
   */
  footerClass?: string
  /**
   * 抽屉大小，也可以直接传入width自定义
   */
  size?: 'mini' | 'small' | 'medium' | 'large'
  /**
   * 引用方法
   */
  actionRef?: (
    show: () => void,
    close: () => void,
    setOKLoading: (loading: boolean) => void,
    setCancelLoading: (loading: boolean) => void
  ) => void

  className?: string
}

export type DrawerProps = NextDrawerProps & IDrawer

export type quickShowDrawerProps = Omit<DrawerProps, 'onOk' | 'onCancel'> & {
  /**
   * 点击确定按钮时的回调。有此参数就默认显示确定按钮
   */
  onOk?: (event: React.MouseEvent) => boolean | Promise<any>
  /**
   * 点击取消按钮时的回调。有此参数就默认显示取消按钮
   */
  onCancel?: (event: React.MouseEvent) => boolean | Promise<any>
  /**
   * 抽屉内容
   */
  content?: React.ReactNode
}

export type QuickShowDrawerRet = {
  hide: () => void
  show: () => void
}

const Drawer: React.FC<DrawerProps> & {
  show: (config: quickShowDrawerProps) => QuickShowDrawerRet
} = withThemeClass(
  React.forwardRef((props: DrawerProps, ref: any) => {
    const {
      visible = false,
      onOk,
      onCancel,
      renderFooter,
      hasFooterLine,
      footerAlign,
      children,
      locale = zhCN.Drawer,
      okText = locale.ok,
      cancelText = locale.cancel,
      cancelBtnProps = {},
      okBtnProps = {},
      footerClass,
      size = 'mini',
      width,
      className,
      actionRef,
      ...filterProps
    } = props
    // console.log('locale', locale)
    const [customVisible, setCustomVisible] = useState<boolean>(visible)

    const [okLoadingState, setOkLoadingState] = useState<boolean>(false)
    const [cancelLoadingState, setCancelLoadingState] = useState<boolean>(false)
    const customRef = useRef(null)
    const theme = useCssVar('--alicloudfe-components-theme').trim()

    // 传递指定显示/隐藏方法
    const close = () => {
      setCustomVisible(false)
    }
    const show = () => {
      setCustomVisible(true)
    }
    const setOKLoading = (loading: boolean) => {
      setOkLoadingState(loading)
    }
    const setCancelLoading = (loading: boolean) => {
      setCancelLoading(loading)
    }
    actionRef?.(show, close, setOKLoading, setCancelLoading)

    // 超出一屏 设置 footer 阴影
    const setFooterShadow = (iRef: any) => {
      if (iRef?.current && theme !== 'wind' && !theme.startsWith('xconsole')) {
        const drawerDom = ReactDOM.findDOMNode(iRef.current)
        const drawerFirstDom =
          drawerDom?.getElementsByClassName('next-drawer')?.[0]?.firstChild
        if (drawerFirstDom) {
          drawerFirstDom.style.overflow = 'hidden'
        }
        const drawerBodyDom =
          drawerDom?.getElementsByClassName('next-drawer-body')?.[0]

        if (drawerBodyDom) {
          drawerBodyDom.style.overflow = 'auto'
        }
        const drawerFooterDom =
          drawerDom?.getElementsByClassName('next-drawer-footer')?.[0]
        if (drawerFooterDom) {
          if (drawerBodyDom?.clientHeight < drawerBodyDom?.scrollHeight) {
            drawerFooterDom.classList.add('next-drawer-footer-has-shadow')
          } else {
            drawerFooterDom.classList.remove('next-drawer-footer-has-shadow')
          }
        }
      }
    }

    let observer = null;
    // 绑定监听器
    useEffect(() => {
      setFooterShadow(ref ?? customRef);
      const drawerDom = ReactDOM.findDOMNode((ref ?? customRef).current)
      const drawerBodyDom =
        drawerDom?.getElementsByClassName('next-drawer-body')?.[0]
      if (drawerBodyDom && !observer) {
        observer = new MutationObserver(() => {
          setFooterShadow(ref ?? customRef);
        })
        observer.observe(drawerBodyDom, {
          attributes: true,
          attributeFilter: ['style'],
          attributeOldValue: true,
          childList: true,
          subtree: true
        })
      }
      // 销毁
      return () => {
        if (observer) {
          observer.disconnect()
          observer.takeRecords()
          observer = null
        }
      }
    })

    useEffect(() => {
      setCustomVisible(visible)
    }, [visible])

    const drawerCustomClassName = cls({
      'next-drawer-has-footer': onOk || onCancel || renderFooter,
      [className]: !!className
    })

    const drawerFooterClassName = cls({
      'next-drawer-footer': true,
      'next-drawer-footer-line': hasFooterLine,
      'next-drawer-footer-right': footerAlign === 'right',
      'next-drawer-footer-left': footerAlign === 'left',
      'next-drawer-footer-center': footerAlign === 'center',
      [footerClass]: !!footerClass
    })

    const getCustomWidth = (): string | number => {
      if (width) {
        return width
      }
      if (size) {
        switch (size) {
          case 'mini':
            return 400
          case 'small':
            return 600
          case 'medium':
            return 800
          case 'large':
            return 1200
          default:
            return 400
        }
      }
    }

    return (
      <NextDrawer
        {...filterProps}
        ref={ref ? ref : customRef}
        visible={customVisible}
        width={getCustomWidth()}
        className={drawerCustomClassName}
      >
        {children}
        {(onOk || onCancel || renderFooter) && (
          <div className={drawerFooterClassName}>
            {onOk && !renderFooter && (
              <Button
                type="primary"
                onClick={onOk}
                style={{ marginRight: 8 }}
                loading={okLoadingState}
                {...okBtnProps}
              >
                {okText}
              </Button>
            )}
            {onCancel && !renderFooter && (
              <Button
                onClick={onCancel}
                loading={cancelLoadingState}
                {...cancelBtnProps}
              >
                {cancelText}
              </Button>
            )}
            {renderFooter && renderFooter}
          </div>
        )}
      </NextDrawer>
    )
  })
) as any

// 快捷调用
const show = (props: quickShowDrawerProps): QuickShowDrawerRet => {
  const { onOk, onCancel, onClose, content, ...others } = props
  let customOnOK: DrawerProps['onOk']
  let customOnCancel: DrawerProps['onCancel']

  let actionRef: any

  // 合并 customOnOK。 如果返回值为 true 自动关闭 Drawer
  customOnOK = (event: React.MouseEvent) => {
    if (onOk) {
      const result = onOk?.(event)
      if (result instanceof Promise) {
        actionRef?.setOKLoading?.(true)
        result
          .then((state) => {
            if (state !== false) {
              actionRef?.setOKLoading?.(false)
              actionRef?.close?.()
              return
            }
            actionRef?.setOKLoading?.(false)
          })
          .catch(() => {})
      }
      if (typeof result === 'boolean' && result) {
        actionRef?.close?.()
        return
      }
    } else {
      actionRef?.close?.()
    }
  }

  customOnCancel = (event: React.MouseEvent) => {
    if (onCancel) {
      const result = onCancel?.(event)
      if (result instanceof Promise) {
        actionRef?.setCancelLoading?.(true)
        result
          .then((state) => {
            if (state !== false) {
              actionRef?.setCancelLoading?.(false)
              actionRef?.close?.()
            }
            return
          })
          .catch(() => {})
      }
      if (typeof result === 'boolean' && result) {
        actionRef?.close?.()
        return
      }
    } else {
      actionRef?.close?.()
    }
  }

  const ConfigModal = ConfigProvider.config(Drawer, { componentName: 'Drawer' })

  const container = document.createElement('div')
  container.setAttribute('id', 'next-quick-drawer')
  document.body.appendChild(container)

  // @ts-ignore
  const newContext = ConfigProvider.getContext()
  ReactDOM.render(
    <ConfigProvider {...newContext}>
      <ConfigModal
        {...others}
        visible={true}
        actionRef={(show, close, setOKLoading, setCancelLoading) => {
          actionRef = {
            show,
            close,
            setOKLoading,
            setCancelLoading
          }
        }}
        onOk={customOnOK}
        onCancel={customOnCancel}
        onClose={
          onClose ??
          (() => {
            actionRef?.close?.()
          })
        }
      >
        {content}
      </ConfigModal>
    </ConfigProvider>,
    container
  )
  return {
    hide: () => {
      actionRef?.close?.()
    },
    show: () => {
      actionRef?.show?.()
    }
  }
}

hoistNonReactStatics(Drawer, NextDrawer)

// @ts-ignore
Drawer.displayName = NextDrawer.displayName

Drawer.show = show

export default Drawer
