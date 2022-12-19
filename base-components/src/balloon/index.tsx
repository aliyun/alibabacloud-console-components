import React from 'react'
import { Balloon as NextBalloon } from '@alifd/next'
import { TooltipProps as NextTooltipProps } from '@alifd/next/types/balloon'

const { Tooltip: NextTooltip } = NextBalloon

type NextBalloonProps = React.ComponentProps<typeof NextBalloon>

const Tooltip: typeof NextTooltip = React.forwardRef(
  (props: NextTooltipProps, ref) => {
    return (
      <NextTooltip
        delay={150}
        {...props}
        popupProps={{
          animation: { in: 'fadeIn', out: 'fadeOut' },
          ...props.popupProps
        }}
        ref={ref as any}
      />
    )
  }
) as any

const Balloon: typeof NextBalloon = React.forwardRef(
  (props: NextBalloonProps, ref) => (
    <NextBalloon
      animation={{ in: 'fadeIn', out: 'fadeOut' }}
      {...props}
      ref={ref as any}
    />
  )
) as any

Balloon.Tooltip = Tooltip

export default Balloon
