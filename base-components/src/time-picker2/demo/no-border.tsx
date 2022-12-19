/**
 * @title 无边框
 * @description 无边框。
 */

import * as React from 'react'
import styled from 'styled-components'

import { TimePicker2 } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = <TimePicker2 hasBorder={false} onChange={console.log} />
  return <Style>{content}</Style>
}
const Style = styled.div``
