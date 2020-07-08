import React, { useState } from 'react'
import Truncate from 'react-truncate-markup'
import { BalloonProps } from '@alicloud/console-components/types/balloon'

import { useTooltip } from './utils'
import { AlignType } from './constants'

/**
 * @public
 */
export interface IMultiLinesProps {
  /**
   * 展示的行数
   */
  lines?: number
  /**
   * 如何渲染省略号
   */
  ellipsis?: string | React.ReactNode
  /**
   * 在被截断时，是否使用气泡展示完整内容
   * @defaultValue true
   */
  showTooltip?: boolean
  /**
   * 完全控制tooltip的props。比如指定`popupContainer`。<br/>
   * `BalloonProps`的类型见Balloon组件文档。
   */
  patchPopupProps?: (originalProps: BalloonProps) => BalloonProps
  /**
   * 当tooltip展示时，设置弹层组件的className，透传给Popup
   */
  popupClassName?: string
  /**
   * 当tooltip展示时，设置弹层组件style，透传给Popup
   */
  popupStyle?: React.CSSProperties
  /**
   * tooltip的最大宽度限制，`showTooltip`为true时才有效
   */
  tooltipMaxWidth?: number
  /**
   * 气泡对齐方式，可选值参见 Balloon（Tooltip）组件文档
   * @defaultValue 'b'(下)
   */
  align?: AlignType
}

/**
 * @public
 */
const MultiLines: React.FC<IMultiLinesProps> = ({
  showTooltip = true,
  tooltipMaxWidth,
  align,
  children,
  lines,
  ellipsis,
  popupStyle,
  popupClassName,
  patchPopupProps,
}) => {
  const [isOverflow, setIsOverflow] = useState(false)
  const originalContent = children
  const truncatedContent = (
    <div>
      <Truncate
        lines={lines}
        ellipsis={ellipsis}
        onTruncate={(wasTruncated) => {
          setIsOverflow(wasTruncated)
        }}
      >
        {React.isValidElement(children) ? children : <span>{children}</span>}
      </Truncate>
    </div>
  )

  return useTooltip({
    showTooltip: isOverflow && showTooltip,
    tooltipMaxWidth,
    align,
    originalContent,
    truncatedContent,
    popupStyle,
    popupClassName,
    patchPopupProps,
  })
}

export default MultiLines
