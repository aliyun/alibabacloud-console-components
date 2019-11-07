import React from 'react'
import { Card } from '@alicloud/console-components'
import'./demo5.less'

const commonProps = {
  title: 'Title',
  style: { width: 300 },
  subTitle: 'Sub-title',
  extra: 'Link',
}

const Demo5 = () => (
  <div>
    <Card {...commonProps} showHeadDivider={false}>
      <div className="card-placeholder"></div>
    </Card>
  </div>
)

export default Demo5