import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import {
  itemClassName,
  triggerClassName,
  expandMenuClassName,
} from './constants'

const height = '15.2px'

const DummyDiv: React.FC<{ wrap?: boolean }> = ({ wrap, ...props }) => {
  return <div {...props} />
}

export const SActions = styled(DummyDiv)`
  display: flex;
  align-items: center;
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};

  .${itemClassName} {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    margin-right: 8px;
    height: ${height};

    &::after {
      content: '';
      display: inline-block;
      width: 0;
      height: 12px;
      border-right: 1px solid #d8d8d8;
      margin-left: 8px;
    }
    &:last-child {
      &::after {
        border: 0;
      }
    }
  }

  .${triggerClassName} {
    height: ${height};
    color: #0070cc;
    display: inline-flex;
    align-items: center;
    &:hover {
      color: #005aa5;
    }
  }
`

/**
 * 由于下拉菜单DOM是直接挂载在body下的，
 * 所以无法用普通的styled-component来添加样式
 */
export const DropDownStyle = createGlobalStyle`
  .${expandMenuClassName} {
    .next-menu-item {
      position: relative;
      .next-menu-item-text {
        display: block;
      }
    }
  }
`
