/**
 * @title 基本
 * @description 最简单的用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { TimePicker2 } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = <TimePicker2 onChange={console.log} />
  return <Style>{content}</Style>
}
const Style = styled.div``
