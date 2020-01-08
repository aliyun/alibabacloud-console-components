import React, { useState } from 'react'
import { Balloon } from '@alicloud/console-components'
import classnames from 'classnames'
import {
  AlignType,
  tooltipPopupClassName,
  originalContentClassName,
} from './constants'

export function useTooltip({
  showTooltip,
  tooltipMaxWidth,
  align,
  originalContent,
  truncatedContent,
  popupStyle = {},
  popupClassName = '',
}: {
  showTooltip: boolean
  tooltipMaxWidth?: number
  align: AlignType
  originalContent: React.ReactNode
  truncatedContent: React.ReactNode
  popupStyle?: React.CSSProperties
  popupClassName?: string
}) {
  const [visible, setVisible] = useState(false)

  const actualPopupStyle: React.CSSProperties = {
    ...popupStyle,
  }
  if (
    showTooltip &&
    typeof tooltipMaxWidth === 'number' &&
    tooltipMaxWidth > 0
  ) {
    actualPopupStyle.maxWidth = tooltipMaxWidth
  }

  return (
    // TODO: 提供选项给用户自定义Ballon的各种属性，比如弹层容器
    <Balloon
      visible={visible}
      trigger={truncatedContent}
      onVisibleChange={(newVisible: boolean) => {
        if (showTooltip && newVisible) setVisible(true)
        else setVisible(false)
      }}
      align={align}
      popupStyle={actualPopupStyle as {}}
      popupClassName={classnames(tooltipPopupClassName, popupClassName)}
      alignEdge
      needAdjust
      closable={false} // hidden close icon
    >
      <span
        style={{ display: 'inline-block' }}
        className={originalContentClassName}
      >
        {originalContent}
      </span>
    </Balloon>
  )
}
