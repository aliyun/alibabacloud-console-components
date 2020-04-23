import React, { useState } from 'react'
import { Breadcrumb } from '@alicloud/console-components'
import BreadcrumbSelect from '@alicloud/console-components-breadcrumb-select'

const dataSource = [
  {
    label: 'List',
    value: 'list',
  },
  {
    label: 'Page',
    value: 'page',
  },
  {
    label: 'Item',
    value: 'item',
  },
]

const Demo6 = () => {
  return (
    <div style={{ width: '400px' }}>
      <Breadcrumb separator="/">
        <Breadcrumb.Item link="javascript:void(0);">home</Breadcrumb.Item>
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
        <Breadcrumb.Item link="javascript:void(0);">Whatever</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default Demo6
