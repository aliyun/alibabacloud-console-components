/**
 * @title 基本
 * @description 基本的标签
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tag, Icon } from '@alicloudfe/components'

const { Group: TagGroup } = Tag

export default function DemoComponent() {
  const content = (
    <div className="tag-list">
      <Tag type="normal">Normal Tag</Tag>
      <Tag type="primary">Primary Tag</Tag>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .tag-list > * {
    margin-left: 10px;
  }
`
