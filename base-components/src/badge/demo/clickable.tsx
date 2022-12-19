/**
 * @title 徽标可点击
 * @description 用`<a>`标签包裹组件，实现徽标本身可点击。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Badge } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <a href="#">
      <Badge count={5}>
        <span className="basic-example"></span>
      </Badge>
    </a>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .basic-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background: #eee;
  }

  .next-badge {
    margin-right: 16px;
  }
`
