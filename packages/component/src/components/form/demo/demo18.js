import React from 'react'

import { Form, Input, Radio } from '@alicloud/console-components'

const FormItem = Form.Item
const RadioGroup = Radio.Group

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

const Demo18 = () => {
  const userExists = (rule, value) => {
    return new Promise((resolve, reject) => {
      if (!value) {
        resolve()
      } else {
        setTimeout(() => {
          if (value === 'frank') {
            reject([new Error('Sorry, this username is already exist.')])
          } else {
            resolve()
          }
        }, 500)
      }
    })
  }

  return (
    <Form {...formItemLayout}>
      <FormItem label="Account:" hasFeedback validator={userExists} help="">
        <Input placeholder="Input frank" name="valUsername" />
        <Form.Error name="valUsername">
          {(errors, state) => {
            if (state === 'loading') {
              return 'loading...'
            }
            return errors
          }}
        </Form.Error>
      </FormItem>
      <FormItem
        label="Email:"
        hasFeedback
        required
        requiredTrigger="onBlur"
        format="email"
      >
        <Input placeholder="Both trigget onBlur and onChange" name="valEmail" />
      </FormItem>

      <FormItem
        label="Password:"
        hasFeedback
        required
        requiredMessage="Please enter password"
      >
        <Input htmlType="password" name="valPasswd" />
      </FormItem>

      <FormItem
        label="Gender:"
        hasFeedback
        required
        requiredMessage="Please select your gender"
      >
        <RadioGroup name="valSex">
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
        </RadioGroup>
      </FormItem>

      <FormItem
        label="Remarks:"
        required
        requiredMessage="Really do not intend to write anything?"
      >
        <Input.TextArea
          maxLength={20}
          hasLimitHint
          placeholder="Everything is ok!"
          name="valTextarea"
        />
      </FormItem>

      <FormItem wrapperCol={{ offset: 6 }}>
        <Form.Submit
          validate
          type="primary"
          onClick={(v, e) => console.log(v, e)}
          style={{ marginRight: 10 }}
        >
          Submit
        </Form.Submit>
        <Form.Reset>Reset</Form.Reset>
      </FormItem>
    </Form>
  )
}
export default Demo18

export const demoMeta = {
  zhName: `校验`,
  zhDesc: `基本的表单校验例子。`,
}
