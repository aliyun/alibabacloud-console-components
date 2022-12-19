/**
 * @title 弹层嵌套
 * @description 有弹层嵌套需求时，请使用 container 属性将第二个弹层渲染到第一个弹层内部。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Overlay, Button } from '@alicloudfe/components'

const { Popup } = Overlay

export default function DemoComponent() {
  const content = (
    <Popup trigger={<Button>Open first overlay</Button>} triggerType="click">
      <div className="overlay-demo">
        <Popup
          trigger={<Button>Open second overlay</Button>}
          triggerType="click"
          container={(trigger) => trigger.parentNode}
        >
          <div className="overlay-demo">
            <p>Hello World From Second Overlay!</p>
          </div>
        </Popup>
        <p>Hello World From First Overlay!</p>
      </div>
    </Popup>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #eee;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`
