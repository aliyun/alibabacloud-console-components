import React from 'react'
import { Timeline } from '@alicloud/console-components'

const { Item: TimelineItem } = Timeline

const Demo2 = () => (
  <div>
    <Timeline>
      <TimelineItem title="多云" time={'2016-06-10 10:30:00'} state="process"/>
      <TimelineItem title="晴天" time={'2016-06-11'} state="success"/>
      <TimelineItem title="下雨" time={'2016-06-09'} state="error"/> 
    </Timeline>
  </div>
)

export default Demo2
