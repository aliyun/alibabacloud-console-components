/**
 * @title 对齐
 * @description 通过 `align` 可以自定义对齐方式。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Overlay, Button } from '@alicloudfe/components'

const { Popup } = Overlay

export default function DemoComponent() {
  const content = (
    <div id="containerId" className="overlay-container">
      <Overlay target="containerId" visible align="br tl">
        <Button>br tl</Button>
      </Overlay>
      <Overlay target="containerId" visible align="tc tc">
        <Button>tc tc</Button>
      </Overlay>
      <Overlay target="containerId" visible align="bl tr">
        <Button>bl tr</Button>
      </Overlay>
      <Overlay target="containerId" visible align="cr cr">
        <Button>cr cr</Button>
      </Overlay>
      <Overlay target="containerId" visible align="br br">
        <Button>br br</Button>
      </Overlay>
      <Overlay target="containerId" visible align="tc bc">
        <Button>tc bc</Button>
      </Overlay>
      <Overlay target="containerId" visible align="bl bl">
        <Button>bl bl</Button>
      </Overlay>
      <Overlay target="containerId" visible align="cl cl">
        <Button>cl cl</Button>
      </Overlay>
      <Overlay target="containerId" visible align="cc cc">
        <Button>cc cc</Button>
      </Overlay>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .overlay-container {
    position: relative;
    height: 150px;
    margin: 50px;
    border: 1px solid #eee;
    overflow: auto;
    text-align: center;
  }
`
