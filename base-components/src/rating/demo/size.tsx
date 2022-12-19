/**
 * @title 尺寸
 * @description 通过 `size` 属性可以控制评分组件的大小，支持三种尺寸 `small`, `medium`, `large`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Rating } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Rating defaultValue={3.5} size="small" />
      <br />
      <br />
      <Rating defaultValue={3.5} />
      <br />
      <br />
      <Rating defaultValue={3.5} size="large" />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
