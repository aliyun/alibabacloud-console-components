/**
 * @title 日期时间选择
 * @description 如果需要同时选择时间，可以通过 `showTime` 属性开启，`timePanelProps` 支持传入`TimePickerPanel`的属性，例如 `format`, `defaultValue` 等。
 */

import * as React from 'react'
import styled from 'styled-components'

import { DatePicker2 } from '@alicloudfe/components'
import dayjs from 'dayjs'

const { RangePicker } = DatePicker2
const onChange = (value) => console.log('onChange: ', value)
const onOk = (value) =>
  console.log('onOK: ', value.format('YYYY-MM-DD HH:mm:ss'))
const onRangeOk = (value) => console.log('onOk: [%s, %s]', ...value)

const defaultTimeValue = dayjs('09:00:00', 'HH:mm:ss', true)
const defaultTimeValues = [
  dayjs('09:00:00', 'HH:mm:ss', true),
  dayjs('23:59:59', 'HH:mm:ss', true)
]

export default function DemoComponent() {
  const content = (
    <div className="app">
      <div>
        <DatePicker2 showTime onChange={onChange} onOk={onOk} />
      </div>
      <div>
        <DatePicker2
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
