import React from 'react'
import { Icon } from '@alicloud/console-components'
import styled from 'styled-components'

const navWidth = 208
const navCollapsedWidth = 0
const triggerHeight = 34
const triggerWidth = 16
const iconWidth = 12

const calcWidth = (props: INavProps) =>
  props.collapsed ? navCollapsedWidth : navWidth
const calcLeft = (props: INavProps) =>
  props.collapsed ? navCollapsedWidth - navWidth : 0
const getRotate = (props: INavCollapseTriggerProps) =>
  props.collapsed ? 180 : 0

const tiggerOpcity = (props: INavProps) => (props.collapsed ? 1 : 0)

interface INavProps {
  collapsed: boolean
}
interface INavCollapseTriggerProps {
  collapsed: boolean
}

export const NavChildenWrapper = styled.div`
  width: ${navWidth}px;
  min-width: ${navWidth}px;
`

const Nav = styled.div<INavProps>`
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  background-color: var(--console-layout-nav-bg, #fff);
  width: ${navWidth}px;
  border-right: var(--console-layout-nav-border, 1px solid #c0c6cc);
  left: ${calcLeft}px;
  transition: left 0.3s ease-in-out;
`

export default Nav

export const NavCollapseTriggerIcon = styled(Icon)``

export const NavCollapseTrigger = styled.span<INavCollapseTriggerProps>`
  width: ${triggerWidth}px;
  height: ${triggerHeight}px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -${triggerWidth}px;
  border: var(--console-layout-nav-trigger-border, 1px solid #c0c6cc);
  border-left: none;
  cursor: pointer;
  color: #bfbfbf;
  background-color: var(--console-layout-nav-trigger-bg, #fff);
  border-radius: 0 2px 2px 0;

  /* 让内部图标垂直居中 */
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: var(--console-layout-nav-trigger-shadow, 0 2px 4px 0 rgba(0, 0, 0, 0.16));

  ${NavCollapseTriggerIcon} {
    line-height: 12px;
    color: var(--console-layout-nav-trigger-icon-color, #c1c1c1);
    /* 展开/收起时，icon要转向 */
    transform: rotate(${getRotate}deg);
    transition: transform 0.5s ease-in-out, left 0.1s ease-in-out;
  }
`

export const NavWrapper = styled.div`
  overflow-x: visible;
  position: relative;
  height: 100%;
  width: ${calcWidth}px;
  min-width: ${calcWidth}px;
  transition: width 0.3s ease-in-out, min-width 0.3s ease-in-out;
  &:hover {
    box-shadow: var(
      --console-layout-nav-shadow,
      2px 0 4px 0 rgba(0, 0, 0, 0.16)
    );
  }
`
