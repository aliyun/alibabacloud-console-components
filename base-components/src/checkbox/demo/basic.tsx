/**
 * @title 基本
 * @description 使用 `Checkbox` 渲染的基本组件。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Checkbox } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = <Checkbox>Checkbox</Checkbox>
  return <Style>{content}</Style>
}
const Style = styled.div``
