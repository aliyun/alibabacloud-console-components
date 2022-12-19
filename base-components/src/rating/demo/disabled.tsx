/**
 * @title 只读模式
 * @description 设置 `disabled` 属性后，评分组件仅展示模式，不可选择。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Rating } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = <Rating defaultValue={3.5} disabled />
  return <Style>{content}</Style>
}
const Style = styled.div``
