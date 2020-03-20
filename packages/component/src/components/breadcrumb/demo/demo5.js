import React, { useState } from 'react'
import { Breadcrumb } from '@alicloud/console-components'
import BreadcrumbSelect from '@alicloud/console-components-breadcrumb-select'

const dataSource = [
  {
    label: 'ListListListListListListListList',
    value: 'list',
  },
  {
    label: 'PagePagePagePagePagePagePagePage',
    value: 'page',
  },
  {
    label: 'ItemItemItemItemItemItemItemItem',
    value: 'item',
  },
]

const Demo5 = () => {
  const [value, setValue] = useState('list')

  return (
    <Breadcrumb separator="/">
      <Breadcrumb.Item
        title="This is a long breadcrumb home"
        link="javascript:void(0);"
      >
        This is a long breadcrumb item
      </Breadcrumb.Item>
      <Breadcrumb.Item
        title="This is a long breadcrumb item"
        link="javascript:void(0);"
      >
        <BreadcrumbSelect
          onSelect={setValue}
          dataSource={dataSource}
          value={value}
        />
      </Breadcrumb.Item>
      <Breadcrumb.Item
        title="Whatever it will show there now"
        link="javascript:void(0);"
      >
        Whatever it will show there
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Demo5
