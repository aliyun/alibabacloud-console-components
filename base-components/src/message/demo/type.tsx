/**
 * @title 常用提示类型
 * @description 通过设置`type`调整信息类型，包括成功、警告、错误、通知、帮助、加载。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Message } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div className="message-type-demo">
      <Message title="Success" type="success">
        Content Content Content Content
      </Message>
      <Message title="Warning" type="warning">
        Content Content Content Content
      </Message>
      <Message title="Error" type="error">
        Content Content Content Content
      </Message>
      <Message title="Notice" type="notice">
        Content Content Content Content
      </Message>
      <Message title="Help" type="help">
        Content Content Content Content
      </Message>
      <Message title="Loading" type="loading">
        Content Content Content Content
      </Message>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .message-type-demo .next-message {
    display: inline-block;
    margin: 10px;
  }
`
