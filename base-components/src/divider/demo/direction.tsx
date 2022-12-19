/**
 * @title 垂直展示
 * @description 通过`direction`设置垂直分隔符展示。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Divider } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <a href="#">Add</a>
      <Divider direction="ver" />
      <a href="#">Edit</a>
      <Divider direction="ver" />
      <a href="#">Delete</a>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
