import React from 'react'
import { Form, Input, Checkbox } from '@alicloud/console-components'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    fixedSpan: 10
  },
  wrapperCol: {
    span: 14
  }
}

export default class Demo1 extends React.Component {

  handleSubmit = (values) => {
    console.log('Get form value:', values);
  }

  render() {
    return (
      <Form style={{width: '60%'}} {...formItemLayout} >
        <FormItem label="userName:">
          <p>Fixed Name</p>
        </FormItem>
        <FormItem label="password:">
          <Input htmlType="password" name="pass" placeholder="Please Enter Password"/>
        </FormItem>
        <FormItem label="Note:" help="something">
          <Input.TextArea placeholder="something" name="remark" />
        </FormItem>
        <FormItem label="Agreement:">
          <Checkbox name="agreement" defaultChecked>Agree</Checkbox>
        </FormItem>
        <FormItem label=" ">
          <Form.Submit onClick={this.handleSubmit}>Confirm</Form.Submit>
        </FormItem>
      </Form>
    )
  }
}
