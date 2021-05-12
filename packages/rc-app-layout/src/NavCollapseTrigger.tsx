import React from 'react'
import * as S from './styles'

export interface INavCollapseTrigger {
  collapsed: boolean
  onClick: React.MouseEventHandler
}

const NavCollapseTrigger: React.FC<INavCollapseTrigger> = ({
  collapsed,
  onClick,
}) => (
  <S.NavCollapseTrigger
    collapsed={collapsed}
    className="nav-collapse-trigger"
    onClick={onClick}
  >
    <S.NavCollapseTriggerIcon type="arrow-left" size="xs" />
  </S.NavCollapseTrigger>
)

export default NavCollapseTrigger
