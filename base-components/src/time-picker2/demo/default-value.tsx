/**
 * @title 默认值
 * @description 可以通过 `defaultValue` 传入默认时间值，并且可以通过选择改变该值。
 */

import * as React from 'react'
import styled from 'styled-components'

import { TimePicker2 } from '@alicloudfe/components'
import dayjs from 'dayjs'

const defaultVal = dayjs('12:00:00', 'HH:mm:ss', true)

export default function DemoComponent() {
  const content = (
    <div>
      <TimePicker2 defaultValue={defaultVal} onChange={console.log} />
      <br />
      <br />
      <TimePicker2 defaultValue="12:00:00" onChange={console.log} />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
