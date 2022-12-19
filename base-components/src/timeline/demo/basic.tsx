/**
 * @title 基本用法
 * @description 最简单的用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Timeline } from '@alicloudfe/components'

const TimelineItem = Timeline.Item

export default function DemoComponent() {
  const content = (
    <Timeline>
      <TimelineItem title="Receipt" state="process" />
      <TimelineItem title="Ship" />
      <TimelineItem title="Order" />
    </Timeline>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
