import React from 'react'
import { Breadcrumb } from '@alicloud/console-components'

const Demo2 = () => (
  <div>
    <Breadcrumb maxNode={5}>
      <Breadcrumb.Item link="javascript:void(0);">Home 1</Breadcrumb.Item>
      <Breadcrumb.Item link="javascript:void(0);">Whatever 2</Breadcrumb.Item>
      <Breadcrumb.Item link="javascript:void(0);">All Categories 3</Breadcrumb.Item>
      <Breadcrumb.Item link="javascript:void(0);">Women’s Clothing 4</Breadcrumb.Item>
      <Breadcrumb.Item link="javascript:void(0);">Blouses & Shirts 5</Breadcrumb.Item>
      <Breadcrumb.Item>T-shirts 6</Breadcrumb.Item>
    </Breadcrumb>
  </div>
)

export default Demo2
