/**
 * @title 基本
 * @description 最简单的用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { TimePicker } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = <TimePicker onChange={(val) => console.log(val)} />
  return <Style>{content}</Style>
}
const Style = styled.div``
