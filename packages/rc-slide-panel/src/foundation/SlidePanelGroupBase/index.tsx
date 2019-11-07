import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import slidePanelGroupContext from '../context'
import { useTransitionController } from '../utils'
import { SMask, SPanelsWrapper } from './style'

/**
 * @internal
 */
export interface ISlidePanelGroupBaseProps {
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
}

/**
 * 定义一组滑动面板。属于同一组的滑动面板会同时滑入、滑出。用户可以点击切换当前要展示哪个面板。
 * @internal
 */
const SlidePanelGroupBase: React.FC<ISlidePanelGroupBaseProps> = ({
  isShowing = false,
  activeId = '',
  top = 0,
  hasMask = true,
  className,
  onMaskClick,
  children,
  onSwitchPanelItem,
  onSlideStarted,
  onSlideCancled,
  onSlideCompleted,
}) => {
  const ctxValue = useMemo(() => ({ activeId, onSwitchPanelItem }), [
    activeId,
    onSwitchPanelItem,
  ])
  const transitionEndSignal = useTransitionController({
    data: isShowing,
    onStarted: onSlideStarted,
    onCancled: onSlideCancled,
    onCompleted: onSlideCompleted,
  })[1]
  return (
    <div
      className={classNames('slide-panel-container', className, {
        'show-panel': isShowing,
      })}
    >
      {hasMask && (
        // eslint-disable-next-line
        <SMask
          className={classNames('slide-panel-mask', {
            'is-active': isShowing,
          })}
          onClick={() => onMaskClick && onMaskClick()}
        />
      )}
      <slidePanelGroupContext.Provider value={ctxValue}>
        <SPanelsWrapper
          className="slide-panels"
          isShowing={isShowing}
          top={top}
          onTransitionEnd={e => {
            if (e.target === e.currentTarget) {
              transitionEndSignal()
            }
          }}
        >
          {children}
        </SPanelsWrapper>
      </slidePanelGroupContext.Provider>
    </div>
  )
}

export default SlidePanelGroupBase

SlidePanelGroupBase.propTypes = {
  isShowing: PropTypes.bool,
  activeId: PropTypes.string,
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hasMask: PropTypes.bool,
  className: PropTypes.string,
  onMaskClick: PropTypes.func,
  children: PropTypes.node,
  onSwitchPanelItem: PropTypes.func,
  onSlideStarted: PropTypes.func,
  onSlideCancled: PropTypes.func,
  onSlideCompleted: PropTypes.func,
}
