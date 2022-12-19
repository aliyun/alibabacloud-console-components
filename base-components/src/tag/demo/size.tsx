/**
 * @title 尺寸
 * @description 三种尺寸的 `Tag`
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tag, Icon } from '@alicloudfe/components'

const { Group: TagGroup } = Tag

export default function DemoComponent() {
  const content = (
    <div className="tag-list">
      <Tag size="small">小</Tag>
      <Tag size="medium">中</Tag>
      <Tag size="large">大</Tag>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .tag-list > * {
    margin-left: 10px;
  }
`
