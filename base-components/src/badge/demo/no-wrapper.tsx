/**
 * @title 独立使用
 * @description 不包裹任何元素即独立使用，可自定样式展示。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Badge } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Badge count={25} />
      <Badge
        count={4}
        style={{
          backgroundColor: '#fff',
          color: '#999',
          border: '1px solid #d9d9d9'
        }}
      />
      <Badge count={109} style={{ backgroundColor: '#87d068' }} />
      <Badge dot />
      <Badge
        content="hot"
        style={{ backgroundColor: '#FC0E3D', color: '#FFFFFF' }}
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .next-badge {
    margin-right: 16px;
  }
`
