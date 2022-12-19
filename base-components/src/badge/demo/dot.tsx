/**
 * @title 讨嫌的小红点
 * @description 没有具体的数字，仅展示小红点。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Badge, Icon } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Badge dot>
        <Icon type="email" />
      </Badge>
      <Badge count={0} dot>
        <Icon type="email" />
      </Badge>
      <Badge dot>
        <a href="#">A Link</a>
      </Badge>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .next-badge {
    margin-right: 16px;
  }
`
