import React from 'react'
import { Select } from '@alicloud/console-components'

const { Option } = Select

const onChange = function(value) {
  console.log(value)
}

const Demo1 = () => (
  <Select onChange={onChange} defaultValue="jack">
    <Option value="jack">Jack</Option>
    <Option value="frank">Frank</Option>
    <Option value="hugo">Hugo</Option>
  </Select>
)

export default Demo1
