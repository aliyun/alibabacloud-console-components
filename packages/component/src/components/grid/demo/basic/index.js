import React from 'react'
import { Grid } from '@alicloud/console-components'
import '../common.less'

const BasicDemo = () => (
  <div className="grid-demo-section">
    <div className="title">单列布局</div>
    <Grid.Row>
      <Grid.Col span="24"></Grid.Col>
    </Grid.Row>
    <div className="title">双列布局</div>
    <Grid.Row>
      <Grid.Col span="12"></Grid.Col>
      <Grid.Col span="12"></Grid.Col>
    </Grid.Row>
    <div className="title">三列布局</div>
    <Grid.Row>
      <Grid.Col span="8"></Grid.Col>
      <Grid.Col span="8"></Grid.Col>
      <Grid.Col span="8"></Grid.Col>
    </Grid.Row>
    <div className="title">四列布局</div>
    <Grid.Row>
      <Grid.Col span="6"></Grid.Col>
      <Grid.Col span="6"></Grid.Col>
      <Grid.Col span="6"></Grid.Col>
      <Grid.Col span="6"></Grid.Col>
    </Grid.Row>
    <div className="title">六列布局</div>
    <Grid.Row>
      <Grid.Col span="4"></Grid.Col>
      <Grid.Col span="4"></Grid.Col>
      <Grid.Col span="4"></Grid.Col>
      <Grid.Col span="4"></Grid.Col>
      <Grid.Col span="4"></Grid.Col>
      <Grid.Col span="4"></Grid.Col>
    </Grid.Row>
    <div className="title">八列布局</div>
    <Grid.Row>
      <Grid.Col span="3"></Grid.Col>
      <Grid.Col span="3"></Grid.Col>
      <Grid.Col span="3"></Grid.Col>
      <Grid.Col span="3"></Grid.Col>
      <Grid.Col span="3"></Grid.Col>
      <Grid.Col span="3"></Grid.Col>
      <Grid.Col span="3"></Grid.Col>
      <Grid.Col span="3"></Grid.Col>
    </Grid.Row>
    <div className="title">十二列布局</div>
    <Grid.Row>
      <Grid.Col span="2"></Grid.Col>
      <Grid.Col span="2"></Grid.Col>
      <Grid.Col span="2"></Grid.Col>
      <Grid.Col span="2"></Grid.Col>
      <Grid.Col span="2"></Grid.Col>
      <Grid.Col span="2"></Grid.Col>
      <Grid.Col span="2"></Grid.Col>
      <Grid.Col span="2"></Grid.Col>
      <Grid.Col span="2"></Grid.Col>
      <Grid.Col span="2"></Grid.Col>
      <Grid.Col span="2"></Grid.Col>
      <Grid.Col span="2"></Grid.Col>
    </Grid.Row>
  </div>
)

export default BasicDemo
