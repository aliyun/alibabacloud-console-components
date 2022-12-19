/**
 * @title 自定义图标、颜色等
 * @description 通过 `content` 属性可以自定义徽标的内容，自定义内容不包含任何色彩样式，完全由使用者自己定义。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Badge, Icon } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Badge
        content="hot"
        style={{ backgroundColor: '#FC0E3D', color: '#FFFFFF' }}
      >
        <a href="#" className="head-example"></a>
      </Badge>
      <Badge
        content={<Icon type="error" />}
        style={{ backgroundColor: 'transparent', color: 'red', padding: 0 }}
      >
        <a href="#" className="head-example"></a>
      </Badge>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .next-badge {
    margin-right: 24px;
  }
  .head-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background-color: #eee;
  }
`
