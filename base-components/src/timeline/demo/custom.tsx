/**
 * @title 自定义轴节点
 * @description 自定义时间轴节点。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Timeline, Icon } from '@alicloudfe/components'

const TimelineItem = Timeline.Item

export default function DemoComponent() {
  const content = (
    <Timeline>
      <TimelineItem
        title="Receipt"
        state="process"
        icon="smile"
        time="2017-10-21"
      />
      <TimelineItem
        title="Ship"
        dot={<span className="custom-node"> 😂 </span>}
        state="success"
        time="2017-10-22"
      />
      <TimelineItem
        title="Order"
        dot={<Icon type="success" size="xl" style={{ color: '#1DC11D' }} />}
        content="Congratulations, successful orders!"
        time="2017-10-23"
      />
    </Timeline>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .custom-node {
    color: #1dc11d;
    position: relative;
    left: 3px;
    font-size: 14px;
  }
`
