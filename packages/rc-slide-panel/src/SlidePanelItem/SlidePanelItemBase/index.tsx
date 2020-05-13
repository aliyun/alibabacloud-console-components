import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useSlidePanelContext, ActiveIdForAll } from '../../context'
import { useTransitionController } from '../../utils'
import { SPanelItemWrapper } from './style'

/**
 * @internal
 */
export interface ISlidePanelItemBaseProps {
  /**
   * 面板的id。用于在`SlidePanelGroup`中匹配`props.activeId`。id匹配的面板处于激活状态（全宽度展示）。非激活状态的panel会有宽度坍缩，并展示`...`而不是实际内容，使用户注意力聚焦于激活状态的面板。
   */
  id?: string
  children: React.ReactNode
  /**
   * 面板处于激活状态时的正常宽度。
   */
  width: string
  className?: string
  /**
   * 面板之间的切换动画开始了。
   */
  onSwitchStarted?: () => void
  /**
   * 面板之间的切换动画取消了。原因是动画还没完成，`SlidePanelGroup`的`activeId`又变了。
   * @internal
   */
  onSwitchCancled?: () => void
  /**
   * 面板之间的切换动画完成了。
   */
  onSwitchCompleted?: () => void
}

/**
 * 控制一个panel非激活时/激活时的宽度。发出面板间切换的动画的事件。
 * 它不控制面板的内容（header、footer、button的展示），面板内容由SlidePanelItem来定义。
 * @internal
 */
const SlidePanelItemBase: React.FC<ISlidePanelItemBaseProps> = ({
  className,
  children,
  id,
  width,
  onSwitchStarted,
  onSwitchCancled,
  onSwitchCompleted,
}) => {
  const ctxValue = useSlidePanelContext()
  // 当ctxValue.activeId为ActiveIdForALL时，必定激活当前面板
  const isActive =
    ctxValue.activeId === ActiveIdForAll || ctxValue.activeId === id
  const actualWidth = isActive ? width : '150px'
  const transitionEndSignal = useTransitionController({
    data: isActive,
    onStarted: onSwitchStarted,
    onCancled: onSwitchCancled,
    onCompleted: onSwitchCompleted,
  })[1]

  const actualPanelId = ctxValue.stackPanelId || id || ''

  return (
    <SPanelItemWrapper
      className={classNames('wind3-slide-panel', className)}
      cursor={isActive ? 'initial' : 'pointer'}
      width={actualWidth}
      onClick={() =>
        !isActive &&
        ctxValue.onSwitchPanelItem &&
        ctxValue.onSwitchPanelItem(actualPanelId)
      }
      onTransitionEnd={(e) => {
        if (e.currentTarget === e.target) {
          transitionEndSignal()
        }
      }}
    >
      {children}
    </SPanelItemWrapper>
  )
}

export default SlidePanelItemBase

SlidePanelItemBase.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired,
  onSwitchStarted: PropTypes.func,
  onSwitchCancled: PropTypes.func,
  onSwitchCompleted: PropTypes.func,
}
