/**
 * @title 基本用法
 * @description 使用 `Breadcrumb.Item` 来设置面包屑子节点，如果设置其 `link` 属性就是 `<a />` 节点，否则为 `<span />` 节点。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Breadcrumb } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <Breadcrumb>
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
      <Breadcrumb.Item>
        T-shirts <b>78,999</b> Results
      </Breadcrumb.Item>
    </Breadcrumb>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
