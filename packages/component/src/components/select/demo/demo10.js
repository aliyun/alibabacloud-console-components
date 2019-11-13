import React, { Component } from 'react'
import { Select } from '@alicloud/console-components'

const dataSource = [
  'Lucy King',
  'Lily King',
  'Jim Green',
  {
    label: 'Chinese',
    children: [
      { value: 'Hang Meimei', label: 'Hang Meimei' },
      'Li Lei',
      { value: 'Gao Hui', label: 'Gao Hui', disabled: true },
      'Zhang San',
      'Li Si',
      'Wang Wu',
      { value: 'Zhao Benshan', label: 'Zhao Benshan', disabled: true },
      'Sun Yang',
      'Song Shuying',
    ],
  },
  {
    label: 'Pets',
    children: ['Poly', 'Kitty'],
  },
]

const onChange = v => {
  console.log(v)
}
const Demo10 = () => (
  <Select.AutoComplete
    style={{ width: 300 }}
    onChange={onChange}
    dataSource={dataSource}
  />
)
export default Demo10
