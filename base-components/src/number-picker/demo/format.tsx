/**
 * @title 格式化
 * @description
 */

import * as React from 'react'
import styled from 'styled-components'

import { NumberPicker } from '@alicloudfe/components'

const intlize = (val) => Intl.NumberFormat('en-US').format(val)

export default function DemoComponent() {
  const content = (
    <div>
      <NumberPicker format={intlize} defaultValue={5000} />
      <br />
      <br />
      <NumberPicker label="p:" format={(val) => `${val}%`} defaultValue={85} />
      <br />
      <br />
      <NumberPicker innerAfter="%" />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
