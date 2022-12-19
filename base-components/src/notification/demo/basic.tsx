/**
 * @title 基本
 * @description 最简单的用法, 4.5s 后关闭
 */

import * as React from 'react'
import styled from 'styled-components'

import { Notification, Button } from '@alicloudfe/components'

const openNotification = () => {
  Notification.open({
    title: 'Notification Title',
    content:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!')
    }
  })
}

export default function DemoComponent() {
  const content = (
    <Button type="primary" onClick={openNotification}>
      Open Notification
    </Button>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
