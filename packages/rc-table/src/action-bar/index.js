import React from 'react'
import { compose, toClass } from 'recompose'
import withIntersectionFixed from './withIntersectionFixed'
import { SActionBarWrapper, SActionBarLeft, SActionBarRight } from './styled'

const ActionBar = props => <SActionBarWrapper {...props} />

const Left = props => <SActionBarLeft {...props} />

const Right = props => <SActionBarRight offset="0" {...props} />

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
