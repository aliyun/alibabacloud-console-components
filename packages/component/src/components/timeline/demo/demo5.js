import React from 'react'
import { Timeline, Icon } from '@alicloud/console-components'
import './demo5.less'

const { Item: TimelineItem } = Timeline

const Demo5 = () => (
  <div className="timeline-demo4">
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
  </div>
)

export default Demo5
