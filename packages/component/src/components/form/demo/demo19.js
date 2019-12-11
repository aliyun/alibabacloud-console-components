import React from 'react'

import { Form, Input, Field } from '@alicloud/console-components'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

const Demo19 = () => {
  const myField = Field.useField()

  const { init } = myField
  return (
    <Form {...formItemLayout} field={myField}>
      <Form.Item label="test" key="test2">
        <Input
          {...init('input', {
            rules: [
              {
                validator(_rule, value, callback) {
                  callback(
                    <span>
                      This is a <em>CUSTOM</em> error
                    </span>
                  )
                },
              },
            ],
          })}
        />
      </Form.Item>
      <FormItem wrapperCol={{ offset: 6 }}>
        <Form.Submit validate type="primary">
          Submit
        </Form.Submit>
        <Form.Reset>Reset</Form.Reset>
      </FormItem>
    </Form>
  )
}
export default Demo19

export const demoMeta = {
  zhName: `校验`,
  zhDesc: `基本的表单校验例子。`,
}
