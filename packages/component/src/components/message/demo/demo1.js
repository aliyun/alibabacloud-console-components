import React from 'react'
import { Message } from '@alicloud/console-components'
import './demo1.less'

const Demo1 = () => (
  <div className="message-type-demo">
    <Message title="title">
      Content Content Content Content
    </Message>
    <Message title="title" type="warning">
      Content Content Content Content
    </Message>
    <Message title="title" type="error">
      Content Content Content Content
    </Message>
    <Message title="title" type="notice">
      Content Content Content Content
    </Message>
    <Message title="title" type="help">
      Content Content Content Content
    </Message>
    <Message title="title" type="loading">
      Content Content Content Content
    </Message>
  </div>
)

export default Demo1
