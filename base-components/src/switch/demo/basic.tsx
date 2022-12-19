/**
 * @title 简单
 * @description 最简单的用法
 */

import * as React from 'react'
import styled from 'styled-components'

import { Switch } from '@alicloudfe/components'

function onChange(checked) {
  console.log(`switch to ${checked}`)
}

export default function DemoComponent() {
  const content = (
    <div>
      <Switch defaultChecked={false} onChange={onChange} />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .large-width {
    width: 100px;
  }
`
