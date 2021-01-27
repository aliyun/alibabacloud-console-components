import React, { useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Overlay } from '@alicloud/console-components'
import slidePanelGroupContext from '../context'
import { SPanelsWrapper, SGlobalStyle } from './style'

const { Popup } = Overlay

/**
 * @public
 */
export interface ISlidePanelGroupProps {
  /**
   * 位于页面的位置
   */
  placement?: 'right' | 'bottom'
  /**
   * 控制整个SlidePanelGroup的滑入、滑出。
   */
  isShowing?: boolean
  /**
   * 当前哪个panel处于激活状态。非激活状态的panel会有宽度坍缩，并展示`...`而不是实际内容，使用户注意力聚焦于激活状态的面板。
   */
  activeId?: string
  /**
   * 滑动组件离视口顶部的距离。比如，开发者不希望SlidePanel滑出时挡住顶栏，那么可以将`props.top`设置为顶栏的高度。
   */
  top?: number | string
  /**
   * 是否在`isShowing===true`时展示背景蒙板。
   */
  hasMask?: boolean
  /**
   * 自定义整个SlidePanelGroup的wrapper div的类名。
   */
  className?: string
  /**
   * 用户点击背景蒙板。大部分情况下，开发者想要在这个事件处理函数中设置`props.isShowing`为`false`。
   */
  onMaskClick?: () => void
  /**
   * children可以包含一个或多个面板。
   */
  children?: React.ReactNode
  /**
   * 用户点击切换面板。大部分情况下，开发者想要在这个事件处理函数中设置`props.activeId`为当前被点击的`id`。
   */
  onSwitchPanelItem?: (id: string) => void
  /**
   * **整个面板组**的滑出、滑入动画开始了。
   */
  onSlideStarted?: () => void
  /**
   * **整个面板组**的滑出、滑入动画被中断了。原因是动画还没完成，`isShowing`又变了。
   * @internal
   */
  onSlideCancled?: () => void
  /**
   * **整个面板组**的滑出、滑入动画完成了。
   */
  onSlideCompleted?: () => void
  /**
   * 渲染组件的容器，如果是函数需要返回 DOM 节点，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点
   */
  container?: any
  /**
   * 透传给Popup的属性
   */
  popupProps?: any
}

/**
 * 定义一组滑动面板。属于同一组的滑动面板会同时滑入、滑出。用户可以点击切换当前要展示哪个面板。
 * @public
 */
const SlidePanelGroup: React.FC<ISlidePanelGroupProps> = ({
  isShowing = false,
  activeId = '',
  top,
  hasMask = true,
  className,
  onMaskClick,
  children,
  onSwitchPanelItem,
  onSlideStarted,
  onSlideCompleted,
  container,
  placement,
  popupProps,
  ...rest
}) => {
  const ctxValue = useMemo(() => ({ activeId, onSwitchPanelItem }), [
    activeId,
    onSwitchPanelItem,
  ])

  const handleVisibleChange = (visible: boolean, type: string): void => {
    if (
      typeof onMaskClick === 'function' &&
      type === 'maskClick' &&
      visible === false
    ) {
      onMaskClick()
    }
  }

  const handleOpen = useCallback(() => {
    if (typeof onSlideStarted === 'function') {
      onSlideStarted()
    }
  }, [onSlideStarted])

  const handleCompleted = useCallback(() => {
    if (typeof onSlideCompleted === 'function') {
      onSlideCompleted()
    }
  }, [onSlideCompleted])

  const placeBottom = placement === 'bottom'

  const slidePanelWrapperProps = {
    className: classNames(
      'wind3-slide-panels',
      className,
      placeBottom ? 'placeBottom' : 'placeRight'
    ),
    isShowing,
    top,
    placeBottom,
    ...rest,
  }

  const align = placeBottom ? 'bl bl' : 'tr tr'

  return (
    <slidePanelGroupContext.Provider value={ctxValue}>
      <SGlobalStyle top={top} />
      <Popup
        align={align}
        animation={{
          in: 'slideIn',
          out: 'slideOut',
        }}
        wrapperClassName="wind-slide-panel-wrapper"
        disableScroll
        delay={0}
        afterOpen={handleCompleted}
        afterClose={handleCompleted}
        onOpen={handleOpen}
        visible={isShowing}
        hasMask={hasMask}
        container={container}
        onVisibleChange={handleVisibleChange}
        canCloseByOutSideClick={false}
        canCloseByEsc={false}
        target="viewport"
        {...popupProps}
      >
        <SPanelsWrapper {...slidePanelWrapperProps}>{children}</SPanelsWrapper>
      </Popup>
    </slidePanelGroupContext.Provider>
  )
}

export default SlidePanelGroup

SlidePanelGroup.propTypes = {
  isShowing: PropTypes.bool,
  activeId: PropTypes.string,
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hasMask: PropTypes.bool,
  className: PropTypes.string,
  onMaskClick: PropTypes.func,
  children: PropTypes.node,
  onSwitchPanelItem: PropTypes.func,
  onSlideStarted: PropTypes.func,
  onSlideCompleted: PropTypes.func,
}
