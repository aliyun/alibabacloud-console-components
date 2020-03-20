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

const Demo4 = () => {
  const [value, setValue] = useState('list')

  return (
    <Breadcrumb separator="/">
      <Breadcrumb.Item link="javascript:void(0);">Home 1</Breadcrumb.Item>
      <Breadcrumb.Item>
        <BreadcrumbSelect
          onSelect={setValue}
          dataSource={dataSource}
          value={value}
        />
      </Breadcrumb.Item>
      <Breadcrumb.Item link="javascript:void(0);">Whatever 2</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Demo4
