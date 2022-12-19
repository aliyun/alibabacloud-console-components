/**
 * @title 组合使用
 * @description 多组件混合使用
 */

import * as React from 'react'
import styled from 'styled-components'

import {
  Button,
  Checkbox,
  Input,
  Radio,
  Select,
  Range,
  DatePicker,
  TimePicker,
  Field
} from '@alicloudfe/components'

const CheckboxGroup = Checkbox.Group
const RadioGroup = Radio.Group

const list = [
  {
    value: 'apple',
    label: 'apple'
  },
  {
    value: 'pear',
    label: 'pear'
  },
  {
    value: 'orange',
    label: 'orange'
  }
]
const layout = {
  marginBottom: 10,
  width: 400
}

class App extends React.Component {
  field = new Field(this)

  render() {
    const { init, getValue } = this.field

    return (
      <div className="demo">
        <div style={{ marginBottom: 10 }}>
          <RadioGroup {...init('radiogroup', { initValue: 'a' })}>
            <Radio value="a">A</Radio>
            <Radio value="b">B</Radio>
            <Radio value="c">C</Radio>
            <Radio value="d">D</Radio>
          </RadioGroup>
        </div>

        {getValue('radiogroup') !== 'd' ? (
          <Select {...init('name', { initValue: 'lucy' })} style={layout}>
            <Select.Option value="jack">jack</Select.Option>
            <Select.Option value="lucy">lucy</Select.Option>
            <Select.Option value="disabled" disabled>
              disabled
            </Select.Option>
            <Select.Option value="hugohua">hugohua</Select.Option>
          </Select>
        ) : (
          <Input {...init('name', { initValue: 'frankqian' })} />
        )}
        <br />

        <Range
          style={{ ...layout, marginTop: 30 }}
          slider={'double'}
          scales={10}
          marks={10}
          {...init('range', { initValue: [20, 40] })}
        />

        <div style={{ marginBottom: 10 }}>
          <CheckboxGroup
            dataSource={list}
            {...init('checkboxgroup', { initValue: ['apple'] })}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <DatePicker {...init('datepicker')} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <DatePicker.RangePicker {...init('rangepicker')} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <TimePicker {...init('timepicker')} />
        </div>
        <Button
          type="primary"
          onClick={() => {
            console.log(this.field.getValues())
          }}
        >
          getValues
        </Button>
        <Button
          onClick={() => {
            this.field.setValues({
              name: 'hugohua',
              range: [30, 50],
              checkboxgroup: ['orange'],
              radiogroup: 'd'
            })
          }}
        >
          setValues
        </Button>
        <Button
          onClick={() => {
            this.field.reset()
          }}
        >
          reset
        </Button>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .demo .next-btn {
    margin-right: 5px;
  }
`
