/**
 * @title 禁用日期
 * @description 可以通过 `disabledDate` 属性禁止用户选择某些日期。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Calendar2 } from '@alicloudfe/components'
import dayjs from 'dayjs'

const currentDate = dayjs()
const disabledDate = function (date) {
  return date.valueOf() > currentDate.valueOf()
}

export default function DemoComponent() {
  const content = (
    <div className="wrapped-calendar">
      <Calendar2 disabledDate={disabledDate} shape="card" />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #f0f0f0;
    border-radius: 3px;
    padding: 8px;
  }
`
