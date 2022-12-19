/**
 * @title 设置分隔符
 * @description 也可以设置不同的分隔符。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Breadcrumb } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <Breadcrumb separator="/">
      <Breadcrumb.Item link="javascript:void(0);">Home</Breadcrumb.Item>
      <Breadcrumb.Item link="javascript:void(0);">
        All Categories
      </Breadcrumb.Item>
      <Breadcrumb.Item link="javascript:void(0);">
        Women’s Clothing
      </Breadcrumb.Item>
      <Breadcrumb.Item link="javascript:void(0);">
        Blouses & Shirts
      </Breadcrumb.Item>
      <Breadcrumb.Item>T-shirts</Breadcrumb.Item>
    </Breadcrumb>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
