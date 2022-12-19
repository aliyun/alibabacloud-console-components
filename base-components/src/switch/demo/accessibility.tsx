/**
 * @title 无障碍支持
 * @description 组件内部已支持无障碍，设置`aria-label`对组件进行描述。
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
      <Switch
        checkedChildren="on"
        onChange={onChange}
        unCheckedChildren="off"
        aria-label="accessible switch"
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .large-width {
    width: 100px;
  }
`
