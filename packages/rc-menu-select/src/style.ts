import styled from 'styled-components'
import { Menu, Dropdown } from '@alicloud/console-components'

export const SMenuSelectContainer = styled.div`
  display: inline-block;
`

export const SSelectLabel = styled.div`
  display: inline-block;
  color: #333333;
  margin-right: 2px;
`

export const STrigger = styled.div`
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #ebebeb;
    .trigger-icon {
      color: #555555;
    }
  }
  .trigger-icon {
    color: #555555;
    height: 16px;
    line-height: 16px;
  }
`

export const SMenu = styled(Menu)`
  min-width: 150px;
  .next-menu-item-text {
    padding-right: 8px;
  }
`

export const SDropdown = styled(Dropdown)`
  &.menu-align-left {
    left: 0 !important;
  }
`

export const STriggerWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 24px;
`
