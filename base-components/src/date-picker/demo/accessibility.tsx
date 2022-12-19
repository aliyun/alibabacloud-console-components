/**
 * @title 无障碍支持
 * @description 支持手动输入或键盘操作，请参考[#无障碍键盘操作指南](#无障碍键盘操作指南)。
 */

import * as React from 'react'
import styled from 'styled-components'

import { DatePicker } from '@alicloudfe/components'

const { RangePicker, MonthPicker, YearPicker } = DatePicker
const onChange = (val) => console.log(val)

export default function DemoComponent() {
  const content = (
    <div>
      <DatePicker
        dateInputAriaLabel="date input"
        inputProps={{ 'aria-label': 'date picker main' }}
        onChange={onChange}
      />
      <br />
      <br />
      <RangePicker
        startDateInputAriaLabel="start date"
        startTimeInputAriaLabel="start time"
        endDateInputAriaLabel="end date"
        endTimeInputAriaLabel="end time"
        onChange={onChange}
        inputProps={{ 'aria-label': 'range picker main' }}
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
