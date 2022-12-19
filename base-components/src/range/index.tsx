import React from 'react'
import { Range as NextRange } from '@alifd/next'

type NextRangeProps = React.ComponentProps<typeof NextRange>

const Range: React.FC<NextRangeProps> = React.forwardRef(
  ({ marksPosition = 'below', ...restProps }, ref) => {
    return (
      <NextRange
        marksPosition={marksPosition}
        ref={ref as any}
        {...restProps}
      />
    )
  }
)

export default Range
