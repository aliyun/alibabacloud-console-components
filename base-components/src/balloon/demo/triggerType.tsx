/**
 * @title 三种触发方式
 * @description 鼠标移入、聚集、点击。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Balloon, Input } from '@alicloudfe/components'

const content = (
  <div>
    <p>content</p>
  </div>
)
const MoveTarget = <Button style={{ margin: '5px' }}>hover</Button>
const ClickTarget = <Button style={{ margin: '5px' }}>click</Button>
const FocusTarget = <Button style={{ margin: '5px' }}>focus</Button>

const HoverInputTarget = (
  <Input placeholder="hover" style={{ marginRight: '20px' }} />
)
const ClickInputTarget = (
  <Input placeholder="click" style={{ marginRight: '20px' }} />
)
const FocusInputTarget = <Input placeholder="focus" />

const App = () => (
  <div>
    <Balloon trigger={MoveTarget} triggerType="hover">
      {content}
    </Balloon>

    <Balloon trigger={ClickTarget} triggerType="click">
      {content}
    </Balloon>

    <Balloon trigger={FocusTarget} triggerType="focus">
      {content}
    </Balloon>

    <br />
    <br />

    <Balloon trigger={HoverInputTarget} triggerType="hover">
      {content}
    </Balloon>
    <Balloon trigger={ClickInputTarget} triggerType="click">
      {content}
    </Balloon>
    <Balloon trigger={FocusInputTarget} triggerType="focus">
      {content}
    </Balloon>
  </div>
)

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
