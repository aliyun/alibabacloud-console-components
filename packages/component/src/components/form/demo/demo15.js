import React from 'react'

import { Form, Input, Select } from '@alicloud/console-components'

const FormItem = Form.Item

const { Option } = Select

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
}

const Demo15 = () => (
  <Form {...formItemLayout}>
    <FormItem label="userName:">
      <Input />
    </FormItem>
    <FormItem label="password:">
      <Input
        htmlType="password"
        name="resPass"
        placeholder="Please Enter Password"
      />
    </FormItem>
    <FormItem label="Country:">
      <Select placeholder="Please select a country" style={{ width: '100%' }}>
        <Option value="china">China</Option>
        <Option value="use">United States</Option>
        <Option value="japan">Japan</Option>
        <Option value="korean">South Korea</Option>
        <Option value="Thailand">Thailand</Option>
      </Select>
    </FormItem>
    <FormItem label="Note:" help="something">
      <Input.TextArea placeholder="something" name="resReremark" />
    </FormItem>
    <FormItem label=" ">
      <Form.Submit>Submit</Form.Submit>
    </FormItem>
  </Form>
)

export default Demo15

export const demoMeta = {
  zhName: `响应式`,
  zhDesc: `可以通过配置 \`labelCol\` \`wrapperCol\` 的 \`Grid.Col\` 响应式属性实现响应式`,
}
