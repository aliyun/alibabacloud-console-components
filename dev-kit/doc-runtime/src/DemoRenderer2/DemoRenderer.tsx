import React, { useLayoutEffect, useRef, useState } from 'react'
import { StyleSheetManager } from 'styled-components'

// 如果后面逻辑变多，可以使用下面这个包
// https://www.npmjs.com/package/react-frame-component

import { createPortal } from 'react-dom'
import type { IDemoInfo } from './index'

interface IProps {
  demoInfo: IDemoInfo
}

const DemoRenderer: React.FC<IProps> = ({ demoInfo }) => {
  const Demo = demoInfo.DemoComponent
  return (
    <ShadowDom>
      {Object.entries(demoInfo.demoSrcInfo.styles).map(([styleId, code]) => {
        return (
          <style data-id={styleId} key={styleId}>
            {code}
          </style>
        )
      })}
      <Demo />
    </ShadowDom>
  )
}

const ShadowDom: React.FC<{}> = ({ children }) => {
  const hostRef = useRef<HTMLDivElement>(null)
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null)
  useLayoutEffect(() => {
    const host = hostRef.current
    if (!host) return
    const root = host.attachShadow({ mode: 'open' })
    setShadowRoot(root)
  }, [])

  const portal = shadowRoot
    ? createPortal(
        <StyleSheetManager target={shadowRoot as any}>
          <>{children}</>
        </StyleSheetManager>,
        shadowRoot as any
      )
    : null
  return <div ref={hostRef}>{portal}</div>
}

export default DemoRenderer
