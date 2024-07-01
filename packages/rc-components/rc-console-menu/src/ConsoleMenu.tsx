import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';
import { mapItemToJSX } from './ItemDescriptor';
import Header from './Header';
import { GetFusionConfig } from './utils';
import { IConsoleMenuProps } from './types/IConsoleMenuProps.type';

const PrimaryMenu: React.FC<{
  fusionPrefix: string
  [key: string]: any
}> = (props) => {
  return (
    <S.Menu
      openMode="multiple"
      {...props}
      type="normal"
      direction="ver"
      activeDirection={null}
      mode="inline"
      triggerType="click"
      // inlineIndent={16}
      popupAlign="follow"
      hasArrow
    />
  );
};

const SecondaryMenu: React.FC<{
  fusionPrefix: string
  [key: string]: any
}> = (props) => (
  <S.SecondaryMenu
    {...props}
    type="line"
    direction="ver"
    activeDirection="right"
    triggerType="click"
    inlineIndent={8}
  />
);

export interface IOnSelect {
  (value: string): void
}

const ConsoleMenu: React.FC<
IConsoleMenuProps & {
  /**
     * 来自ConfigProvider
     */
  fusionConfig: any
}
> = ({
  type = 'primary',
  header,
  headers,
  onSelectHeader,
  items,
  children,
  activeKey,
  defaultActiveKey,
  fusionConfig = {},
  ...restProps
}) => {
  const ExactMenuComponent = type === 'secondary' ? SecondaryMenu : PrimaryMenu;
  const { prefix: fusionPrefix = 'next-' } = fusionConfig;
  return (
    <ExactMenuComponent
      // 透传给Nav
      {...restProps}
      fusionPrefix={fusionPrefix}
      header={
        header && (
          <Header
            fusionPrefix={fusionPrefix}
            header={header}
            headers={headers}
            onSelectHeader={onSelectHeader}
          />
        )
      }
      selectedKeys={activeKey}
      defaultSelectedKeys={defaultActiveKey}
    >
      {Array.isArray(items) && items.map(mapItemToJSX)}
      {children}
    </ExactMenuComponent>
  );
};

const itemBasicShape = {
  key: PropTypes.string,
  label: PropTypes.node,
  render: PropTypes.func,
  visible: PropTypes.bool,
  disabled: PropTypes.bool,
};

ConsoleMenu.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  header: PropTypes.node,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      ...itemBasicShape,
      items: PropTypes.arrayOf(PropTypes.shape(itemBasicShape)),
    }),
  ) as any,
  activeKey: PropTypes.string,
  defaultActiveKey: PropTypes.string,
  defaultOpenKeys: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string.isRequired),
  ]),
  defaultOpenAll: PropTypes.bool,
  children: PropTypes.node,
};

export default GetFusionConfig(ConsoleMenu) as React.FC<IConsoleMenuProps>;
