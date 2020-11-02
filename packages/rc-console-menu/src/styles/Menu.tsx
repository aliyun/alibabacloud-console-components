import React from 'react'
import styled from 'styled-components'
import { Nav } from '@alicloud/console-components'
import Item from './Item'
import SubMenu from './SubMenu'
import { getPriority } from '../utils'

/**
 * @public
 */
const PrimaryMenu = styled(NavFilterProps)<{
  fusionPrefix: string
}>`
  ${(props) => props.theme.varDef}
  ${getPriority(5)} {
    padding: 0;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    background-color: var(--console-menu-bg, #fff);

    .${getPrefix}menu-header {
      box-sizing: border-box;
      padding: var(--console-menu-header-padding, 24px 24px 16px);
    }

    ${SubMenu} {
      background-color: var(--console-menu-bg, #fff);
      .${getPrefix}nav-item.${getPrefix}menu-item {
        background-color: var(--console-menu-bg, #fff);
        color: var(--console-menu-normal-text-color, #333333);
        padding: 0 var(--console-menu-padding, 24px) 0
          var(--console-menu-padding, 24px);

        &:hover {
          background-color: var(--console-menu-hover-bg, #f7f9fa);
        }

        &.${getPrefix}opened {
          color: var(--console-menu-normal-text-color, #333333);
        }

        .${getPrefix}menu-item-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--console-menu-item-height, 32px);
          > .${getPrefix}menu-icon-arrow {
            color: var(--console-menu-icon-arrow-color, #a8a8a8);
            line-height: 12px;
            position: static;
          }
        }
      }
    }

    ${Item} {
      color: var(--console-menu-normal-text-color, #333333);
      background-color: var(--console-menu-bg, #fff);
      padding: 0 var(--console-menu-padding, 24px);

      &:hover {
        background-color: var(--console-menu-hover-bg, #f7f9fa);
      }

      a {
        color: var(--console-menu-normal-text-color, #333333);
        &:hover {
          text-decoration: none;
        }
      }

      &.${getPrefix}nav-item.${getPrefix}menu-item.${getPrefix}selected.${getPrefix}selected {
        background-color: var(--console-menu-active-bg, #eff3f8);
        color: var(--console-menu-active-text-color, #0064c8);
        a {
          color: var(--console-menu-active-text-color, #0064c8);
        }
        ::before {
          display: var(--console-menu-active-bar-display, block);
          right: 0;
        }
      }

      > .${getPrefix}menu-item-inner {
        height: var(--console-menu-item-height, 32px);
        display: flex;
        align-items: center;
      }

      &.${getPrefix}nav-item.${getPrefix}menu-item.${getPrefix}disabled {
        color: var(--console-menu-disabled-text-color, #c1c1c1);

        a {
          background-color: #f5f5f5;
        }

        &:hover {
          background-color: var(--console-menu-disabled-bg, #f5f5f5);
        }
      }
    }
  }
`
export default PrimaryMenu

/**
 * @public
 */
export const SecondaryMenu = styled(NavFilterProps)<{ fusionPrefix: string }>`
  ${getPriority(5)} {
    ${Item} {
      padding: 0 24px 0 0;

      &.${getPrefix}nav-item.${getPrefix}menu-item.${getPrefix}disabled {
        color: #c1c1c1;

        &:hover {
          color: #c1c1c1;
        }
      }

      .${getPrefix}menu-item-inner {
        height: 32px;
        line-height: 32px;
      }
    }

    ${SubMenu} {
      .${getPrefix}nav-item.${getPrefix}menu-item {
        padding: 0 24px 0 0;

        &.${getPrefix}opened {
          color: #555555;
        }

        .${getPrefix}menu-icon-arrow.${getPrefix}icon:before {
          transform: scale(0.7);
        }

        .${getPrefix}menu-item-inner {
          height: 32px;
          line-height: 32px;
        }
      }

      .${getPrefix}menu-sub-menu {
        ${Item} {
          padding: 0 24px 0 16px;

          .${getPrefix}menu-item-inner {
            height: 32px;
            line-height: 32px;
          }
        }
      }
    }
  }
`

function getPrefix({ fusionPrefix }: { fusionPrefix: string }) {
  return fusionPrefix
}

function NavFilterProps({ fusionPrefix, theme, ...props }: any) {
  return <Nav {...props} />
}
