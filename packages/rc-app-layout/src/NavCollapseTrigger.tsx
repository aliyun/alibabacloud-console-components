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
  <S.NavCollapseTriggerWrapper>
    <S.NavCollapseTriggerContainer onClick={onClick}>
      <S.NavCollapseTrigger collapsed={collapsed}>
        <S.NavCollapseTriggerIcon type="arrow-left" size="xs" />
      </S.NavCollapseTrigger>
    </S.NavCollapseTriggerContainer>
  </S.NavCollapseTriggerWrapper>
)

export default NavCollapseTrigger
