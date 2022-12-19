/**
 * @title 基础日历
 * @description 最简单的日历用法，用户可以切换年/月。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Calendar2 } from '@alicloudfe/components'
import dayjs from 'dayjs'

function onDateChange(value) {
  console.log(value.format('L'))
}

export default function DemoComponent() {
  const content = (
    <div>
      <Calendar2
        onSelect={onDateChange}
        defaultValue={dayjs().add(1, 'days')}
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
