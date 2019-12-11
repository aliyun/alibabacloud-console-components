import React from 'react'
import {
  Form,
  Input,
  DatePicker,
  TimePicker,
  NumberPicker,
  Select,
} from '@alicloud/console-components'

const FormItem = Form.Item

const { Option } = Select

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

const Demo10 = () => (
  <Form {...formItemLayout}>
    <FormItem
      label="Input Error："
      validateState="error"
      help="Please enter a numeric and alphabetic string"
    >
      <Input defaultValue="Invalid choice" />
    </FormItem>

    <FormItem
      label="Loading："
      hasFeedback
      validateState="loading"
      help="Information Checking..."
    >
      <Input defaultValue="Checking" />
    </FormItem>

    <FormItem label="Success：" hasFeedback validateState="success">
      <Input defaultValue="Successful verification" />
    </FormItem>

    <FormItem
      label="Datepicker："
      validateState="error"
      help="Please select the correct date"
    >
      <DatePicker />
    </FormItem>

    <FormItem
      label="Timepicker："
      validateState="error"
      help="Please select the correct time"
    >
      <TimePicker />
    </FormItem>

    <FormItem
      label="Select："
      validateState="error"
      help="Please select a country"
    >
      <Select placeholder="Please select a country">
        <Option value="china">China</Option>
        <Option value="use">United States</Option>
        <Option value="japan">Japan</Option>
        <Option value="korean">South Korea</Option>
        <Option value="Thailand">Thailand</Option>
      </Select>
    </FormItem>

    <FormItem label="NumberPicker：" validateState="error">
      <NumberPicker defaultValue={0} />
    </FormItem>
  </Form>
)

export default Demo10

export const demoMeta = {
  zhName: `校验提示`,
  zhDesc: `为 \`<FormItem>\` 定义 \`state\` 属性控制三种校验状态。

	如果是  \`<Input>\` 组件, 可在\`<FormItem>\`上面添加 \`hasFeedback\` 控制图标的展示
	
	**注意**: 反馈图标只对 \`<Input />\` 有效。`,
}
