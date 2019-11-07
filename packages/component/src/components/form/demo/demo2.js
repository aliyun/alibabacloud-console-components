import React from 'react'
import { Form, Input } from '@alicloud/console-components'
const FormItem = Form.Item;

function handleSubmit(v) {
  console.log(v);
}

const Demo2 = () => (
  <div>
    <Form inline>
      <FormItem label="Username:">
        <FormItem  >
          <Input name="first" style={{width: 80}} placeholder="first"/>
        </FormItem>
        <FormItem  >
          <Input name="second" style={{width: 80}} placeholder="second"/>
        </FormItem>
      </FormItem>
      <FormItem label="Password:" required hasFeedback={false}>
        <Input htmlType="password" name="pass" placeholder="Please enter your password!"/>
      </FormItem>
      <FormItem label=" ">
        <Form.Submit onSubmit={handleSubmit}>Submit</Form.Submit>
      </FormItem>
    </Form>
  </div>
)

export default Demo2