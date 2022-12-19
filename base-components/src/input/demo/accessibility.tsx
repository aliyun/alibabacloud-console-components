/**
 * @title 无障碍支持
 * @description 通过`aria-label`对`Input`组件进行描述。关于键盘操作请参考[#无障碍键盘操作指南](#无障碍键盘操作指南)。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Input } from '@alicloudfe/components'

function onChange(v) {
  console.log(v)
}
function onKeyDown(v) {
  console.log(v)
}

export default function DemoComponent() {
  const content = (
    <div>
      <Input
        size="large"
        placeholder="please input"
        onChange={onChange}
        onKeyDown={onKeyDown}
        aria-label="this is input"
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
