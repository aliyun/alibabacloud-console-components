import React from 'react'
import { Select } from '@alicloud/console-components'

const dataSource = [
  { value: '10001', label: 'Lucy King' },
  { value: 10002, label: 'Lily King' },
  { value: 10003, label: 'Tom Cat', disabled: true },
  {
    label: 'Special Group',
    children: [
      { value: new Date(), label: 'new Date()' },
      { value: false, label: 'FALSE' },
      { value: 0, label: 'ZERO' },
    ],
  },
]

function handleChange(value) {
  console.log(value)
}

const Demo3 = () => (
  <Select
    mode="multiple"
    onChange={handleChange}
    dataSource={dataSource}
    style={{ width: 300 }}
  />
)

export const demoMeta = {
  zhName: `多选`,
  zhDesc: '多选模式, 通过 `showSearch` 可以开启搜索, 但搜索值不可用作选项',
}

export default Demo3
