import React from 'react'
import { Form, Input, Select, Field } from '@alicloud/console-components'

const FormItem = Form.Item
const { Option } = Select
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
}

const Demo3 = () => {
  const myfield = Field.useField()
  const { getValue } = myfield
  return (
    <div>
      <Form
        {...formItemLayout}
        field={myfield}
        size={getValue('size')}
        style={{ maxWidth: '500px' }}
      >
        <FormItem label="Size:">
          <Select name="size" defaultValue="medium" style={{ width: '100%' }}>
            <Option value="small">small</Option>
            <Option value="medium">medium</Option>
            <Option value="large">large</Option>
          </Select>
        </FormItem>
        <FormItem label="Account:">
          <Input
            placeholder="Please enter your user name"
            id="userName"
            name="userName"
          />
        </FormItem>
        <FormItem required label="Password:">
          <Input
            htmlType="password"
            placeholder="Please enter your password"
            id="password"
            name="password"
          />
        </FormItem>
        <FormItem label="Password:" validateState="error">
          <Input
            htmlType="password"
            placeholder="Check your password"
            id="rePass"
            name="rePass"
          />
        </FormItem>
      </Form>
      <h6>水平方向</h6>
      <Form size={getValue('size')} inline field={myfield}>
        <FormItem label="Size:">
          <Select style={{ width: '100%' }} name="size">
            <Option value="small">small</Option>
            <Option value="medium">medium</Option>
            <Option value="large">large</Option>
          </Select>
        </FormItem>
        <FormItem label="Account:">
          <Input
            placeholder="Please enter your user name"
            id="userName2"
            name="userName2"
          />
        </FormItem>
        <FormItem label="Password:">
          <Input
            htmlType="password"
            placeholder="Please enter your password"
            id="password2"
            name="password2"
          />
        </FormItem>
        <FormItem label="Password:" validateState="error">
          <Input
            htmlType="password"
            placeholder="Check your password"
            id="rePass2"
            name="rePass2"
          />
        </FormItem>
      </Form>
    </div>
  )
}

export default Demo3

export const demoMeta = {
  zhName: '尺寸',
  zhDesc: `\`size\` 会强制设置 \`FormItem\` 下的所有组件的size

	\`labelAlign\` label方位
	
	\`labelTextAlign\` 文字左右对齐方式`,
}
