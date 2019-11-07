import React from 'react'
import { Form, Input, Select, Field } from '@alicloud/console-components'

const FormItem = Form.Item
const Option = Select.Option
const formItemLayout = {
  labelCol: {span: 4},
  wrapperCol: {span: 20}
}

export default class Demo3 extends React.Component {
  field = new Field(this);

  render() {
    const { getValue } = this.field;

    return (
      <div>
        <Form {...formItemLayout} field={this.field} size={getValue('size')} style={{maxWidth: '500px'}}>
          <FormItem label="Size:">
            <Select name="size" defaultValue="medium" style={{width: '100%'}}>
              <Option value="small">small</Option>
              <Option value="medium">medium</Option>
              <Option value="large">large</Option>
            </Select>
          </FormItem>
          <FormItem label="Account:">
            <Input placeholder="Please enter your user name" id="userName" name="userName"/>
          </FormItem>
          <FormItem required label="Password:">
            <Input htmlType="password" placeholder="Please enter your password" id="password" name="password"/>
          </FormItem>
          <FormItem label="Password:" validateState="error">
            <Input htmlType="password" placeholder="Check your password" id="rePass" name="rePass"/>
          </FormItem>
        </Form>
        <br/><br/>
        <Form size={getValue('size')} inline field={this.field}>
          <FormItem label="Size:">
            <Select style={{width: '100%'}} name="size">
              <Option value="small">small</Option>
              <Option value="medium">medium</Option>
              <Option value="large">large</Option>
            </Select>
          </FormItem>
          <FormItem label="Account:">
            <Input placeholder="Please enter your user name" id="userName2" name="userName2"/>
          </FormItem>
          <FormItem label="Password:">
            <Input htmlType="password" placeholder="Please enter your password" id="password2" name="password2"/>
          </FormItem>
          <FormItem label="Password:" validateState="error">
            <Input htmlType="password" placeholder="Check your password" id="rePass2" name="rePass2"/>
          </FormItem>
        </Form>
      </div>
    )
  }
}
