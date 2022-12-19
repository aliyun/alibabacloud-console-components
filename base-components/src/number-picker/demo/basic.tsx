/**
 * @title 基本用法
 * @description onChange 第二个参数 e.type 可以获取事件类型。
 */

import * as React from 'react'
import styled from 'styled-components'

import { NumberPicker } from '@alicloudfe/components'

function onChange(value, e) {
  console.log(value, e.type, e.triggerType)
}

export default function DemoComponent() {
  const content = (
    <div>
      <NumberPicker onChange={onChange} />
      <br />
      <br />
      <NumberPicker defaultValue={0} type="inline" onChange={onChange} />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
