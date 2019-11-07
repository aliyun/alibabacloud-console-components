import React from 'react'
import { Breadcrumb } from '@alicloud/console-components'

const Demo1 = () => (
  <div>
    <Breadcrumb>
      <Breadcrumb.Item link="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item link="/Categories">Categories</Breadcrumb.Item>
      <Breadcrumb.Item>Component</Breadcrumb.Item>
    </Breadcrumb>
  </div>
)

export default Demo1
