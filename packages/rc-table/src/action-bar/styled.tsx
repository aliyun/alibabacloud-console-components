import React from 'react'
import styled from 'styled-components'
import { Grid } from '@alicloud/console-components'
import { IActionBarProps } from './index'

const ActionBarPropsFilter: React.FC<IActionBarProps> = ({
  afterIntersectChanged,
  ...restProps
}) => {
  return <Grid.Row {...restProps} />
}

export const SActionBarWrapper = styled(ActionBarPropsFilter)`
  height: 40px;
  justify-content: space-between;
`

export const SActionBarLeft = styled(Grid.Col)`
  flex: 0 1 auto;

  > * {
    display: inline-block;
    margin-right: 8px;
  }
`

export const SActionBarRight = styled(Grid.Col)`
  flex: 0 1 auto;

  > * {
    margin-right: 0;
    margin-left: 8px;
  }
`

export const SFixedBarWrapper = styled.div`
  position: sticky;
  display: block;
  background: #fff;
  width: 100%;
  left: 0;

  &.fixed-to-top {
    top: 0;
    padding-top: 8px;
    border-bottom: 1px solid #dedede;
    box-shadow: 0px 0.2px 10px #ccc;
  }

  &.fixed-to-bottom {
    bottom: 0;
    padding-bottom: 8px;
    border-top: 1px solid #dedede;
    box-shadow: 0px 0.2px 10px #ccc;
  }
`
