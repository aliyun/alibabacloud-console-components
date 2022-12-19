/**
 * @title 面板日历
 * @description 面板日历通常用来被嵌套在弹层容器中。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Calendar2 } from '@alicloudfe/components'
import dayjs from 'dayjs'

export default function DemoComponent() {
  const content = (
    <div style={{ border: '1px solid #f0f0f0' }}>
      <Calendar2 shape="panel" defaultValue={dayjs().add(1, 'days')} />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
