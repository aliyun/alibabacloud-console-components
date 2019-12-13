import React from 'react'

import {
  Form,
  Input,
  Radio,
  Checkbox,
  DatePicker,
  Switch,
  Upload,
} from '@alicloud/console-components'

const RadioGroup = Radio.Group
const FormItem = Form.Item
const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 16,
  },
}

const submitHandle = e => {
  console.log(e)
}

const Demo16 = () => {
  return (
    <div>
      <Form {...formItemLayout} size="medium" style={{ maxWidth: '800px' }}>
        <FormItem required label="username:">
          <Input
            placeholder="Please enter your username"
            id="a11yUsername"
            name="a11yUsername"
            aria-required="true"
          />
        </FormItem>
        <FormItem required label="Password:">
          <Input
            htmlType="password"
            placeholder="Please enter your password"
            id="a11yPassword"
            name="a11yPassword"
            aria-required="true"
          />
        </FormItem>
        <FormItem
          id="myDateInput-1"
          required
          label="Accessible Date 1 (YYYY/MM/DD):"
          requiredMessage="Please select your date"
        >
          <DatePicker
            name="a11yDate"
            format="YYYY/MM/DD"
            inputProps={{ 'aria-required': 'true', id: 'myDateInput-1' }}
          />
        </FormItem>
        <FormItem
          required
          label="Accessible Date 2 (YYYY/MM/DD):"
          requiredMessage="Please select your date"
        >
          <DatePicker
            name="a11yOtherDate"
            format="YYYY/MM/DD"
            dateInputAriaLabel="Date input format YYYY/MM/DD"
            inputProps={{
              'aria-required': 'true',
              'aria-label': 'Accessible Date 2',
            }}
          />
        </FormItem>
        <FormItem label="Switch:">
          <Switch
            name="a11ySwitch"
            aria-label="Accessible Switch"
            defaultChecked
          />
        </FormItem>
        <FormItem
          required
          label="gender:"
          requiredMessage="Please select your gender"
        >
          <RadioGroup name="a11ySex">
            <Radio value="male" aria-required="true">
              Male
            </Radio>
            <Radio value="female" aria-required="true">
              Female
            </Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="Language:">
          <Checkbox.Group
            name="a11yLangs"
            aria-label="Please select a programming language"
          >
            <Checkbox value="python">python</Checkbox>
            <Checkbox value="java">java</Checkbox>
            <Checkbox value="angular">angular</Checkbox>
            <Checkbox value="c">c</Checkbox>
            <Checkbox value="other">other</Checkbox>
          </Checkbox.Group>
        </FormItem>
        <FormItem label="upload:">
          <Upload.Card
            listType="card"
            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
            accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
            defaultValue={[]}
            limit={2}
            name="a11yUpload"
          />
        </FormItem>
        <FormItem label="Note:">
          <Input.TextArea placeholder="description" name="a11yRemark" />
        </FormItem>
        <FormItem wrapperCol={{ offset: 5 }}>
          <Form.Submit
            validate
            type="primary"
            onClick={submitHandle}
            style={{ marginRight: 7 }}
          >
            Submit
          </Form.Submit>
          <Form.Reset style={{ marginLeft: 130 }}>Reset</Form.Reset>
        </FormItem>
      </Form>
    </div>
  )
}
export default Demo16

export const demoMeta = {
  zhName: `无障碍`,
  zhDesc:
    '对于必填项，在组件中要设置`aria-required`属性，并通过视觉设计上的高亮提示用户。 ',
}
