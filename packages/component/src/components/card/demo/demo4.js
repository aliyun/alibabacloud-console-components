import React from 'react'
import { Card, Icon } from '@alicloud/console-components'

const commonProps = {
  style: { width: 300 },
  title: 'Title',
  extra: <Icon size="xs" type="ellipsis-vertical" />,
  showTitleBullet: false,
  showHeadDivider: false,
}

const Demo4 = () => (
  <div>
    <Card {...commonProps} showTitleBullet={false}>
      Card Content
    </Card>
  </div>
)

export default Demo4
