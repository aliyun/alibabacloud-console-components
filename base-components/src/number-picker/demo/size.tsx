/**
 * @title 大小
 * @description
 */

import * as React from 'react'
import styled from 'styled-components'

import { NumberPicker } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <NumberPicker defaultValue={0} size="small" />
      <NumberPicker defaultValue={0} />
      <NumberPicker defaultValue={0} size="large" />
      <br />
      <br />
      <NumberPicker defaultValue={0} size="small" type="inline" />
      <NumberPicker defaultValue={0} type="inline" />
      <NumberPicker defaultValue={0} size="large" type="inline" />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .next-number-picker {
    margin-right: 10px;
  }
`
