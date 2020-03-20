import React from 'react'
import { Breadcrumb } from '@alicloud/console-components'
import BreadcrumbSelect from '@alicloud/console-components-breadcrumb-select'

const { Link } = BreadcrumbSelect

const Demo3 = () => (
  <div>
    <Breadcrumb separator="/">
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
  </div>
)

export default Demo3
