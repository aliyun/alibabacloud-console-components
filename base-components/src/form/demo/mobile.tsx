/**
 * @title 移动端
 * @description device=phone 下会强制设置 labelAlign=top
 */

import * as React from 'react'
import styled from 'styled-components'

import { Form, Input, Checkbox, Switch, Radio } from '@alicloudfe/components'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    fixedSpan: 10
  },
  wrapperCol: {
    span: 14
  }
}

class Demo extends React.Component {
  state = {
    device: 'desktop'
  }

  handleDeviceChange = (device) => {
    this.setState({
      device
    })
  }

  render() {
    return (
      <div>
        <Radio.Group
          shape="button"
          value={this.state.device}
          onChange={this.handleDeviceChange}
        >
          <Radio value="desktop">desktop</Radio>
          <Radio value="phone">phone</Radio>
        </Radio.Group>
        <hr />
        <Form
          style={{ width: '60%' }}
          {...formItemLayout}
          device={this.state.device}
        >
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
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
