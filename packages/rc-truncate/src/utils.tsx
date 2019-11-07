import React, { useState } from 'react'
import { Balloon } from '@alicloud/console-components'
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
}: {
  showTooltip: boolean
  tooltipMaxWidth?: number
  align: AlignType
  originalContent: React.ReactNode
  truncatedContent: React.ReactNode
}) {
  const [visible, setVisible] = useState(false)

  const popupStyle: React.CSSProperties = {}
  if (
    showTooltip &&
    typeof tooltipMaxWidth === 'number' &&
    tooltipMaxWidth > 0
  ) {
    popupStyle.maxWidth = tooltipMaxWidth
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
      popupStyle={popupStyle as {}}
      popupClassName={tooltipPopupClassName}
      alignEdge
      needAdjust
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
