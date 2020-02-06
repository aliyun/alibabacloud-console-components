import React from 'react'
import { Card, Icon } from '@alicloud/console-components'
import './demo5.less'

const commonProps = {
  title: 'Title',
  style: { width: 300 },
  subTitle: 'Sub-title',
  extra: <Icon size="xs" type="ellipsis-vertical" />,
  showTitleBullet: false,
  showHeadDivider: false,
}

const Demo5 = () => (
  <div>
    <Card {...commonProps} showHeadDivider={false}>
      <div className="card-placeholder" />
    </Card>
  </div>
)

export default Demo5
