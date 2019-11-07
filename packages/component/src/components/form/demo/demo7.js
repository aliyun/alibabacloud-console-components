import React from 'react'
import { Form, Input, Grid } from '@alicloud/console-components'

const FormItem = Form.Item
const {Row, Col} = Grid

const formItemLayout = {
  labelCol: {span: 4},
  wrapperCol: {span: 14},
}

const insetLayout = {
  labelCol: {fixedSpan: 3},
}

const Demo7 = () => (
  <Form {...formItemLayout}>
    <FormItem id="control-input" label="Input Something：">
      <Row gutter="4">
        <Col>
          <FormItem label="Nest" labelAlign="inset" {...insetLayout} required requiredTrigger="onBlur" asterisk={false}>
            <Input placeholder="Please enter..."  name="firstname"/>
          </FormItem>
        </Col>
        <Col>
          <FormItem label="Nest" labelAlign="inset" {...insetLayout} required asterisk={false}>
            <Input placeholder="need onChange"  name="secondname" />
          </FormItem>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="Bank Account：" >
      <Row gutter="4">
        <Col>
          <FormItem required requiredTrigger="onBlur">
            <Input name="A"/>
          </FormItem>
        </Col>
        <Col>
          <FormItem required requiredTrigger="onBlur">
            <Input name="B"/>
          </FormItem>
        </Col>
        <Col>
          <FormItem required requiredTrigger="onBlur">
            <Input name="C"/>
          </FormItem>
        </Col>
        <Col>
          <FormItem required requiredTrigger="onBlur">
            <Input name="D"/>
          </FormItem>
        </Col>
      </Row>
    </FormItem>
    <FormItem label=" ">
      <Form.Submit onClick={(v) => console.log(v)}>Submit</Form.Submit>
    </FormItem>
  </Form>
)

export default Demo7