/**
 * @title 常用类型的通知框
 * @description `success`, `warning`, `error`, `notice`, `help` 类型的通知框。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Notification, Button } from '@alicloudfe/components'

const openNotification = (type) => {
  Notification.open({
    title: 'Notification Title',
    content:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    type
  })
}

export default function DemoComponent() {
  const content = (
    <div className="button-row">
      <Button type="primary" onClick={() => openNotification('success')}>
        success
      </Button>
      <Button type="primary" onClick={() => openNotification('warning')}>
        warning
      </Button>
      <Button type="primary" onClick={() => openNotification('error')}>
        error
      </Button>
      <Button type="primary" onClick={() => openNotification('notice')}>
        notice
      </Button>
      <Button type="primary" onClick={() => openNotification('help')}>
        help
      </Button>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .button-row .next-btn {
    margin-right: 10px;
  }
`
