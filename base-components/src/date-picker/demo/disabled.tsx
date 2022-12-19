/**
 * @title 禁用状态
 * @description 当开启 `disabled` 属性时，选择框处于完全禁用状态。
 */

import * as React from 'react'
import styled from 'styled-components'

import { DatePicker } from '@alicloudfe/components'

const { RangePicker } = DatePicker

export default function DemoComponent() {
  const content = (
    <div>
      <DatePicker disabled />
      <br />
      <br />
      <RangePicker disabled />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
