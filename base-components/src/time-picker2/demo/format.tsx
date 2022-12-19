/**
 * @title 时间格式
 * @description 可以通过 `format` 属性格式化时间值，此外该属性还会影响到时间列的展示。
 */

import * as React from 'react'
import styled from 'styled-components'

import { TimePicker2 } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <TimePicker2 format="HH" />
      <p>Hide seconds</p>
      <TimePicker2 format="HH:mm" />
      <p>Hide hours</p>
      <TimePicker2 format="mm:ss" />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
