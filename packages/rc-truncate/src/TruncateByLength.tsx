import React from 'react'
import classnames from 'classnames'
import truncate from 'lodash/truncate'
import {
  baseClassName,
  mainClassName,
  omissionClassName,
  AlignType,
} from './constants'
import { useTooltip, IPatchPopupProps } from './utils'

const TruncateByLength: React.FC<{
  children: string
  threshold: number
  omission: React.ReactNode
  showTooltip: boolean
  align: AlignType
  className?: string
  tooltipMaxWidth?: number
  popupStyle?: React.CSSProperties
  popupClassName?: string
  patchPopupProps?: IPatchPopupProps
}> = ({
  children,
  threshold,
  omission,
  showTooltip,
  align,
  className,
  tooltipMaxWidth,
  popupStyle = {},
  popupClassName,
  patchPopupProps,
}) => {
  let isOverflow = false
  const truncatedText = truncate(children, {
    length: threshold,
    omission: '',
  })
  if (truncatedText !== children) {
    isOverflow = true
  }
  const truncateContainer = (
    <span className={classnames(className, baseClassName)}>
      <span className={mainClassName}>{truncatedText}</span>
      {isOverflow && <span className={omissionClassName}>{omission}</span>}
    </span>
  )
  return useTooltip({
    showTooltip: isOverflow && showTooltip,
    tooltipMaxWidth,
    align,
    originalContent: children,
    truncatedContent: truncateContainer,
    popupStyle,
    popupClassName,
    patchPopupProps,
  })
}

export default TruncateByLength
