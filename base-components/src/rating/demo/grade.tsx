/**
 * @title 等级提示
 * @description 添加 `showGrade` 属性，使评分组件具有等级提示信息。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Rating } from '@alicloudfe/components'

const starMap = {
  1: 'Bad',
  2: 'OK',
  3: 'Good',
  4: 'Great',
  5: 'Perfect'
}

export default function DemoComponent() {
  const content = (
    <Rating defaultValue={2} showGrade readAs={(val) => starMap[val]} />
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
