import React, { useState, useCallback } from 'react';
import NavCollapseTrigger from './NavCollapseTrigger';
import * as S from './styles';
import { IAppLayoutProps } from '.';

const useCollapse = ({
  defaultCollapsed,
  collapsed,
  onCollapseTriggerClick,
}: {
  collapsed: INavProps['collapsed']
  onCollapseTriggerClick: INavProps['onCollapseTriggerClick']
  defaultCollapsed: NonNullable<INavProps['defaultCollapsed']>
}) => {
  const isControlled = typeof collapsed === 'boolean';
  const [collapsedState, setCollapsedState] = useState(defaultCollapsed);
  // 是否是受控组件？
  const actualCollapsed = isControlled ? (collapsed as boolean) : collapsedState;

  // 装饰onCollapseTriggerClick，在受控模式下要设置当前collapsedState
  const actualOnCollapseTriggerClick = useCallback(
    (e: React.MouseEvent) => {
      onCollapseTriggerClick && onCollapseTriggerClick(actualCollapsed, e);
      if (!isControlled) {
        setCollapsedState(!actualCollapsed);
      }
    },
    [actualCollapsed, isControlled, onCollapseTriggerClick],
  );
  return [actualCollapsed, actualOnCollapseTriggerClick] as const;
};

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
  });

  return (
    <S.NavWrapper collapsed={derivedCollapsed}>
      <S.Nav collapsed={derivedCollapsed} className="windcc-app-layout__nav">
        {children}
      </S.Nav>
      {collapsible && (
        <NavCollapseTrigger
          collapsed={derivedCollapsed}
          onClick={derivedOnCollapseTriggerClick}
        />
      )}
    </S.NavWrapper>
  );
};

export default Nav;
