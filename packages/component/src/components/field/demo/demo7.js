import React from 'react'
import { Button, Checkbox, Radio, Select, Range, DatePicker, TimePicker, Field } from '@alicloud/console-components'

const { Group: CheckboxGroup } = Checkbox
const { Group: RadioGroup } = Radio

const list = [
  {
    value: 'apple',
    label: 'apple'
  }, {
    value: 'pear',
    label: 'pear'
  }, {
    value: 'orange',
    label: 'orange'
  }
]

const layout = {
  marginBottom: 10,
  width: 400
}

export default class Demo7 extends React.Component {
  field = new Field(this, {
    deepReset: true
  })

  render() {
    const init = this.field.init;

    return (
      <div className="demo">
        <Select {...init('select', {initValue: 'lucy'})} style={layout}>
          <Select.Option value="jack">jack</Select.Option>
          <Select.Option value="lucy">lucy</Select.Option>
          <Select.Option value="disabled" disabled>disabled</Select.Option>
          <Select.Option value="hugohua">hugohua</Select.Option>
        </Select><br/>

        <Range style={{...layout, marginTop: 30}} slider={'double'} scales={10}
          marks={10}  {...init('range', {initValue: [20, 40]})}/>

        <div style={{marginBottom: 10}}>
          <CheckboxGroup dataSource={list}  {...init('checkboxgroup', {initValue: ['apple']})} />
        </div>
        <div style={{marginBottom: 10}}>
          <RadioGroup {...init('radiogroup', {initValue: 'b'})} >
            <Radio value="a">A</Radio>
            <Radio value="b">B</Radio>
            <Radio value="c">C</Radio>
            <Radio value="d">D</Radio>
          </RadioGroup>
        </div>
        <div style={{marginBottom: 10}}>
          <DatePicker />
        </div>
        <div style={{marginBottom: 10}}>
          <DatePicker.RangePicker />
        </div>
        <div style={{marginBottom: 10}}>
          <TimePicker />
        </div>
        <Button type="primary" onClick={() => {
          console.log(this.field.getValues());
          }}>getValues
        </Button>
        <Button onClick={() => {
          this.field.setValues({
          select: 'hugohua',
          range: [30, 50],
          checkboxgroup: ['orange'],
          radiogroup: 'd'
          })
          }}>setValues
        </Button>
        <Button onClick={() => {
          this.field.reset();
          }}>reset
        </Button>
      </div>
    )
  }
}
