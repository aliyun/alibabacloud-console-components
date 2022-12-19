/**
 * @title 位置
 * @description 可以设置通知从右上角、右下角、左下角、左上角弹出。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Notification, Button } from '@alicloudfe/components'

const openNotification = (placement) => {
  Notification.config({ placement })
  Notification.open({
    title: 'Notification Title',
    content:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
  })
}

export default function DemoComponent() {
  const content = (
    <div className="button-row">
      <Button type="primary" onClick={() => openNotification('tl')}>
        Top Left
      </Button>
      <Button type="primary" onClick={() => openNotification('tr')}>
        Top Right
      </Button>
      <Button type="primary" onClick={() => openNotification('bl')}>
        Bottom Left
      </Button>
      <Button type="primary" onClick={() => openNotification('br')}>
        Bottom Right
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
