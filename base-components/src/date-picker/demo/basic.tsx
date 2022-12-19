/**
 * @title 基本用法
 * @description 最基本的用法。可以通过 `onChange` 监听选中值的变化。
 */

import * as React from 'react'
import styled from 'styled-components'

import { DatePicker } from '@alicloudfe/components'

const { RangePicker, MonthPicker, YearPicker, WeekPicker } = DatePicker
const onChange = (val) => console.log(val)

export default function DemoComponent() {
  const content = (
    <div>
      <DatePicker onChange={onChange} /> <br />
      <br />
      <WeekPicker onChange={onChange} /> <br />
      <br />
      <MonthPicker onChange={onChange} /> <br />
      <br />
      <YearPicker onChange={onChange} /> <br />
      <br />
      <RangePicker onChange={onChange} />
      <br />
      <br />
      <RangePicker type="month" onChange={onChange} />
      <br />
      <br />
      <RangePicker type="year" onChange={onChange} />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
