import React, { useState, useCallback } from 'react'
import BreadcrumbSelect from '@alicloud/console-components-breadcrumb-select'
import { Breadcrumb } from '@alicloud/console-components'

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

const Basic = () => {
  const [value, setValue] = useState('item')

  const handleSelect = useCallback((v, item) => {
    console.log('value:', v, ', item:', item)
    setValue(v)
  }, [])

  return (
    <Breadcrumb separator="/">
      <Breadcrumb.Item link="javascript:void(0);">Home 1</Breadcrumb.Item>
      <Breadcrumb.Item>
        <BreadcrumbSelect
          className="wind-beradcrumb-select"
          onSelect={handleSelect}
          dataSource={dataSource}
          value={value}
        />
      </Breadcrumb.Item>
      <Breadcrumb.Item link="javascript:void(0);">Whatever 2</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Basic
