import React from 'react'
import { Select } from '@alicloud/console-components'

const { Option } = Select

const handleChange = value => {
  console.log('value:', value)
}

const Demo19 = () => (
  <div>
    <span id="select-a11y">Select: </span>
    <Select
      onChange={handleChange}
      defaultValue="jack"
      aria-labelledby="select-a11y"
    >
      <Option value="jack">Jack</Option>
      <Option value="frank">Frank</Option>
      <Option value="hugo">Hugo</Option>
    </Select>
  </div>
)

export default Demo19

export const demoMeta = {
  zhName: `无障碍`,
  zhDesc:
    '当聚焦在组件上时，通过`aria-labelledby`对组件进行描述。关于键盘操作请参考`ARIA and KeyBoard`。',
}
