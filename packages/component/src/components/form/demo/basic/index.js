import React, { Component } from 'react'
import { Form, Input, Select, Field } from '@alicloud/console-components'
import './index.less'

const FormItem = Form.Item
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
}

class Demo extends Component {
  field = new Field(this)

  render() {
    const { init, getValue } = this.field || {}

    return (
      <div>
        <Form inline className="demo-ctl" field={this.field}>
          <FormItem label="大小">
            <Select {...init('size', { initValue: 'medium' })} >
              <div value="small">small</div>
              <div value="medium">medium</div>
              <div value="large">large</div>
            </Select>
          </FormItem>
        </Form>

        <h3>垂直</h3>

        <Form
          field={this.field} size={getValue('size')} labelAlign="top"
          style={{ maxWidth: '500px' }}
        >
          <FormItem label="选择内容">
            我是选择文字描述
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="账户"
          >
            <Input placeholder="请输入账户名" id="userName" name="userName" />
          </FormItem>

          <FormItem
            {...formItemLayout}
            required
            label="密码"
          >
            <Input
              htmlType="password"
              placeholder="请输入密码"
              id="password"
              name="password"
            />
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="密码"
            validateState="error"
            help="密码不能为空"
          >
            <Input
              htmlType="password"
              placeholder="请输入密码"
              id="password"
              name="password"
            />
          </FormItem>
          <FormItem label="备注：" {...formItemLayout} help="随便写点什么">
            <Input multiple placeholder="随便写" {...init('remark')} />
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="大小"
          >
            <Select style={{ width: '100%' }} {...init('size')}>
              <div value="small">small</div>
              <div value="medium">medium</div>
              <div value="large">large</div>
            </Select>
          </FormItem>
        </Form>

        <h3>水平</h3>

        <Form size={getValue('size')} inline labelAlign="top">
          <FormItem label="账户">
            <Input placeholder="请输入账户名" id="userName" name="userName" />
          </FormItem>

          <FormItem label="密码">
            <Input htmlType="password" placeholder="请输入密码" id="password" name="password" />
          </FormItem>
          <FormItem label="密码" validateState="error" help="密码不能为空">
            <Input htmlType="password" placeholder="请输入密码" id="password" name="password" />
          </FormItem>

          <FormItem label="大小">
            <Select style={{ width: '100%' }} {...init('size')}>
              <div value="small">small</div>
              <div value="medium">medium</div>
              <div value="large">large</div>
            </Select>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Demo
