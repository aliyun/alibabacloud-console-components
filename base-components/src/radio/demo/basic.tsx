/**
 * @title 基本
 * @description 使用 `Radio` 渲染的基本组件。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Radio } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = <Radio>Fusion Radio</Radio>
  return <Style>{content}</Style>
}
const Style = styled.div``
