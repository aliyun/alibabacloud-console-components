import React, { useState, useCallback } from 'react'
import BreadcrumbSelect from '@alicloud/console-components-breadcrumb-select'
import { FakeBrowserWithWrapper as FakeBrowser } from '@alicloud/console-components-fake-browser'
import { Breadcrumb } from '@alicloud/console-components'

const dataSource = [
  {
    label: 'ListList',
    value: 'https://www.taobao.com',
  },
  {
    label: 'Page',
    value: 'https://www.aliyun.com',
  },
  {
    label: 'Item',
    value: '/item',
  },
]

const OuterLink = () => {
  const [selectItem, setSelectedItem] = useState({
    label: 'ListList',
    value: 'https://www.taobao.com',
  })

  const handleSelect = useCallback((v, item) => {
    setSelectedItem(item)
  }, [])

  return (
    <FakeBrowser>
      <div style={{ height: '300px' }}>
        <Breadcrumb separator="/">
          <Breadcrumb.Item link="javascript:void(0);">Home 1</Breadcrumb.Item>
          <Breadcrumb.Item>
            <BreadcrumbSelect.Link href={selectItem.value}>
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

export default OuterLink
