import React from 'react'
import { Timeline } from '@alicloud/console-components'
import './demo4.less'
const { Item: TimelineItem } = Timeline

const Demo4 = () => (
  <div className="timeline-demo4">
    <Timeline>
      <TimelineItem title="Sign" state="process" timeLeft="2016-10-03" />
      <TimelineItem title="Ship" timeLeft="2016-10-02" />
      <TimelineItem title="Order" timeLeft="2016-10-01" />
    </Timeline>
  </div>
)

export default Demo4
