import React from 'react'
import { Select } from '@alicloud/console-components'

const { Option } = Select

const onChange = function(value) {
  console.log(value)
}

function generateItem(index) {
  return { label: `option${index}`, value: `option${index}` }
}

function generateOption(index) {
  return (
    <Option
      key={`option${index}`}
      value={`option${index}`}
    >{`option${index}`}</Option>
  )
}

function generateData(len, isOption) {
  const data = []

  for (let i = 0; i < len; i++) {
    isOption ? data.push(generateOption(i)) : data.push(generateItem(i))
  }

  return data
}

const Demo18 = () => (
  <div>
    <Select
      dataSource={generateData(100)}
      useVirtual
      onChange={onChange}
      defaultValue="option0"
    />
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Select useVirtual onChange={onChange} defaultValue="option50">
      {generateData(100, true)}
    </Select>
  </div>
)

export default Demo18

export const demoMeta = {
  zhName: `虚拟滚动`,
  zhDesc: `select 配合虚拟滚动`,
}
