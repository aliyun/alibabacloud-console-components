import React from 'react'
import { compose, toClass } from 'recompose'
import { OverlayProps } from '@alicloud/console-components/types/overlay'
import withIntersectionFixed from './withIntersectionFixed'
import { SActionBarWrapper, SActionBarLeft, SActionBarRight } from './styled'

const baseClassName = 'action-bar'

export interface IActionBarProps {
  align?: 'top' | 'bottom'
  afterIntersectChanged?: (
    fixedAlign: 'top' | 'bottom',
    nextIntersecting: boolean,
    prevIntersecting: boolean
  ) => void
  affixBarOverlayProps?: OverlayProps
  affixMode?: 'intersection-observer' | 'sticky'
  className?: string
}

const ActionBar: React.FC<IActionBarProps> = (props) => (
  <SActionBarWrapper className={baseClassName} {...props} />
)

const Left: React.FC<{ children: React.ReactNode }> = (props) => (
  <SActionBarLeft className={`${baseClassName}-left`} {...props} />
)

const Right: React.FC<{ children: React.ReactNode }> = (props) => (
  <SActionBarRight className={`${baseClassName}-right`} offset="0" {...props} />
)

const ExpActionBar = Object.assign(ActionBar, {
  Left,
  Right,
})

export default ExpActionBar

// with fixedAlign & afterIntersectChanged
const EnhanceIntersectionFixedActionBar = compose<
  IActionBarProps,
  IActionBarProps & {
    fixedAlign: 'top' | 'bottom'
  }
>(
  withIntersectionFixed(0.1),
  toClass
)(ActionBar)

const IntersectionFixedActionBar = Object.assign(
  EnhanceIntersectionFixedActionBar,
  {
    Left,
    Right,
  }
)

export { Left, Right, IntersectionFixedActionBar }
