import React from 'react'
import PropTypes from 'prop-types'
import SlidePanelItemBase from './SlidePanelItemBase'
import { SBodyWrapper, SPlaceHolder, SSlidePanelContentWrapper } from './style'
import { useSlidePanelContext, ActiveIdForAll } from '../context'
import renderHeader from './renderHeader'
import Footer from './renderFooter'
import type { ISlidePanelItemProps } from '../types/ISlidePanelItemProps.type'

/**
 * 定义一个滑动面板。一个SlidePanelGroup中可以定义多个SlidePanelItem。绝大部分情况下，一个SlidePanelGroup只需要一个滑动面板就足够了。
 *
 * SlidePanelItem的内容分成三个区域：
 * - header
 *    - back arrow
 *    - title
 *    - extra
 *    - close button
 * - body
 * - footer
 *    - 确定按钮
 *    - 取消按钮
 *
 * @public
 */
const SlidePanelItem: React.FC<ISlidePanelItemProps> = ({
  className,
  children,
  id,
  width = 'medium',
  title,
  headerExtra,
  onBackArrowClicked,
  onClose,
  onCancel,
  cancelText,
  onOk,
  okText,
  isProcessing,
  processingText,
  customFooter,
  onSwitchStarted,
  onSwitchCancled,
  onSwitchCompleted,
  placement,
  okProps,
  cancelProps,
  ...rest
}) => {
  const ctxValue = useSlidePanelContext()
  // 当ctxValue.activeId为ActiveIdForALL时，必定激活当前面板
  const isActive =
    ctxValue.activeId === ActiveIdForAll || ctxValue.activeId === id

  let actualWidth: string = typeof width === 'number' ? `${width}px` : width
  switch (width) {
    case 'large':
      actualWidth = '880px'
      break
    case 'medium':
      actualWidth = '640px'
      break
    case 'small':
      actualWidth = '400px'
      break
    case 'tiny':
      actualWidth = '300px'
      break
    default:
      break
  }

  if (placement === 'bottom') {
    actualWidth = '100%'
  }

  const baseProps = {
    className,
    id,
    width: actualWidth,
    onSwitchStarted,
    onSwitchCancled,
    onSwitchCompleted,
    ...rest,
  }

  return (
    <SlidePanelItemBase {...baseProps}>
      <SSlidePanelContentWrapper>
        {renderHeader({ title, onBackArrowClicked, headerExtra, onClose })}
        <SPlaceHolder display={isActive ? 'none' : 'block'}>...</SPlaceHolder>
        <SBodyWrapper
          display={isActive ? 'block' : 'none'}
          className="panel-body"
        >
          {children}
        </SBodyWrapper>
        <Footer
          {
            ...{
              isActive,
              customFooter,
              onOk,
              okText,
              isProcessing,
              processingText,
              onCancel,
              cancelText,
              okProps,
              cancelProps,
            }
          }
        />
      </SSlidePanelContentWrapper>
    </SlidePanelItemBase>
  )
}

export default SlidePanelItem

SlidePanelItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.node,
  headerExtra: PropTypes.node,
  onClose: PropTypes.func,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  cancelText: PropTypes.node,
  okText: PropTypes.node,
  isProcessing: PropTypes.bool,
  processingText: PropTypes.node,
  customFooter: PropTypes.node,
  onSwitchStarted: PropTypes.func,
  onSwitchCancled: PropTypes.func,
  onSwitchCompleted: PropTypes.func,
}
