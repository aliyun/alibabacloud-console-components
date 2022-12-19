/**
 * @title 预设
 * @description 预设
 */

import * as React from 'react'
import styled from 'styled-components'

import { useState } from 'react'
import dayjs from 'dayjs'
import { TimePicker2 } from '@alicloudfe/components'

const preset = [
  {
    label: '此刻',
    value: () => new Date()
  }
]

function Picker() {
  const [value, onChange] = useState(dayjs('12:00:00', 'HH:mm:ss', true))

  return <TimePicker2 value={value} onChange={onChange} preset={preset} />
}

export default function DemoComponent() {
  const content = <Picker />
  return <Style>{content}</Style>
}
const Style = styled.div``
