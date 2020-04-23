import styled from 'styled-components'
import MenuSelect from '@alicloud/console-components-menu-select'

/**
 * @public
 */
const Header = styled.h2`
  /* widget-normalize use class selector to reset css */
  && {
    position: relative;
    font-size: 14px;
    font-weight: 600;
    color: #333333;
    padding: 0 16px;
    margin: 0;
    line-height: 18px;
    display: flex;
    justify-content: space-between;
    .wind-console-menu-select {
      .wind-menu-select-inner {
        height: 18px;
      }
      .trigger-icon-wrap {
        &:hover {
          background: #dedede;
          .trigger-icon {
            color: #333333;
          }
        }
        .trigger-icon {
          color: #888888;
        }
      }
    }
  }
`
export default Header

/**
 * @public
 */
export const SProductSelect = styled(MenuSelect)`
  &.active {
    &&& {
      border-color: #737373;
    }
  }
  &.wind-consolemenu-product-select {
    height: 32px;
    line-height: 32px;
    width: 176px;
    border: 1px solid #dedede;
    cursor: pointer;
    transition: border 0.2s;
    margin: 8px 16px;
    box-sizing: border-box;
    &:hover {
      border-color: #737373;
    }
    .wind-menu-select-inner {
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
      height: 32px;
      line-height: 32px;
      .select-label {
        max-width: 130px;
        height: 32px;
        line-height: 32px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .trigger-icon-wrap {
        width: 12px;
        height: 12px;
        line-height: 12px;
        &:hover {
          background: transparent;
        }
        .trigger-icon {
          color: #888888;
          height: 12px;
          line-height: 12px;
        }
      }
    }
  }
`
