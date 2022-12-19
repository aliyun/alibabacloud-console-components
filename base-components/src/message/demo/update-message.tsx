/**
 * @title 更新消息内容
 * @description 通过唯一的 `key` 来动态更新内容。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Message, Button } from '@alicloudfe/components'

const key = 'updatable'

const openMessage = () => {
  Message.loading({ content: 'Loading...', key })
  setTimeout(() => {
    Message.success({ content: 'Loaded!', key, duration: 2000 })
  }, 1000)
}

export default function DemoComponent() {
  const content = (
    <Button type="primary" onClick={openMessage}>
      Open the message box
    </Button>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
