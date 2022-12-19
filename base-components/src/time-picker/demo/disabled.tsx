/**
 * @title 禁用时分秒
 * @description 禁用全部和禁用部分选择项
 */

import * as React from 'react'
import styled from 'styled-components'

import { TimePicker } from '@alicloudfe/components'

const disabledHours = [1, 2, 3, 4, 5]
const disabledMinutes = [10, 20, 30, 40, 50]
const disabledSeconds = [10, 20, 30, 40, 50]

const disabledItems = (list) => (index) => {
  return list.indexOf(index) >= 0
}

export default function DemoComponent() {
  const content = (
    <div>
      <p>Disable TimePicker</p>
      <TimePicker disabled />
      <p>Disable Hours/Minutes/Seconds</p>
      <TimePicker
        disabledHours={disabledItems(disabledHours)}
        disabledMinutes={disabledItems(disabledMinutes)}
        disabledSeconds={disabledItems(disabledSeconds)}
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
