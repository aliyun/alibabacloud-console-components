/**
 * @title 自定义图标
 * @description 可以设置使用的图标
 */

import * as React from 'react'
import styled from 'styled-components'

import { Notification, Button } from '@alicloudfe/components'

const openNotification = () => {
  const args = {
    title: 'Notification Title',
    content:
      'I will never close automatically. I will be close automatically. I will never close automatically.',
    icon: 'smile'
  }
  Notification.open(args)
}

export default function DemoComponent() {
  const content = (
    <div>
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
