/**
 * @title 可关闭提示
 * @description 通过`closeable`设置用户手动关闭提示框。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Message } from '@alicloudfe/components'

const onClose = () => console.log('onClose triggered!')
const afterClose = () => console.log('afterClose triggered!')

export default function DemoComponent() {
  const content = (
    <div>
      <Message
        title="title"
        closeable
        onClose={onClose}
        size="large"
        afterClose={afterClose}
      >
        Content Content Content Content
      </Message>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
