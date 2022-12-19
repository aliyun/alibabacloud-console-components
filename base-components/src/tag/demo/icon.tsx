/**
 * @title 带有图标
 * @description 根据自身需要设置 icon
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tag, Icon } from '@alicloudfe/components'

const { Group: TagGroup } = Tag

export default function DemoComponent() {
  const content = (
    <div className="tag-list">
      <Tag>
        <Icon type="add" />
        tag 1
      </Tag>
      <Tag>
        <Icon type="account" />
        tag 2
      </Tag>
      <Tag>
        <Icon type="smile" />
        tag 3
      </Tag>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .tag-list > * {
    margin-left: 10px;
  }
`
