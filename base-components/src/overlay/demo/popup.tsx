/**
 * @title Popup弹层
 * @description `Popup` 是对 `Overlay` 的封装，它接收某个节点作为触发节点，弹出一个浮层，这个浮层默认情况下使用这个节点作为定位的参照对象。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Overlay, Button, Input } from '@alicloudfe/components'

const { Popup } = Overlay

function App(props) {
  return <input {...props} />
}

export default function DemoComponent() {
  const content = (
    <div>
      <Popup trigger={<Button>Open</Button>} triggerType="click">
        <span className="overlay-demo">Hello World From Popup!</span>
      </Popup>
      <br />
      <br />
      <Popup
        trigger={<Input placeholder="Use Down Arrow to open" />}
        triggerType="click"
        triggerClickKeycode={40}
      >
        <span className="overlay-demo">Hello World From Popup!</span>
      </Popup>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #999999;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`
