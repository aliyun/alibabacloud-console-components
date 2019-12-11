import React, { useState } from 'react'

import { Form, Input } from '@alicloud/console-components'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: { fixedSpan: 3 },
  wrapperCol: { span: 20 },
}

const handleSubmit = (values, errors) => {
  if (errors) {
    return
  }
  console.log('Get form value:', values)
}

const Demo14 = () => {
  const [code, setCode] = useState('')
  const [second, setSecond] = useState(60)

  const sendCode = (values, errors) => {
    if (errors) {
      return
    }

    setCode(Math.floor(Math.random() * (999999 - 99999 + 1) + 99999))

    setInterval(() => {
      setSecond(second - 1)
    }, 1000)
  }

  return (
    <Form
      style={{ width: 400 }}
      {...formItemLayout}
      labelTextAlign="left"
      size="large"
      labelAlign="inset"
    >
      <FormItem label="name" required asterisk={false}>
        <Input name="username" trim defaultValue="frank" />
      </FormItem>
      <FormItem label="phone" format="tel" required asterisk={false}>
        <Input
          name="phone"
          trim
          innerAfter={
            <Form.Submit
              text
              type="primary"
              disabled={!!code}
              validate={['phone']}
              onClick={sendCode}
              style={{ marginRight: 10 }}
            >
              {code ? `retry after ${second}s` : 'send code'}
            </Form.Submit>
          }
        />
      </FormItem>
      {code ? (
        <FormItem label="code" required asterisk={false}>
          <Input name="code" trim defaultValue={code} />
        </FormItem>
      ) : null}

      <FormItem label=" ">
        <Form.Submit
          style={{ width: '100%' }}
          type="primary"
          validate
          onClick={handleSubmit}
        >
          Submit
        </Form.Submit>
      </FormItem>
    </Form>
  )
}

export default Demo14

export const demoMeta = {
  zhName: '注册',
  zhDesc: '验证码获取',
}
