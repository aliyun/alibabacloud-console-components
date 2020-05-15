import React, { useState, useCallback } from 'react'
import BreadcrumbSelect from '@alicloud/console-components-breadcrumb-select'
import { FakeBrowserWithWrapper as FakeBrowser } from '@alicloud/console-components-fake-browser'
import { Breadcrumb } from '@alicloud/console-components'

const dataSource = [
  {
    label: 'ListListListListListListListListListListListList',
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

const Basic = () => {
  const [selectItem, setSelectedItem] = useState({
    label: 'ListListListListListListListListListListListList',
    value: '/list',
  })

  const handleSelect = useCallback((v, item) => {
    setSelectedItem(item)
  }, [])

  return (
    <FakeBrowser>
      <div style={{ height: '300px' }}>
        <Breadcrumb separator="/">
          <Breadcrumb.Item link="https://www.aliyun.com">
            Home 1
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <BreadcrumbSelect.Link to={selectItem.value}>
              {selectItem.label}
            </BreadcrumbSelect.Link>
            <BreadcrumbSelect
              className="wind-beradcrumb-select"
              onSelect={handleSelect}
              dataSource={dataSource}
              value={selectItem.value}
            />
          </Breadcrumb.Item>
          <Breadcrumb.Item>Whatever 2</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </FakeBrowser>
  )
}

export default Basic
