import React from 'react'
import { Select } from '@alicloud/console-components'

const { Option } = Select

const onChange = value => {
  console.log(value)
}
const onBlur = e => {
  console.log(/onblur/, e)
}

const onToggleHighlightItem = (item, type) => {
  console.log(item, type)
}

const Demo1 = () => (
  <Select
    id="basic-demo"
    onChange={onChange}
    onBlur={onBlur}
    onToggleHighlightItem={onToggleHighlightItem}
    defaultValue="jack"
    aria-label="name is"
    showSearch
    hasClear
  >
    <Option value="jack">Jack</Option>
    <Option value="frank">Frank</Option>
    <Option value="hugo">Hugo</Option>
  </Select>
)

export default Demo1

export const demoMeta = { zhName: `基本使用`, zhDesc: `简单` }
