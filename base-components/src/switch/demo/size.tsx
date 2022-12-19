/**
 * @title 两种大小
 * @description size="small" 表示小号开关
 */

import * as React from 'react'
import styled from 'styled-components'

import { Switch } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Switch />
      <br />
      <Switch size="small" />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .line {
    margin-bottom: 10px;
  }
  .next-switch {
    margin-right: 20px;
  }
`
