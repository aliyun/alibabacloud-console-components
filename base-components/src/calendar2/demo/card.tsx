/**
 * @title 卡片日历
 * @description 卡片日历通常用来被嵌套在宽高受限的容器中。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Calendar2 } from '@alicloudfe/components'

function onDateChange(value) {
  console.log(value)
}

export default function DemoComponent() {
  const content = (
    <div className="wrapped-calendar">
      <Calendar2 onSelect={onDateChange} shape="card" />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #eee;
    border-radius: 3px;
  }
`
