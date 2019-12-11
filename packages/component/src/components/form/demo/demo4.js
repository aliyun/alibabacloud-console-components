import React from 'react'
import { Form, Input, Select, Field } from '@alicloud/console-components'

const FormItem = Form.Item
const { Option } = Select

export default class Demo4 extends React.Component {
  field = new Field(this)

  render() {
    const { getValue } = this.field
    return (
      <div>
        <Form size={getValue('size')} field={this.field} labelAlign="top">
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
              placeholder="Please enter your password"
              id="rePass"
              name="rePass"
            />
          </FormItem>

          <FormItem label="Size:">
            <Select defaultValue="medium" style={{ width: '100%' }} name="size">
              <Option value="small">small</Option>
              <Option value="medium">medium</Option>
              <Option value="large">large</Option>
            </Select>
          </FormItem>
        </Form>
        <Form
          size={getValue('size')}
          field={this.field}
          inline
          labelAlign="top"
        >
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
              placeholder="Please enter your password"
              id="rePass2"
              name="rePass2"
            />
          </FormItem>
          <FormItem label="Size:">
            <Select defaultValue="medium" style={{ width: '100%' }} name="size">
              <Option value="small">small</Option>
              <Option value="medium">medium</Option>
              <Option value="large">large</Option>
            </Select>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export const demoMeta = {
  zhName: '标签在上',
  zhDesc: `\`size\` 会强制设置 \`FormItem\` 下的所有组件的size

	\`labelAlign\` label方位
	
	\`labelTextAlign\` 文字左右对齐方式`,
}
