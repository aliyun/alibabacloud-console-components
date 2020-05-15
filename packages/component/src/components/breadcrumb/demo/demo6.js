import React, { useState, useCallback } from 'react'
import { Breadcrumb } from '@alicloud/console-components'
import BreadcrumbSelect from '@alicloud/console-components-breadcrumb-select'

const { Link } = BreadcrumbSelect

const dataSource = [
  {
    label: 'ListListListListListListListList',
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
  const [selected, setSelected] = useState(dataSource[0])

  const handleSelect = useCallback((v, item) => {
    setSelected(item)
  }, [])

  return (
    <Breadcrumb separator="/">
      <Breadcrumb.Item link="javascript:void(0);">Home 1</Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={selected.value}>{selected.label}</Link>
        <BreadcrumbSelect
          onSelect={handleSelect}
          dataSource={dataSource}
          value={selected.value}
        />
      </Breadcrumb.Item>
      <Breadcrumb.Item link="javascript:void(0);">Whatever 2</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Demo4
