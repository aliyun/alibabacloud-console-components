/**
 * @title 日期时间选择
 * @description 如果需要同时选择时间，可以通过 `showTime` 属性开启，`showTime` 支持传入 `TimePickerPanel` 的属性，例如 `format`, `defaultValue` 等。
 */

import * as React from 'react'
import styled from 'styled-components'

import { DatePicker } from '@alicloudfe/components'
import moment from 'moment'

const { RangePicker } = DatePicker
const onChange = (value) => console.log(value)
const onOk = (value) =>
  console.log('onOK:', value.format('YYYY-MM-DD HH:mm:ss'))
const onRangeOk = (value) =>
  console.log(
    'onOk: [%s, %s]',
    value[0].format('YYYY-MM-DD HH:mm:ss'),
    value[1].format('YYYY-MM-DD HH:mm:ss')
  )

const defaultTimeValue = moment('09:00:00', 'HH:mm:ss', true)
const defaultTimeValues = [
  moment('09:00:00', 'HH:mm:ss', true),
  moment('23:59:59', 'HH:mm:ss', true)
]

export default function DemoComponent() {
  const content = (
    <div className="app">
      <div>
        <DatePicker showTime onChange={onChange} onOk={onOk} />
      </div>
      <div>
        <DatePicker
          showTime
          timePanelProps={{ defaultValue: defaultTimeValue, secondStep: 10 }}
          onChange={onChange}
          onOk={onOk}
        />
      </div>
      <div>
        <RangePicker showTime onChange={onChange} onOk={onRangeOk} />
      </div>
      <div>
        <RangePicker
          showTime
          timePanelProps={{
            defaultValue: defaultTimeValues,
            format: 'HH:mm',
            minuteStep: 15
          }}
          onChange={onChange}
          onOk={onRangeOk}
        />
      </div>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .app > div {
    margin-bottom: 20px;
  }
`
