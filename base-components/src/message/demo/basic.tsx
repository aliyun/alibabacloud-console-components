/**
 * @title 基本
 * @description 简单的信息提示反馈。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Message, Button } from '@alicloudfe/components'

const notice = () => {
  Message.notice('This is a Toast Message Notice')
}

export default function DemoComponent() {
  const content = (
    <div>
      <Message type="notice" closeable title="中文提示"></Message>
      <br />
      <Message type="notice" closeable>中文提示</Message>
      <br />
      <Message type="notice" size="large" closeable title="Display Toast Message Notice"></Message>
      <br />
      <Message type="notice" size="large" closeable>Display Toast Message Notice</Message>
      <br />
      <Button type="primary" onClick={notice}>
        Display Toast Message Notice
      </Button>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
