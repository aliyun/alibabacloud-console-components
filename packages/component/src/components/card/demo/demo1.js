import React from 'react'
import { Card, Grid, Icon } from '@alicloud/console-components'
import './demo1.less'

const commonProps = {
  style: { width: 300 },
  subTitle: 'SubTitle',
  extra: <Icon size="xs" type="ellipsis-vertical" />,
  showTitleBullet: false,
  showHeadDivider: false,
}

const Demo1 = () => (
  <Grid.Row>
    <Grid.Col>
      <Card {...commonProps} title="Simple Card">
        <div className="card-placeholder" />
      </Card>
    </Grid.Col>
    <Grid.Col>
      <Card {...commonProps} title="Border Card" hasBorder>
        <div className="card-placeholder" />
      </Card>
    </Grid.Col>
  </Grid.Row>
)

export default Demo1
