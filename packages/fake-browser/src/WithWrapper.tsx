import React from 'react'
import { Rnd, Props as RndProps } from 'react-rnd'
import FakeBrowser from './FakeBrowser'

const FakeBrowserWithWrapper: React.FC<{
  rndProps?: RndProps
  memoryRouterProps?: any
}> = ({ children, rndProps, memoryRouterProps }) => (
  <Rnd
    disableDragging
    {...rndProps}
    default={{
      x: 0,
      y: 0,
      width: '98%',
      height: 'auto',
      ...(rndProps && rndProps.default),
    }}
    enableResizing={{
      top: false,
      topRight: false,
      right: true,
      bottomRight: true,
      bottom: true,
      bottomLeft: false,
      left: false,
      topLeft: false,
      ...(typeof rndProps?.enableResizing === 'object' &&
        rndProps.enableResizing),
    }}
    style={{
      backgroundColor: 'rgb(250, 250, 250)',
      border: 'solid 1px #ddd',
      padding: '20px',
      position: 'relative',
      ...(rndProps && rndProps.style),
    }}
  >
    <FakeBrowser memoryRouterProps={memoryRouterProps}>{children}</FakeBrowser>
  </Rnd>
)

export default FakeBrowserWithWrapper
