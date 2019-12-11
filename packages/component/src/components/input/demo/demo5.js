import React from 'react'
import { Input, Select, Button } from '@alicloud/console-components'

const { Option } = Select
const select = (
  <Select aria-label="please select">
    <Option value="https">https</Option>
    <Option value="http">http</Option>
  </Select>
)
const button = <Button>search</Button>

const Demo5 = () => (
  <div>
    <Input.Group addonBefore={select} addonAfter={button}>
      <Input
        hasClear
        defaultValue="abc"
        style={{ width: '100%' }}
        aria-label="please input"
      />
    </Input.Group>
    <br />
    <br />
    <Input
      addonTextAfter=".com"
      addonBefore={select}
      aria-label="please input"
    />
  </div>
)

export default Demo5

export const demoMeta = {
  zhName: '输入框组合',
  zhDesc:
    'Group 具有两边长度固定中间组件任意伸缩的能力。在Input中可以用addonBefore/addonAfter快速使用',
}
