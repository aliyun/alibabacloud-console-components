/**
 * @title 显示省略
 * @description 当超过设置的最大个数的时候，显示省略号。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Breadcrumb } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <Breadcrumb maxNode={5}>
      <Breadcrumb.Item link="javascript:void(0);">Home 1</Breadcrumb.Item>
      <Breadcrumb.Item link="javascript:void(0);">Whatever 2</Breadcrumb.Item>
      <Breadcrumb.Item link="javascript:void(0);">
        All Categories 3
      </Breadcrumb.Item>
      <Breadcrumb.Item link="javascript:void(0);">
        Women’s Clothing 4
      </Breadcrumb.Item>
      <Breadcrumb.Item link="javascript:void(0);">
        Blouses & Shirts 5
      </Breadcrumb.Item>
      <Breadcrumb.Item>T-shirts 6</Breadcrumb.Item>
    </Breadcrumb>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
