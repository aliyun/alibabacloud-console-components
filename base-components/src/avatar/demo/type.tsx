/**
 * @title 类型
 * @description 支持多种展示类型：内置图标、Icon、字符、图片，并可自定义样式
 */

import * as React from 'react'
import styled from 'styled-components'

import { Avatar, Icon } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div className="avatar-demo">
      <Avatar icon="account" />
      <Avatar icon={<Icon type="smile" />} />
      <Avatar>U</Avatar>
      <Avatar src="https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png" />
      <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
        U
      </Avatar>
      <Avatar style={{ backgroundColor: '#87d068' }} icon="account" />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .avatar-demo .next-avatar {
    margin-right: 12px;
  }
`
