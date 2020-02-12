import Overlay from '@alifd/next/lib/overlay'
import React from 'react'
import cs from 'classnames'
import hoistStatics from 'hoist-non-react-statics'
import './index.scss'

const { Popup } = Overlay

const WrappedOverlay = ({ wrapperClassName, ...props }) => (
  <Overlay
    {...props}
    wrapperClassName={cs('custom-overlay-wrapper', wrapperClassName)}
  />
)

const WrappedPopup = ({ wrapperClassName, ...props }) => (
  <Popup
    {...props}
    wrapperClassName={cs('custom-overlay-wrapper', wrapperClassName)}
  />
)

hoistStatics(WrappedOverlay, Overlay)
hoistStatics(WrappedPopup, Popup)

WrappedOverlay.Popup = WrappedPopup

export default WrappedOverlay
