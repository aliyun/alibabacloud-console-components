/**
 * @title 回车提交
 * @description 需要Form里面有 htmlType="submit" 的元素
 */

import * as React from 'react'
import styled from 'styled-components'

import { Form, Input } from '@alicloudfe/components'

const FormItem = Form.Item

class Demo extends React.Component {
  onSubmit(e) {
    e.preventDefault() // form will auto submit if remove this line
    console.log('onsubmit')
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
        <FormItem>
          <Input placeholder="Enter Key can also trigger ‘onSubmit’" />
        </FormItem>
        <Form.Submit htmlType="submit">submit</Form.Submit>
      </Form>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
