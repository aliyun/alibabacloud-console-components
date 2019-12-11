import React, { useState } from 'react'

import { Form, Input, Checkbox, Radio } from '@alicloud/console-components'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    fixedSpan: 10,
  },
  wrapperCol: {
    span: 14,
  },
}

const Demo17 = () => {
  const [device, setDevice] = useState('desktop')

  const handleDeviceChange = value => {
    setDevice(value)
  }

  return (
    <div>
      <Radio.Group shape="button" value={device} onChange={handleDeviceChange}>
        <Radio value="desktop">desktop</Radio>
        <Radio value="phone">phone</Radio>
      </Radio.Group>
      <hr />
      <Form style={{ width: '60%' }} {...formItemLayout} device={device}>
        <FormItem label="Username:">
          <p>Fixed Name</p>
        </FormItem>
        <FormItem label="password:">
          <Input
            htmlType="password"
            name="basePass"
            placeholder="Please Enter Password"
          />
        </FormItem>
        <FormItem label="Note:" help="something">
          <Input.TextArea placeholder="something" name="baseRemark" />
        </FormItem>
        <FormItem label="Agreement:">
          <Checkbox name="baseAgreement" defaultChecked>
            Agree
          </Checkbox>
        </FormItem>
        <FormItem label=" ">
          <Form.Submit>Confirm</Form.Submit>
        </FormItem>
      </Form>
    </div>
  )
}
export default Demo17

export const demoMeta = {
  zhName: `移动端`,
  zhDesc: `device=phone 下会强制设置 labelAlign=top`,
}
