import React from 'react'
import { Form, Input } from '@alicloud/console-components'

const FormItem = Form.Item

export default class Demo9 extends React.Component {
  onSubmit(e) {
    e.preventDefault()// form will auto submit if remove this line
    console.log('onsubmit')
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
        <FormItem >
          <Input placeholder="Enter Key can also trigger ‘onSubmit’"/>
        </FormItem>
        <Form.Submit htmlType="submit">submit</Form.Submit>
      </Form>
    )
  }
}