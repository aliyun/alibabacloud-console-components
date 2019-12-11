import React from 'react'
import { Form, Input, Checkbox } from '@alicloud/console-components'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    fixedSpan: 10,
  },
  wrapperCol: {
    span: 14,
  },
}

const handleSubmit = values => {
  console.log('Get form value:', values)
}

const Demo1 = () => (
  <Form style={{ width: '60%' }} {...formItemLayout}>
    <FormItem label="userName:">
      <p>Fixed Name</p>
    </FormItem>
    <FormItem label="password:">
      <Input
        htmlType="password"
        name="pass"
        placeholder="Please Enter Password"
      />
    </FormItem>
    <FormItem label="Note:" help="something">
      <Input.TextArea placeholder="something" name="remark" />
    </FormItem>
    <FormItem label="Agreement:">
      <Checkbox name="agreement" defaultChecked>
        Agree
      </Checkbox>
    </FormItem>
    <FormItem label=" ">
      <Form.Submit onClick={handleSubmit}>Confirm</Form.Submit>
    </FormItem>
  </Form>
)

export default Demo1

export const demoMeta = {
  zhName: '基本',
  zhDesc: `拉伸浏览器的时候label宽度不变
	
	如果组件比较靠上，可以用 \`className="next-form-text-align"\` 做调整`,
}
