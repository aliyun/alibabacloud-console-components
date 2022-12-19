/**
 * @title 步长
 * @description 可以通过 `hourStep`, `minuteStep`, `secondStep` 分别设置时分秒的选项间隔。
 */

import * as React from 'react'
import styled from 'styled-components'

import { TimePicker } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <TimePicker
      onChange={(val) => console.log(val.format('HH:mm:ss'))}
      hourStep={2}
      minuteStep={5}
      secondStep={5}
    />
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
