/**
 * @title 弹窗用法
 * @description 信息提示的弹窗用法，可以通过`Message.show`和`Message.hide`方法来显示或隐藏。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Message, Button } from '@alicloudfe/components'

const show = () => {
  Message.show({
    type: 'loading',
    content:
      'Will be closed after 3 seconds or manually click on the close button',
    afterClose: () => console.log('Closed the toast')
  })
}
const hide = () => Message.hide()

export default function DemoComponent() {
  const content = (
    <div className="message-toast-demo">
      <Button type="primary" onClick={show}>
        Show
      </Button>
      <Button type="primary" onClick={hide}>
        Hide
      </Button>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .message-toast-demo .next-btn.next-medium {
    margin-right: 10px;
  }
`
