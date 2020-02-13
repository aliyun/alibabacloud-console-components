import React, { useState, useRef, useLayoutEffect, useCallback } from 'react'
import classnames from 'classnames'
import {
  mainClassName,
  omissionClassName,
  baseClassName,
  AlignType,
} from './constants'
import { STruncateWidthContainer } from './styles'
import { useTooltip, IPatchPopupProps } from './utils'

const TruncateByWidth: React.FC<{
  children: React.ReactNode
  // 40 或 '40' 或 '40px'
  threshold: number | string
  omission: React.ReactNode
  showTooltip: boolean
  align: AlignType
  className?: string
  tooltipMaxWidth?: number
  updaterRef?: React.MutableRefObject<(() => void) | null>
  isOverflowChange?: (newIsOverflow: boolean) => void
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
  updaterRef,
  isOverflowChange,
  popupStyle = {},
  popupClassName,
  patchPopupProps,
}) => {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [isOverflow, setIsOverflow] = useState(false)
  // 通过css`text-overflow: ellipsis;`来渲染省略符，还是用react来渲染
  // css渲染方式能够以字符为单位进行截断，观感更好
  const omissionByCSS = omission === '...'

  const checkOverflow = useCallback(() => {
    const el = ref.current
    if (!el) {
      // 尚未渲染完成
      return
    }
    const newIsOverflow = isWidthOverflow(el)
    if (newIsOverflow !== isOverflow) {
      setIsOverflow(newIsOverflow)
      if (typeof isOverflowChange === 'function') {
        setTimeout(() => {
          isOverflowChange(newIsOverflow)
        }, 0)
      }
    }
  }, [isOverflow, isOverflowChange])

  useLayoutEffect(() => {
    checkOverflow()
    if (typeof updaterRef === 'object')
      // eslint-disable-next-line
      (updaterRef as any).current = checkOverflow
  })

  const truncateContainer = (
    <STruncateWidthContainer
      threshold={Number(threshold) || threshold}
      omissionByCSS={omissionByCSS}
      className={classnames(className, baseClassName)}
    >
      <span ref={ref} className={mainClassName}>
        {children}
      </span>
      {isOverflow && !omissionByCSS && (
        <span className={omissionClassName}>{omission}</span>
      )}
    </STruncateWidthContainer>
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

export default TruncateByWidth

function isWidthOverflow(element: Element) {
  // debugger
  return element.scrollWidth > element.clientWidth
}
