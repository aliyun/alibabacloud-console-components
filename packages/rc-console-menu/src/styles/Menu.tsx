import React from 'react'
import styled from 'styled-components'
import { Nav } from '@alicloud/console-components'
import Item from './Item'
import SubMenu from './SubMenu'
import { getPriority } from '../utils'
import { vars } from '../theme'

/**
 * @public
 */
const PrimaryMenu = styled(NavFilterProps)<{
  fusionPrefix: string
}>`
  ${(props) => props.theme.varDef || ''}
  ${getPriority(5)} {
    padding: 0;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    background-color: ${vars['--console-menu-bg'].useTheme};

    .${getPrefix}menu-header {
      box-sizing: border-box;
      padding: ${vars['--console-menu-header-padding'].useTheme};
    }

    ${SubMenu} {
      background-color: ${vars['--console-menu-bg'].useTheme};
      .${getPrefix}nav-item.${getPrefix}menu-item {
        background-color: ${vars['--console-menu-bg'].useTheme};
        color: ${vars['--console-menu-normal-text-color'].useTheme};
        padding: 0 ${vars['--console-menu-padding'].useTheme} 0
          ${vars['--console-menu-padding'].useTheme};

        &:hover {
          background-color: ${vars['--console-menu-hover-bg'].useTheme};
        }

        &.${getPrefix}opened {
          color: ${vars['--console-menu-normal-text-color'].useTheme};
        }

        .${getPrefix}menu-item-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: ${vars['--console-menu-item-height'].useTheme};
          > .${getPrefix}menu-icon-arrow {
            color: ${vars['--console-menu-icon-arrow-color'].useTheme};
            line-height: 12px;
            position: static;
          }
        }
      }
    }

    ${Item} {
      color: ${vars['--console-menu-normal-text-color'].useTheme};
      background-color: ${vars['--console-menu-bg'].useTheme};
      padding: 0 ${vars['--console-menu-padding'].useTheme};

      &:hover {
        background-color: ${vars['--console-menu-hover-bg'].useTheme};
      }

      a {
        color: ${vars['--console-menu-normal-text-color'].useTheme};
        &:hover {
          text-decoration: none;
        }
      }

      &.${getPrefix}nav-item.${getPrefix}menu-item.${getPrefix}selected.${getPrefix}selected {
        background-color: ${vars['--console-menu-active-bg'].useTheme};
        color: ${vars['--console-menu-active-text-color'].useTheme};
        a {
          color: ${vars['--console-menu-active-text-color'].useTheme};
        }
        ::before {
          display: ${vars['--console-menu-active-bar-display'].useTheme};
          right: 0;
        }
      }

      > .${getPrefix}menu-item-inner {
        height: ${vars['--console-menu-item-height'].useTheme};
        display: flex;
        align-items: center;
      }

      &.${getPrefix}nav-item.${getPrefix}menu-item.${getPrefix}disabled {
        color: ${vars['--console-menu-disabled-text-color'].useTheme};

        a {
          background-color: #f5f5f5;
        }

        &:hover {
          background-color: ${vars['--console-menu-disabled-bg'].useTheme};
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
