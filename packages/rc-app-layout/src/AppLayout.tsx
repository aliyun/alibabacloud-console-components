import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Nav from './Nav'
import * as S from './styles'

/**
 * @public
 */
export interface IAppLayoutProps {
  /**
   * 定义左侧导航栏
   */
  nav?: React.ReactNode
  /**
   * 左侧导航栏是否可以被折叠。它将决定折叠按钮是否显示
   */
  navCollapsible?: boolean
  /**
   * 左侧导航栏的折叠状态，设置该属性让该组件成为完全受控的组件
   */
  navCollapsed?: boolean
  /**
   * 在非受控模式下，左侧导航栏的默认折叠状态
   */
  defaultNavCollapsed?: boolean
  /**
   * 左侧导航栏折叠按钮被点击的回调
   */
  onNavCollapseTriggerClick?: (
    currentCollapsed: boolean,
    event: React.MouseEvent
  ) => void
  /**
   * 调整AppLayout的高度。AppLayout高度计算公式：`calc(100vh - adjustHeight px)`。详见文档的【adjustHeight: 布局高度的调整】小节
   * @defaultValue `'consoleBaseTopbarRoot'`
   */
  adjustHeight?: string | number | (() => number)
  /**
   * 内容区域
   */
  children?: React.ReactNode
  /**
   * 自定义wrapper div的类名
   */
  className?: string
  /**
   * 自定义wrapper div的样式
   */
  style?: React.CSSProperties
}

/**
 * @public
 */
const AppLayout: React.FC<IAppLayoutProps> = ({
  nav,
  navCollapsible,
  navCollapsed,
  defaultNavCollapsed,
  onNavCollapseTriggerClick,
  adjustHeight = 'consoleBaseTopbarRoot',
  children,
  className,
  style,
}) => (
  <S.AppLayout
    adjustHeight={adjustHeight}
    className={classNames('wind-rc-app-layout', className)}
    style={style}
  >
    {nav && (
      <Nav
        collapsible={navCollapsible}
        collapsed={navCollapsed}
        defaultCollapsed={defaultNavCollapsed}
        onCollapseTriggerClick={onNavCollapseTriggerClick}
      >
        {nav}
      </Nav>
    )}
    <S.Content>{children}</S.Content>
  </S.AppLayout>
)

AppLayout.propTypes = {
  nav: PropTypes.node,
  navCollapsible: PropTypes.bool,
  navCollapsed: PropTypes.bool,
  defaultNavCollapsed: PropTypes.bool,
  onNavCollapseTriggerClick: PropTypes.func,
  adjustHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.func,
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
}

export default AppLayout
