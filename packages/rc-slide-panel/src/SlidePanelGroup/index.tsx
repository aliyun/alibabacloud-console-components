import React, { useMemo, useCallback, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Overlay } from '@alicloud/console-components'
import slidePanelGroupContext from '../context'
import { SPanelsWrapper, SGlobalStyle } from './style'
import type { ISlidePanelGroupProps } from '../types/ISlidePanelGroupProps.type'

const { Popup } = Overlay

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
  onVisibleChange,
  ...rest
}) => {
  const ctxValue = useMemo(() => ({ activeId, onSwitchPanelItem }), [
    activeId,
    onSwitchPanelItem,
  ])

  const handleVisibleChange = (
    visible: boolean,
    type: string,
    e: object
  ): void => {
    if (typeof onVisibleChange === 'function') {
      onVisibleChange(visible, type, e)
    }
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

  useLayoutEffect(() => {
    if (isShowing) {
      // 保存之前的focus元素
      const preFocusEl = document.activeElement
      console.log('preFocusEl', preFocusEl)
      return () => {
        if (preFocusEl && document.contains(preFocusEl)) {
          // 恢复到之前的focus
          ;(preFocusEl as HTMLElement).focus()
        }
      }
    }
  }, [isShowing])

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
        canCloseByEsc={true}
        target="viewport"
        autoFocus={popupProps?.autoFocus ?? true}
        {...popupProps}
      >
        <SPanelsWrapper
          role="dialog"
          aria-modal="true"
          aria-hidden={isShowing ? 'false' : 'true'}
          {...slidePanelWrapperProps}
        >
          {children}
        </SPanelsWrapper>
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
