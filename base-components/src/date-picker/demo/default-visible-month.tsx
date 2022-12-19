/**
 * @title 面板的默认展现日期
 * @description 可以通过 `defaultVisibleMonth` 或 `defaultVisibleYear` 属性可以修改面板的默认展现日期。
 */

import * as React from 'react'
import styled from 'styled-components'

import { DatePicker } from '@alicloudfe/components'
import moment from 'moment'

const { RangePicker, MonthPicker } = DatePicker

function onVisibleMonthChange(val, reason) {
  console.log(val.format('L'), reason)
}

export default function DemoComponent() {
  const content = (
    <div>
      <p>Setting last month as default visible month</p>
      <DatePicker
        defaultVisibleMonth={() => moment().add(-1, 'months')}
        onVisibleMonthChange={onVisibleMonthChange}
      />
      <br />
      <br />
      <RangePicker
        defaultVisibleMonth={() => moment().add(-1, 'months')}
        onVisibleMonthChange={onVisibleMonthChange}
      />
      <br />
      <br />
      <p>Setting 2019 as default visible year</p>
      <MonthPicker defaultVisibleYear={() => moment('2019', 'YYYY')} />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
