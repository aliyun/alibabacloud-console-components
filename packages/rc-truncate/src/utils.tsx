import React, { useState } from 'react'
import { Balloon } from '@alicloud/console-components'
import { BalloonProps } from '@alicloud/console-components/types/balloon'
import classnames from 'classnames'
import {
  AlignType,
  tooltipPopupClassName,
  originalContentClassName,
} from './constants'

export type IPatchPopupProps = (originalProps: BalloonProps) => BalloonProps

export function useTooltip({
  showTooltip,
  tooltipMaxWidth,
  align,
  originalContent,
  truncatedContent,
  popupStyle = {},
  popupClassName = '',
  patchPopupProps,
}: {
  showTooltip: boolean
  tooltipMaxWidth?: number
  align: AlignType
  originalContent: React.ReactNode
  truncatedContent: React.ReactNode
  popupStyle?: React.CSSProperties
  popupClassName?: string
  patchPopupProps?: IPatchPopupProps
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

  const ballonProps = (() => {
    const originalProps: BalloonProps = {
      visible,
      trigger: truncatedContent,
      onVisibleChange: (newVisible: boolean) => {
        if (showTooltip && newVisible) setVisible(true)
        else setVisible(false)
      },
      align,
      popupStyle: actualPopupStyle as {},
      popupClassName: classnames(tooltipPopupClassName, popupClassName),
      alignEdge: true,
      needAdjust: true,
      closable: false, // hidden close icon
    }
    if (!patchPopupProps) return originalProps
    return patchPopupProps(originalProps)
  })()

  return (
    <Balloon {...ballonProps}>
      <span
        style={{ display: 'inline-block' }}
        className={originalContentClassName}
      >
        {originalContent}
      </span>
    </Balloon>
  )
}
