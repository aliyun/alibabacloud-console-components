/**
 * @title 格式化
 * @description 使用`format`属性，可以自定义日期显示格式。
 */

import * as React from 'react'
import styled from 'styled-components'

import { DatePicker2 } from '@alicloudfe/components'

const { RangePicker } = DatePicker2

const now = new Date()

function customizeFormatter(v) {
  return `custom: ${v.format('YYYY/MM/DD')}`
}

function App() {
  return (
    <div className="app">
      <div>
        <DatePicker2 defaultValue={now} format="YYYY/MM/DD" />
      </div>
      <div>
        <DatePicker2 defaultValue={now} showTime format="YYYY/MM/DD HH:mm:ss" />
      </div>
      <div>
        <DatePicker2
          defaultValue={now}
          format="YYYY/MM/DD HH:mm"
          showTime
          timePanelProps={{ format: 'HH:mm' }}
        />
      </div>
      <div>
        <RangePicker defaultValue={[now, now]} format="YYYY/MM/DD" />
      </div>
      <div>
        <RangePicker
          defaultValue={[now, now]}
          format="YYYY/MM/DD HH:mm:ss"
          showTime
        />
      </div>
      <div>
        <DatePicker2 defaultValue={now} format={customizeFormatter} />
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
