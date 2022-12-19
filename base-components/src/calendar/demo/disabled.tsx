/**
 * @title 禁用日期
 * @description 可以通过 `disabledDate` 属性禁止用户选择某些日期。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Calendar } from '@alicloudfe/components'
import moment from 'moment'

const currentDate = moment()
const disabledDate = function (date) {
  return date.valueOf() > currentDate.valueOf()
}

export default function DemoComponent() {
  const content = (
    <div className="wrapped-calendar">
      <Calendar disabledDate={disabledDate} shape="card" />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #c4c6cf;
    border-radius: 3px;
    padding: 8px;
  }
`
