/**
 * @title 嵌套浮层问题
 * @description 浮层中如果又有浮层，比如在`Balloon`中有`DatePicker/Select`的浮层, `DatePicker`选择时，`Balloon`浮层也会关闭。可以用 `followTrigger`解决。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Balloon, DatePicker, Select } from '@alicloudfe/components'
import moment from 'moment'

const showSelect = <Button className="btrigger">Show Select</Button>
const showDatePicker = <Button className="btrigger">Show DatePicker</Button>
const innerButton = <Button className="btrigger">Show Inner Balloon</Button>
const dateValue = moment('2018-01-01', 'YYYY-MM-DD', true)

const App = () => (
  <div>
    <Balloon
      type="primary"
      autoFocus
      trigger={showSelect}
      closable={false}
      triggerType="click"
    >
      <Select dataSource={['apple', 'banana', 'orange']} followTrigger />
    </Balloon>
    <span style={{ marginRight: 20 }} />
    <Balloon
      type="primary"
      autoFocus
      trigger={showDatePicker}
      closable={false}
      triggerType="click"
    >
      <DatePicker defaultValue={dateValue} followTrigger />
    </Balloon>
    <span style={{ marginRight: 20 }} />
    <Balloon
      type="primary"
      autoFocus
      trigger={innerButton}
      closable={false}
      triggerType="click"
    >
      <Balloon
        trigger={<Button type="primary">please click</Button>}
        followTrigger
        triggerType="click"
      >
        nesting balloon content
      </Balloon>
    </Balloon>
  </div>
)

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
