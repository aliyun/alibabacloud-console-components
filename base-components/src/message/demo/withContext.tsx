/**
 * @title withContext
 * @description 此功能1.21.6版本添加。
 */

import * as React from 'react'
import styled from 'styled-components'

export default function DemoComponent() {
  const content = (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://codepen.io/acejerry/pen/ZEOQjzr"
    >
      点击查看 Message.withContext Demo
    </a>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
