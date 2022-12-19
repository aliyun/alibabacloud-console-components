/**
 * @title 日历默认展示月份
 * @description 日历组件默认使用当前月作为展示的月份，用户可以可以通过 `defaultVisibleMonth` 属性进行定制。并可以通过 `onVisibleMonthChange` 属性监听面板可视月份的变化。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Calendar } from '@alicloudfe/components'
import moment from 'moment'

function onSelect(value) {
  console.log(value.format('L'))
}

function onVisibleMonthChange(value, reason) {
  console.log(
    'Visible month changed to %s from <%s>',
    value.format('YYYY-MM'),
    reason
  )
}

export default function DemoComponent() {
  const content = (
    <Calendar
      onSelect={onSelect}
      defaultVisibleMonth={() => moment('2018-01', 'YYYY-MM', true)}
      onVisibleMonthChange={onVisibleMonthChange}
    />
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
