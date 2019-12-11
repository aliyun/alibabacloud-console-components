import React from 'react'
import { Form, Input } from '@alicloud/console-components'

const FormItem = Form.Item

const handleSubmit = e => {
  e.preventDefault() // form will auto submit if remove this line
  console.log('onsubmit')
}

const Demo9 = () => (
  <Form onSubmit={handleSubmit}>
    <FormItem>
      <Input placeholder="Enter Key can also trigger ‘onSubmit’" />
    </FormItem>
    <Form.Submit htmlType="submit">submit</Form.Submit>
  </Form>
)

export default Demo9

export const demoMeta = {
  zhName: '回车提交',
  zhDesc: '需要Form里面有 htmlType="submit" 的元素',
}
