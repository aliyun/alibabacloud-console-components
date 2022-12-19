/**
 * @title 半星评分
 * @description 默认情况下评分组件只支持整数评分，通过开启 `allowHalf` 属性可以支持半星评分。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Rating } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = <Rating defaultValue={3.5} allowHalf />
  return <Style>{content}</Style>
}
const Style = styled.div``
