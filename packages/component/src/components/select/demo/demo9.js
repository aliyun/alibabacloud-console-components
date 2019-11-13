import React, { Component } from 'react'
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

const Demo9 = () => (
  <Select
    useDetailValue
    defaultValue={{ value: '10001', label: 'Lucy King' }}
    onChange={handleChange}
    dataSource={dataSource}
    style={{ width: 150 }}
  />
)

export default Demo9
