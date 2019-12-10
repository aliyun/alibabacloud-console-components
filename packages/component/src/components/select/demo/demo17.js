import React from 'react'
import { Select } from '@alicloud/console-components'

const dataSource = [
  { label: '1', value: 1 },
  { label: '10', value: 10 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
]

const handleChange = value => {
  console.log('handleChange: ', value)
}

const Demo8 = () => (
  <Select
    label="size:"
    innerAfter={<span style={{ color: '#999', marginRight: 4 }}>GB</span>}
    dataSource={dataSource}
    onChange={handleChange}
  />
)

export default Demo8

export const demoMeta = {
  zhName: '前后缀',
  zhDesc: 'Select 增加前后缀',
}
