import React from 'react'
import PropTypes from 'prop-types'
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
    <S.NavCollapseTriggerContainer>
      <S.NavCollapseTrigger collapsed={collapsed} onClick={onClick}>
        <S.NavCollapseTriggerIcon type="arrow-left" size="xs" />
      </S.NavCollapseTrigger>
    </S.NavCollapseTriggerContainer>
  </S.NavCollapseTriggerWrapper>
)

NavCollapseTrigger.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default NavCollapseTrigger
