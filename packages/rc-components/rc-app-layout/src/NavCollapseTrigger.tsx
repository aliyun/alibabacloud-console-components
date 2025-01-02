import React from 'react';
import * as S from './styles';

export interface INavCollapseTrigger {
  collapsed: boolean
  onClick: React.MouseEventHandler
}

const NavCollapseTrigger: React.FC<INavCollapseTrigger> = ({
  collapsed,
  onClick,
}) => (
  <S.NavCollapseTriggerLocator>
    <S.NavCollapseTriggerWrapper>
      <S.NavCollapseTrigger
        collapsed={collapsed}
        className="nav-collapse-trigger"
        onClick={onClick}
      >
        <S.NavCollapseTriggerIcon type="arrow-left" size="small" />
      </S.NavCollapseTrigger>
    </S.NavCollapseTriggerWrapper>
  </S.NavCollapseTriggerLocator>
);

export default NavCollapseTrigger;
