/**
 * @title 自动关闭延时
 * @description 自定义关闭的延迟，默认 `4.5s`, 为 `0` 时则一直存在
 */

import * as React from 'react'
import styled from 'styled-components'

import { Notification, Button, NumberPicker } from '@alicloudfe/components'

let duration = 4500
const openNotification = () => {
  const args = {
    title: 'Notification Title',
    content:
      'I will never close automatically. I will be close automatically. I will never close automatically.',
    duration
  }
  Notification.open(args)
}

export default function DemoComponent() {
  const content = (
    <div>
      <NumberPicker
        defaultValue={duration}
        onChange={(v) => (duration = v || 0)}
      />
      <Button
        type="primary"
        onClick={openNotification}
        style={{ marginLeft: 20 }}
      >
        Open Notification
      </Button>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
