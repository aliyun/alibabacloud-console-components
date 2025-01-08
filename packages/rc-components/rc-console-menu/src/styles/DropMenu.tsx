import React from 'react';
import styled from 'styled-components';
import { Menu } from '@alicloud/console-components';

const SMenu = styled(MenuFilterProps)`
  &&& {
    .${getPrefix}menu-item {
      height: 35px;
      line-height: 35px;
    }
    .${getPrefix}menu-item-inner {
      height: 35px;
      padding-left: ${({ selectedKeys }) => (selectedKeys.length ? '8px' : 0)};
      overflow: visible;
      .next-menu-item-text {
        margin-left: ${({ selectedKeys }) => (selectedKeys.length ? '8px' : 0)};
      }
    }
  }
`;

function MenuFilterProps({ fusionPrefix, selectedKeys, ...props }: any) {
  return <Menu {...props} selectedKeys={selectedKeys} />;
}

function getPrefix({ fusionPrefix }: { fusionPrefix: string }) {
  return fusionPrefix;
}

export default SMenu;
