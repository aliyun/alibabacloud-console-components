import React from 'react'
import { Card, Grid } from '@alicloud/console-components'
import'./demo1.less'

const commonProps = {
  style: { width: 300 },
  subTitle: 'SubTitle',
  extra: 'Link',
}

const Demo1 = () => (
  <Grid.Row>
    <Grid.Col>
      <Card {...commonProps} title="Simple Card">
        <div className="card-placeholder"></div>
      </Card>
    </Grid.Col>
    <Grid.Col>
      <Card {...commonProps} title="Border Card" hasBorder>
        <div className="card-placeholder"></div>
      </Card>
    </Grid.Col>
  </Grid.Row>
)

export default Demo1