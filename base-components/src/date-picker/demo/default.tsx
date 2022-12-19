/**
 * @title 提供默认值
 * @description 可以通过 `defaultValue` 属性为日期选择器提供初值，所提供的初值必须为 `moment` 对象。
 */

import * as React from 'react'
import styled from 'styled-components'

import { DatePicker } from '@alicloudfe/components'
import moment from 'moment'

const { RangePicker, MonthPicker, YearPicker } = DatePicker
const startValue = moment('2017-11-20', 'YYYY-MM-DD', true)
const endValue = moment('2017-12-15', 'YYYY-MM-DD', true)
const timeStamp = moment(1581938105000)
const onChange = (val) => console.log(val)

export default function DemoComponent() {
  const content = (
    <div>
      <DatePicker defaultValue={startValue} onChange={onChange} />
      <br />
      <br />
      <DatePicker defaultValue={timeStamp} onChange={onChange} />
      <br />
      <br />
      <MonthPicker defaultValue={startValue} onChange={onChange} />
      <br />
      <br />
      <YearPicker defaultValue={startValue} onChange={onChange} />
      <br />
      <br />
      <RangePicker
        type="year"
        defaultValue={[startValue, endValue]}
        onChange={onChange}
      />
      <br />
      <br />
      <RangePicker
        type="month"
        defaultValue={[startValue, endValue]}
        onChange={onChange}
      />
      <br />
      <br />
      <RangePicker defaultValue={[startValue, endValue]} onChange={onChange} />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
