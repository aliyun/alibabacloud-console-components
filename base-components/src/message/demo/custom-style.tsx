/**
 * @title 自定义样式
 * @description 使用 `style` 和 `className` 来定义样式。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Message, Button } from '@alicloudfe/components'

const success = () => {
  Message.success({
    content: 'Message with custom className and style',
    className: 'custom-message',
    style: {
      marginTop: '50vh'
    }
  })
}

export default function DemoComponent() {
  const content = (
    <div>
      <Message
        className="custom-message"
        style={{ backgroundColor: 'rgba(3,193,253,.3)' }}
      >
        Customized Message
      </Message>
      <br />
      <br />
      <Button type="primary" onClick={success}>
        Customized style
      </Button>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
