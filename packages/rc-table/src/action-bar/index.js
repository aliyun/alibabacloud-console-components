import React from 'react'
import { Grid } from '@alicloud/console-components'
import { compose, toClass } from 'recompose'
import withIntersectionFixed from './withIntersectionFixed'
import './index.less'

const baseClassName = 'wind-rc-table action-bar'

const ActionBar = props => <Grid.Row className={baseClassName} {...props} />

const Left = props => (
  <Grid.Col className={`${baseClassName}-left`} {...props} />
)

const Right = props => (
  <Grid.Col className={`${baseClassName}-right`} offset="0" {...props} />
)

ActionBar.Left = Left
ActionBar.Right = Right

export default ActionBar

const IntersectionFixedActionBar = compose(
  withIntersectionFixed(0.1),
  toClass
)(ActionBar)

IntersectionFixedActionBar.Left = Left
IntersectionFixedActionBar.Right = Right

export { Left, Right, IntersectionFixedActionBar }
