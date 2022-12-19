/**
 * @title 无障碍支持
 * @description 通过`Enter`键点击`button`时，自动聚焦到`Message`上读取信息。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Message, Button } from '@alicloudfe/components'

const showSuccess = () => Message.success('success')

export default function DemoComponent() {
  const content = (
    <div className="message-toast-quick-demo">
      <Button type="primary" onClick={showSuccess}>
        success
      </Button>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
