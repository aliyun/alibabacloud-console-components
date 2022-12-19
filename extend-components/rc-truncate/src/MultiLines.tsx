import React, { useState } from 'react'
import Truncate from 'react-truncate-markup'

import { useTooltip } from './utils'
import type { IMultiLinesProps } from './types/IMultiLinesProps.type'
export type { IMultiLinesProps }

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
