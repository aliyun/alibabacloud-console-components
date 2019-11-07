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
  ${getPriority(5)} {
    padding: 0;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    background-color: #f5f5f5;

    .${getPrefix}menu-header {
      box-sizing: border-box;
      border-bottom: 1px solid #ebebeb;
      padding: 15px 0 14px;
    }

    ${SubMenu} {
      background-color: #f5f5f5;

      .${getPrefix}nav-item.${getPrefix}menu-item {
        background-color: #f5f5f5;
        color: #555555;
        padding: 0 16px 0 16px;

        &:hover {
          background-color: #ebebeb;
          color: #111111;
        }

        &.${getPrefix}opened {
          color: #555555;
        }

        .${getPrefix}menu-item-inner {
          position: relative;
          .${getPrefix}menu-icon-arrow {
            color: #a8a8a8;
            right: 0;
          }
        }
      }
    }

    ${Item} {
      color: #555555;
      background-color: #f5f5f5;
      padding: 0 24px 0 16px;

      &:hover {
        background-color: #ebebeb;
        color: #111111;
      }

      a {
        color: #555555;
        &:hover {
          text-decoration: none;
        }
      }

      &.${getPrefix}nav-item.${getPrefix}menu-item.${getPrefix}selected.${getPrefix}selected {
        background-color: #dedede;
        color: #333333;
      }

      &.${getPrefix}nav-item.${getPrefix}menu-item.${getPrefix}disabled {
        color: #c1c1c1;

        a {
          background-color: #f5f5f5;
        }

        &:hover {
          background-color: #f5f5f5;
          color: #c1c1c1;
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

function NavFilterProps({ fusionPrefix, ...props }: any) {
  return <Nav {...props} />
}
