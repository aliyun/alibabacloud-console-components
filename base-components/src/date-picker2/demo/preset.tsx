/**
 * @title 预设时间快捷选择
 * @description 通过`preset`预设时间快捷选择。
 */

import * as React from 'react'
import styled from 'styled-components'

import { DatePicker2 } from '@alicloudfe/components'
import dayjs from 'dayjs'

const { RangePicker } = DatePicker2
const RangePreset = {
  今天: [dayjs(), dayjs()],
  本月: [dayjs().startOf('month'), dayjs().endOf('month')]
}
const datePreset = {
  此刻: () => dayjs()
}

function App() {
  return (
    <div className="app">
      <div>
        <DatePicker2 preset={datePreset} />
      </div>
      <div>
        <DatePicker2 preset={datePreset} showTime />
      </div>
      <div>
        <RangePicker preset={RangePreset} />
      </div>
      <div>
        <RangePicker preset={RangePreset} showTime />
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
