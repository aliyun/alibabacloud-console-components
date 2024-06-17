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
    background-color: ${vars['--console-menu-bg'].consumeStyled};

    .${getPrefix}menu-header {
      box-sizing: border-box;
      padding: ${vars['--console-menu-header-padding'].consumeStyled};
    }

    ${SubMenu} {
      background-color: ${vars['--console-menu-bg'].consumeStyled};
      .${getPrefix}nav-item.${getPrefix}menu-item {
        background-color: ${vars['--console-menu-bg'].consumeStyled};
        color: ${vars['--console-menu-normal-text-color'].consumeStyled};
        padding: 0 ${vars['--console-menu-padding'].consumeStyled} 0
          ${vars['--console-menu-padding'].consumeStyled};

        &:hover {
          background-color: ${vars['--console-menu-hover-bg'].consumeStyled};
        }

        &.${getPrefix}opened {
          color: ${vars['--console-menu-normal-text-color'].consumeStyled};
        }

        .${getPrefix}menu-item-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: ${vars['--console-menu-item-height'].consumeStyled};
          > .${getPrefix}menu-icon-arrow {
            color: ${vars['--console-menu-icon-arrow-color'].consumeStyled};
            line-height: 12px;
            position: static;
          }
        }
      }
    }

    ${Item} {
      color: ${vars['--console-menu-normal-text-color'].consumeStyled};
      background-color: ${vars['--console-menu-bg'].consumeStyled};
      padding: 0 ${vars['--console-menu-padding'].consumeStyled};

      &:hover {
        background-color: ${vars['--console-menu-hover-bg'].consumeStyled};
      }

      a {
        color: ${vars['--console-menu-normal-text-color'].consumeStyled};
        &:hover {
          text-decoration: none;
        }
      }

      &.${getPrefix}nav-item.${getPrefix}menu-item.${getPrefix}selected.${getPrefix}selected {
        background-color: ${vars['--console-menu-active-bg'].consumeStyled};
        color: ${vars['--console-menu-active-text-color'].consumeStyled};
        a {
          color: ${vars['--console-menu-active-text-color'].consumeStyled};
        }
        ::before {
          display: ${vars['--console-menu-active-bar-display'].consumeStyled};
          right: 0;
        }
      }

      > .${getPrefix}menu-item-inner {
        height: ${vars['--console-menu-item-height'].consumeStyled};
        display: flex;
        align-items: center;
      }

      &.${getPrefix}nav-item.${getPrefix}menu-item.${getPrefix}disabled {
        color: ${vars['--console-menu-disabled-text-color'].consumeStyled};

        a {
          background-color: #f5f5f5;
        }

        &:hover {
          background-color: ${vars['--console-menu-disabled-bg'].consumeStyled};
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
