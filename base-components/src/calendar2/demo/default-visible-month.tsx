/**
 * @title 日历默认展示月份
 * @description 日历组件默认使用当前月作为展示的月份，用户可以可以通过 `defaultPanelValue` 属性进行定制。并可以通过 `onPanelChange` 属性监听面板可视月份的变化。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Calendar2 } from '@alicloudfe/components'
import dayjs from 'dayjs'

function onSelect(value) {
  console.log(value.format('L'))
}

function onPanelChange(value, reason) {
  console.log(
    'Visible month changed to %s from <%s>',
    value.format('YYYY-MM'),
    reason
  )
}

export default function DemoComponent() {
  const content = (
    <Calendar2
      onSelect={onSelect}
      defaultPanelValue={() => dayjs('2018-01', 'YYYY-MM', true)}
      onPanelChange={onPanelChange}
    />
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
