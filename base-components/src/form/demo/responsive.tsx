/**
 * @title 响应式
 * @description 可以通过配置 `labelCol` `wrapperCol` 的 `Grid.Col` 响应式属性实现响应式
 */

import * as React from 'react'
import styled from 'styled-components'

import { Form, Input, Select } from '@alicloudfe/components'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: { xxs: 4, l: 4 },
  wrapperCol: { xxs: 20, l: 16 }
}

export default function DemoComponent() {
  const content = (
    <Form {...formItemLayout}>
      <FormItem label="userName:">
        <Input />
      </FormItem>
      <FormItem label="password:">
        <Input
          htmlType="password"
          name="resPass"
          placeholder="Please Enter Password"
        />
      </FormItem>
      <FormItem label="Country:">
        <Select placeholder="Please select a country" style={{ width: '100%' }}>
          <option value="china">China</option>
          <option value="use">United States</option>
          <option value="japan">Japan</option>
          <option value="korean">South Korea</option>
          <option value="Thailand">Thailand</option>
        </Select>
      </FormItem>
      <FormItem label="Note:" help="something">
        <Input.TextArea placeholder="something" name="resReremark" />
      </FormItem>
      <FormItem label=" ">
        <Form.Submit>Submit</Form.Submit>
      </FormItem>
    </Form>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
