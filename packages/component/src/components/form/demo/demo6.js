import React from 'react'
import { Form, Input, Button, Checkbox, Radio, Select, Range, Balloon, DatePicker, TimePicker, NumberPicker, Field, Switch, Upload, Grid } from '@alicloud/console-components'

const FormItem = Form.Item
const Option = Select.Option
const RangePicker = DatePicker.RangePicker
const {Row, Col} = Grid

const formItemLayout = {
  labelCol: {span: 6},
  wrapperCol: {span: 14},
}

export default class Demo6 extends React.Component {
  field = new Field(this)

  handleSubmit(value) {
    console.log('Form values：', value)
  }

  render() {
    const init = this.field.init;
    return (
      <Form {...formItemLayout} field={this.field}>
        <FormItem label="I'm the title：">
          <p className="next-form-text-align">The quick brown fox jumps over the lazy dog.</p>
          <p ><a href="#">Link</a></p>
        </FormItem>
        <FormItem label="Password:">
          <Balloon trigger={<Input htmlType="password" {...init('pass')} />} align="r" closable={false} triggerType="hover">
            input password
          </Balloon>
        </FormItem>
        <FormItem label="NumberPicker:">
          <NumberPicker min={1} max={10} name="numberPicker" defaultValue={3} />
          <span>Something in here</span>
        </FormItem>
        <FormItem
          label="Switch:"
          required>
          <Switch name="switch" defaultChecked />
        </FormItem>
        <FormItem label="Range:" required>
          <Range defaultValue={30} scales={[0, 100]} marks={[0, 100]} name="range" />
        </FormItem>
        <FormItem  label="Select:" required>
          <Select style={{width: 200}} name="select">
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
            <Option value="disabled" disabled>disabled</Option>
            <Option value="hugohua">hugohua</Option>
          </Select>
        </FormItem>
        <FormItem
          label="DatePicker:"
          labelCol={{span: 6}}
          required>
          <Row>
            <FormItem style={{marginRight: 10, marginBottom: 0}}><DatePicker name="startDate"/></FormItem>
            <FormItem style={{marginBottom: 0}}><DatePicker name="endDate" /></FormItem>
          </Row>
        </FormItem>
        <FormItem
          label="RangePicker:"
          labelCol={{span: 6}}
          required>
          <RangePicker name="rangeDate"/>
        </FormItem>

        <FormItem
          label="TimePicker:"
          required>
          <TimePicker name="time" />
        </FormItem>

        <FormItem
          label="Checkbox:">
          <Checkbox.Group name="checkbox">
            <Checkbox value="a">option 1 </Checkbox>
            <Checkbox value="b">option 2 </Checkbox>
            <Checkbox disabled value="c">option 3（disabled）</Checkbox>
          </Checkbox.Group>
        </FormItem>

        <FormItem
          label="Radio:">
          <Radio.Group name="radio">
            <Radio value="apple">apple</Radio>
            <Radio value="banana">banana</Radio>
            <Radio disabled value="cherry">cherry（disabled）</Radio>
          </Radio.Group>
        </FormItem>
        <FormItem
          label="Logo："
        >
          <Upload action="/upload.do" listType="text" name="upload" >
            <Button type="primary" style={{margin: '0 0 10px'}}>Upload</Button>
          </Upload>
        </FormItem>
        <Row style={{marginTop: 24}}>
          <Col offset="6">
            <Form.Submit type="primary" onClick={this.handleSubmit.bind(this)}>Submit</Form.Submit>
          </Col>
        </Row>
      </Form>
    )
  }
}