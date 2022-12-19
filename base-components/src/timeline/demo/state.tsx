/**
 * @title 节点状态
 * @description 设置每个节点不同的状态。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Timeline } from '@alicloudfe/components'

const TimelineItem = Timeline.Item

export default function DemoComponent() {
  const content = (
    <Timeline>
      <TimelineItem
        title="Cloudy"
        time={'2016-06-10 10:30:00'}
        state="process"
      />
      <TimelineItem title="Sunny" time={'2016-06-11'} state="success" />
      <TimelineItem title="Rainy" time={'2016-06-09'} state="error" />
    </Timeline>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
