import React, { useState, useCallback } from 'react'
import { Breadcrumb } from '@alicloud/console-components'
import BreadcrumbSelect from '@alicloud/console-components-breadcrumb-select'

const { Link } = BreadcrumbSelect

const dataSource = [
  {
    label: 'List',
    value: '/list',
  },
  {
    label: 'Page',
    value: '/page',
  },
  {
    label: 'Item',
    value: '/item',
  },
]

const Demo4 = () => {
  const [value, setValue] = useState('list')

  const [label, setLabel] = useState('List')

  const handleSelect = useCallback((v, item) => {
    setValue(v)
    setLabel(item.label)
  }, [])

  return (
    <Breadcrumb separator="/">
      <Breadcrumb.Item link="javascript:void(0);">Home 1</Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={value}>{label}</Link>
        <BreadcrumbSelect
          onSelect={handleSelect}
          dataSource={dataSource}
          value={value}
        />
      </Breadcrumb.Item>
      <Breadcrumb.Item link="javascript:void(0);">Whatever 2</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Demo4
