import React, { useRef, useEffect, useState, useCallback } from 'react'
import classnames from 'classnames'
import TruncateByLength from './TruncateByLength'
import TruncateByWidth from './TruncateByWidth'
import { wrapperClassName } from './constants'
import { SWrapper } from './styles'
import type { ITruncateProps } from './types/ITruncateProps.type'
export type { ITruncateProps }

// 自定义 Hook 使用 ResizeObserver 监听元素尺寸变化
const useResizeObserver = (debounce = false) => {
  const [size, setSize] = useState({ width: 0, height: 0 })
  const ref = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const updateSize = useCallback((width: number, height: number) => {
    if (debounce) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        setSize({ width, height })
      }, 16) // 约一帧的时间
    } else {
      setSize({ width, height })
    }
  }, [debounce])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect
        updateSize(width, height)
      }
    })

    resizeObserver.observe(element)

    return () => {
      resizeObserver.disconnect()
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [updateSize])

  return { ref, size }
}

// 检查是否启用防抖模式
const debouncedMesure = (() => {
  if (
    typeof window !== undefined &&
    // @ts-ignore
    window['console-components-truncate-mesure'] === 'debounce'
  ) {
    return true
  }
  return false
})()

/**
 * @public
 */
const Truncate: React.FC<ITruncateProps> = ({
  children,
  type = 'length',
  value,
  threshold,
  tooltip,
  showTooltip,
  align = 'r',
  omission = '...',
  tooltipMaxWidth,
  className,
  style,
  updaterRef,
  isOverflowChange,
  popupStyle,
  popupClassName,
  patchPopupProps,
}) => {
  const { ref: sizeRef, size } = useResizeObserver(debouncedMesure)

  const actuallShowTooltip = (() => {
    // 旧版组件支持tooltip prop，且'enable'表示true
    if (showTooltip !== undefined) return showTooltip
    if (tooltip !== undefined) {
      return tooltip === true || tooltip === 'enable'
    }
    return true
  })()
  
  const actualThreshold: number | string = (() => {
    if (threshold !== undefined) {
      return threshold
    }
    if (value !== undefined) {
      // 旧版API： value可以为30、'30'、'30px'
      if (typeof value === 'number') {
        // value可以是40
        return value
      }
      const parsed = parseInt(value, 10)
      if (!Number.isNaN(parsed)) {
        // value可以是'40'
        return parsed
      }
      if (type === 'width' && typeof value === 'string') {
        // 仅当type为'width'时，value可以是'40px'这种【非纯数字字符串】
        return value
      }
      console.error(
        `type can't be string unless type is 'width', using default: 30`
      )
    }
    return 30
  })()

  if (
    type === 'length' &&
    // type 视为 'length' 的前提：
    typeof children === 'string' &&
    actualThreshold !== 'auto'
  ) {
    return (
      <Wrapper className={className} style={style}>
        <TruncateByLength
          threshold={actualThreshold as number}
          omission={omission}
          showTooltip={actuallShowTooltip}
          align={align}
          tooltipMaxWidth={tooltipMaxWidth}
          popupStyle={popupStyle}
          popupClassName={popupClassName}
          patchPopupProps={patchPopupProps}
        >
          {children}
        </TruncateByLength>
      </Wrapper>
    )
  }
  
  // 其余情况 type 视为 'width'
  if (actualThreshold === 'auto') {
    // 获得可用宽度（即Wrapper的宽度）
    let actualActualThreshold: number
    // 设置一个超大的Threshold，使得能拿到完整内容的宽度
    if (!size.width) actualActualThreshold = 5000
    else actualActualThreshold = size.width

    return (
      <Wrapper className={className} style={style} ref={sizeRef}>
        <TruncateByWidth
          threshold={actualActualThreshold}
          omission={omission}
          showTooltip={actuallShowTooltip}
          align={align}
          tooltipMaxWidth={tooltipMaxWidth}
          updaterRef={updaterRef}
          isOverflowChange={isOverflowChange}
          popupStyle={popupStyle}
          popupClassName={popupClassName}
          patchPopupProps={patchPopupProps}
        >
          {children}
        </TruncateByWidth>
      </Wrapper>
    )
  }
  
  return (
    <Wrapper className={className} style={style}>
      <TruncateByWidth
        threshold={actualThreshold as number}
        omission={omission}
        showTooltip={actuallShowTooltip}
        align={align}
        tooltipMaxWidth={tooltipMaxWidth}
        updaterRef={updaterRef}
        isOverflowChange={isOverflowChange}
        popupStyle={popupStyle}
        popupClassName={popupClassName}
        patchPopupProps={patchPopupProps}
      >
        {children}
      </TruncateByWidth>
    </Wrapper>
  )
}

export default Truncate

const Wrapper = React.forwardRef<
  HTMLDivElement,
  {
    className?: string
    style?: React.CSSProperties
    children: React.ReactNode
  }
>(({ className, children, style }, ref) => {
  return (
    <SWrapper 
      ref={ref}
      className={classnames(wrapperClassName, className)} 
      style={style}
    >
      {children}
    </SWrapper>
  )
})