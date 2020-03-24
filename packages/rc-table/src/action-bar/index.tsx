import React from 'react'
import { compose, toClass } from 'recompose'
import withIntersectionFixed from './withIntersectionFixed'
import { SActionBarWrapper, SActionBarLeft, SActionBarRight } from './styled'

const ActionBar = (props: any): React.ReactNode => (
  <SActionBarWrapper {...props} />
)

const Left = (props: any): React.ReactNode => <SActionBarLeft {...props} />

const Right = (props: any): React.ReactNode => (
  <SActionBarRight offset="0" {...props} />
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
