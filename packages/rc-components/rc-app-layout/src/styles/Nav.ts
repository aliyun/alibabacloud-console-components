import React from 'react';
import { Icon } from '@alicloud/console-components';
import styled from 'styled-components';
import { vars } from '../theme';

const navWidth = vars['--console-layout-nav-width'].consumeStyled;
const navCollapsedWidth =
  vars['--console-layout-nav-width-collapsed'].consumeStyled;

const calcWidth = (props: INavProps) => (props.collapsed ? navCollapsedWidth : navWidth);
const calcLeft = (props: INavProps) => (props.collapsed ? `calc(${navCollapsedWidth(props)} - ${navWidth(props)})` : 0);
const getRotate = (props: INavCollapseTriggerProps) => (props.collapsed ? 180 : 0);

// const tiggerOpcity = (props: INavProps) => (props.collapsed ? 1 : 0);

interface INavProps {
  collapsed: boolean
}
interface INavCollapseTriggerProps {
  collapsed: boolean
}

export const NavChildenWrapper = styled.div`
  width: ${navWidth};
  min-width: ${navWidth};
`;

const Nav = styled.div<INavProps>`
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  background-color: ${vars['--console-layout-nav-bg'].consumeStyled};
  width: ${navWidth};
  border-right: ${vars['--console-layout-nav-border'].consumeStyled};
  left: ${calcLeft};
  transition: left 0.3s ease-in-out;
`;

export default Nav;

export const NavCollapseTriggerIcon = styled(Icon)``;

export const NavCollapseTrigger = styled.span<INavCollapseTriggerProps>`
  /* 位置大小 */
  width: ${vars['--console-layout-nav-trigger-width'].consumeStyled};
  height: ${vars['--console-layout-nav-trigger-height'].consumeStyled};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;

  /* 形状颜色 */
  border: ${vars['--console-layout-nav-trigger-border'].consumeStyled};
  border-left: ${vars['--console-layout-nav-trigger-border-l'].consumeStyled};
  cursor: pointer;
  color: #808080;
  background-color: ${vars['--console-layout-nav-trigger-bg'].consumeStyled};
  border-radius: 0 2px 2px 0;
  transition: border 0.1s ease;

  /* 让内部图标垂直居中 */
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: ${vars['--console-layout-nav-trigger-shadow'].consumeStyled};
    background-color: ${vars['--console-layout-nav-trigger-bg-hover'].consumeStyled};
  }

  ${NavCollapseTriggerIcon} {
    position: relative;
    left: ${vars['--console-layout-nav-trigger-icon-left'].consumeStyled};
    line-height: 12px;
    color: ${vars['--console-layout-nav-trigger-icon-color'].consumeStyled};
    /* 展开/收起时，icon要转向 */
    transform: rotate(${getRotate}deg);
    transition: transform 0.5s ease-in-out, left 0.1s ease-in-out;
  }
`;
/** Trigger最外层，帮助定位到menu右边 */
export const NavCollapseTriggerLocator = styled.div`
  // 防止trigger被内容区域的东西挡住
  z-index: 100;
  position: absolute;
  right: 0px;
  top: 0px;
  bottom: 0px;
  width: 0px;
  height: 100%;
`;

/** Trigger次外层，确定点击区域 */
export const NavCollapseTriggerWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0px;
  width: ${vars['--console-layout-nav-trigger-clickable-width'].consumeStyled};
  height: ${vars['--console-layout-nav-trigger-clickable-height']
    .consumeStyled};
  cursor: pointer;
  &:hover {
    ${NavCollapseTrigger} {
      border-left: ${vars['--console-layout-nav-trigger-border-l-hover']
    .consumeStyled};
      ${NavCollapseTriggerIcon} {
        color: ${vars['--console-layout-nav-trigger-icon-color-hover']
    .consumeStyled};
      }
    }
  }
`;

export const NavWrapper = styled.div`
  z-index: 1;
  overflow-x: visible;
  position: relative;
  height: 100%;
  width: ${calcWidth};
  min-width: ${calcWidth};
  transition: width 0.3s ease-in-out, min-width 0.3s ease-in-out;
  &:hover {
    box-shadow: ${vars['--console-layout-nav-shadow'].consumeStyled};
  }
`;
