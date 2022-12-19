/**
 * @title 无边框
 * @description 无边框样式。
 */

import * as React from 'react'
import styled from 'styled-components'

import { DatePicker2 } from '@alicloudfe/components'

const { RangePicker } = DatePicker2

function App() {
  return (
    <div className="app">
      <div>
        <DatePicker2 hasBorder={false} />
      </div>
      <div>
        <RangePicker hasBorder={false} />
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
