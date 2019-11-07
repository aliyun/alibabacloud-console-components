import React, { Fragment, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import NavCollapseTrigger from './NavCollapseTrigger'
import * as S from './styles'
import { IAppLayoutProps } from '.'

const useCollapse = ({
  defaultCollapsed,
  collapsed,
  onCollapseTriggerClick,
}: {
  collapsed: INavProps['collapsed']
  onCollapseTriggerClick: INavProps['onCollapseTriggerClick']
  defaultCollapsed: NonNullable<INavProps['defaultCollapsed']>
}) => {
  const isControlled = typeof collapsed === 'boolean'
  const [collapsedState, setCollapsedState] = useState(defaultCollapsed)
  // 是否是受控组件？
  const actualCollapsed = isControlled ? (collapsed as boolean) : collapsedState

  // 装饰onCollapseTriggerClick，在受控模式下要设置当前collapsedState
  const actualOnCollapseTriggerClick = useCallback(
    (e: React.MouseEvent) => {
      onCollapseTriggerClick && onCollapseTriggerClick(actualCollapsed, e)
      if (!isControlled) {
        setCollapsedState(!actualCollapsed)
      }
    },
    [actualCollapsed, isControlled, onCollapseTriggerClick]
  )
  return [actualCollapsed, actualOnCollapseTriggerClick] as const
}

interface INavProps {
  collapsible?: boolean
  collapsed?: boolean
  defaultCollapsed?: boolean
  onCollapseTriggerClick?: IAppLayoutProps['onNavCollapseTriggerClick']
  children?: React.ReactNode
}

const Nav: React.FC<INavProps> = ({
  collapsible = true,
  collapsed,
  defaultCollapsed = false,
  onCollapseTriggerClick,
  children,
}) => {
  const [derivedCollapsed, derivedOnCollapseTriggerClick] = useCollapse({
    collapsed,
    defaultCollapsed,
    onCollapseTriggerClick,
  })

  return (
    <Fragment>
      <S.Nav collapsed={derivedCollapsed}>
        <S.NavChildenWrapper>{children}</S.NavChildenWrapper>
      </S.Nav>
      {collapsible && (
        <NavCollapseTrigger
          collapsed={derivedCollapsed}
          onClick={derivedOnCollapseTriggerClick}
        />
      )}
    </Fragment>
  )
}

Nav.propTypes = {
  collapsible: PropTypes.bool,
  collapsed: PropTypes.bool,
  defaultCollapsed: PropTypes.bool,
  onCollapseTriggerClick: PropTypes.func,
  children: PropTypes.node,
}

export default Nav
