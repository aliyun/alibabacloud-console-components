import React from 'react'
import { Form, Input, Radio, Field } from '@alicloud/console-components'

const FormItem = Form.Item
const RadioGroup = Radio.Group

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
}

export default class Demo11 extends React.Component {
  field = new Field(this)
  userExists(rule, value) {
    return new Promise((resolve, reject) => {
      if (!value) {
        resolve()
      } else {
        setTimeout(() => {
          if (value === 'frank') {
            reject([new Error('Sorry, this username is already occupied.')])
          } else {
            resolve()
          }
        }, 500)
      }
    })
  }

  checkPass(rule, value, callback) {
    const { validate } = this.field
    if (value) {
      validate(['rePasswd'])
    }
      callback()
    }

  checkPass2(rule, value, callback) {
    const { getValue } = this.field;
    if (value && value !== getValue('passwd')) {
      callback('Inconsistent password input twice!')
    } else {
      callback()
    }
  }

  render() {
    const {getState, getError} = this.field

    return (
      <Form {...formItemLayout} field={this.field}>
        <FormItem
          label="Account:"
          hasFeedback
          validator={this.userExists.bind(this)}
          help={getState('username') === 'loading' ? 'Checking ...' : getError('username')}
        >
          <Input placeholder="Input frank" name="username" />
        </FormItem>
        <FormItem
          label="Email:"
          hasFeedback
          required
          requiredTrigger="onBlur"
          format="email"
        >
          <Input placeholder="Both trigget onBlur and onChange" name="email" />
        </FormItem>

        <FormItem
          label="Password:"
          hasFeedback
          required
          requiredMessage="Please enter password"
          validator={this.checkPass.bind(this)}
        >
          <Input htmlType="password" name="passwd" />
        </FormItem>

        <FormItem
          label="Check your password:"
          hasFeedback
          required
          requiredMessage="Enter your password again"
          validator={this.checkPass2.bind(this)}
        >
          <Input htmlType="password" placeholder="Enter the same password twice" name="rePasswd" />
        </FormItem>

        <FormItem
          label="Gender:"
          hasFeedback
          required
          requiredMessage="Please select your gender"
        >
          <RadioGroup name="sex" >
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </RadioGroup>
        </FormItem>

        <FormItem
          label="Remarks:"
          required
          requiredMessage="Really do not intend to write anything?"
        >
          <Input.TextArea maxLength={20} hasLimitHint placeholder="Everything is ok!" name="textarea" />
        </FormItem>

        <FormItem wrapperCol={{ offset: 6 }} >
          <Form.Submit validate type="primary" onClick={(v, e) => console.log(v, e)} style={{marginRight: 10}}>Submit</Form.Submit>
          <Form.Reset >Reset</Form.Reset>
        </FormItem>
      </Form>
    )
  }
}
