/**
 * @title 触发方式
 * @description 通过 `triggerType` 属性设置触发方式。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Overlay, Button, Input } from '@alicloudfe/components'

const { Popup } = Overlay

export default function DemoComponent() {
  const content = (
    <div>
      <Popup trigger={<Button>click</Button>} triggerType="click">
        <span className="overlay-demo">Click to open Popup!</span>
      </Popup>
      <Popup trigger={<Button>hover</Button>} triggerType="hover">
        <span className="overlay-demo">Hover to open Popup!</span>
      </Popup>
      <Popup trigger={<Button>focus</Button>} triggerType="focus">
        <span className="overlay-demo">Focus to open Popup!</span>
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
    border: 1px solid #eee;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
  .next-btn:not(last-child) {
    margin-right: 20px;
  }
`
