/**
 * @title 封顶数字
 * @description 超过`overflowCount`的数值，会显示`${overflowCount}+`，`overflowCount`默认值为`99`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Badge } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Badge count={99}>
        <a href="#" className="head-example"></a>
      </Badge>
      <Badge count={100}>
        <a href="#" className="head-example"></a>
      </Badge>
      <Badge count={100} overflowCount={10}>
        <a href="#" className="head-example"></a>
      </Badge>
      <Badge count={1000} overflowCount={999}>
        <a href="#" className="head-example"></a>
      </Badge>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .next-badge {
    margin-right: 16px;
  }
  .head-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background: #eee;
  }
`
