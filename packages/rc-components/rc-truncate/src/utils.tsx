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
  align?: AlignType
  originalContent: React.ReactNode
  truncatedContent: React.ReactNode
  popupStyle?: React.CSSProperties
  popupClassName?: string
  patchPopupProps?: IPatchPopupProps
}) {
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
      trigger: truncatedContent,
      align,
      popupStyle: actualPopupStyle as {},
      popupClassName: classnames(tooltipPopupClassName, popupClassName),
      alignEdge: true,
      needAdjust: true,
      closable: false, // hidden close icon
    }
    if (!showTooltip) {
      // showTooltip:true时，使用balloon默认的非受控模式；
      // showTooltip:false时，使用balloon的受控模式来阻止弹层
      originalProps.visible = false
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
