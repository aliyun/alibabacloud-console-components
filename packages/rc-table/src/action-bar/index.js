import React from 'react'
import { compose, toClass } from 'recompose'
import withIntersectionFixed from './withIntersectionFixed'
import { ActionBarWrapper, ActionBarLeft, ActionBarRight } from './styled'

const ActionBar = props => <ActionBarWrapper {...props} />

const Left = props => <ActionBarLeft {...props} />

const Right = props => <ActionBarRight offset="0" {...props} />

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
