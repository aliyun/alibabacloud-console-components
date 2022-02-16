import React from 'react'
import classnames from 'classnames'
import { OverlayProps } from '@alicloud/console-components/types/overlay'
import { Overlay } from '@alicloud/console-components'

interface IOverlayBarProps {
  showOverlay?: boolean
  normalChildren?: React.ReactNode
  overlayChildren?: React.ReactNode
  overlayProps?: OverlayProps
}

const AffixBar: React.FC<IOverlayBarProps> = ({
  showOverlay,
  normalChildren,
  overlayChildren,
  overlayProps,
}) => {
  return (
    <>
      {showOverlay ? (
        <Overlay
          animation={false}
          {...overlayProps}
          className={classnames('overlay-inner', overlayProps?.className)}
        >
          {overlayChildren}
        </Overlay>
      ) : (
        <>{normalChildren}</>
      )}
    </>
  )
}

export default AffixBar
