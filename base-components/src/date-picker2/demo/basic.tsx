/**
 * @title 基本用法
 * @description 最基本的用法。可以通过 `onChange` 监听选中值的变化。
 */

import * as React from 'react'
import styled from 'styled-components'

import { DatePicker2 } from '@alicloudfe/components'

const { MonthPicker, YearPicker, WeekPicker, QuarterPicker } = DatePicker2

const onChange = (date, dateStr) => console.log(date, dateStr)

function App() {
  return (
    <div className="app">
      <div>
        <DatePicker2 onChange={onChange} />
      </div>
      <div>
        <MonthPicker onChange={onChange} />
      </div>
      <div>
        <YearPicker onChange={onChange} />
      </div>
      <div>
        <WeekPicker onChange={onChange} />
      </div>
      <div>
        <QuarterPicker onChange={onChange} />
      </div>
    </div>
  )
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .app > div {
    margin-bottom: 20px;
  }
`
