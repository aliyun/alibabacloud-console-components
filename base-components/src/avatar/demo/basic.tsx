/**
 * @title 基本
 * @description 简单的头像展示，支持三种尺寸，两种形状。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Avatar } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <div className="avatar-demo">
        <Avatar size={64} icon="account" />
        <Avatar size="large" icon="account" />
        <Avatar size="medium" icon="account" />
        <Avatar size="small" icon="account" />
      </div>
      <div className="avatar-demo">
        <Avatar shape="square" size={64} icon="account" />
        <Avatar shape="square" size="large" icon="account" />
        <Avatar shape="square" size="medium" icon="account" />
        <Avatar shape="square" size="small" icon="account" />
      </div>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .avatar-demo .next-avatar {
    margin: 20px 20px 0 0;
  }
`
