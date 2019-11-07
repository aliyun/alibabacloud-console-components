import React from 'react'
import { Card } from '@alicloud/console-components'
import'./demo2.less'

const commonProps = {
  style: { width: 300 },
  title: 'Title',
  subTitle: 'Sub-title',
}

const Demo2 = () => (
  <div>
    <Card {...commonProps} contentHeight="auto">
      <div className="custom-content">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </div>
    </Card>
    &nbsp;&nbsp;
    <Card {...commonProps} contentHeight={200}>
      <div className="custom-content">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </div>
    </Card>
  </div>
)

export default Demo2
