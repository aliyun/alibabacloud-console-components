import React from 'react'
import PropTypes from 'prop-types'
import { Nav } from '@alicloud/console-components'
import * as S from './styles'
import { IItemDescriptor, mapItemToJSX } from './ItemDescriptor'
import Header from './Header'
import { GetFusionConfig } from './utils'

type NavProps = React.ComponentProps<typeof Nav>

/* eslint-disable @typescript-eslint/no-explicit-any */

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
  )
}

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
)

export interface IOnSelect {
  (value: string): void
}

/**
 * @public
 */
export interface IConsoleMenuProps
  extends Omit<NavProps, 'onItemClick' | 'onOpen'> {
  /**
   * 导航场景类型，其中 'primary' 对应应用中的主导航，即应用级别导航；
   * 'secondary' 对应交互设计中的二级导航，通常与 wind-rc-page 配合使用
   */
  type?: 'primary' | 'secondary'
  /**
   * 导航菜单头部标题
   */
  header?: React.ReactNode
  /**
   * 使用对象数组来声明header数据源
   */
  headers?: string[]
  /**
   * 使用对象数组来声明header数据源
   */
  onSelectHeader?: IOnSelect
  /**
   * 使用对象数组来声明菜单项
   */
  items?: IItemDescriptor[]
  /**
   * 使用JSX来声明菜单项
   */
  children?: React.ReactNode
  /**
   * 当前被选中的菜单项，使用该prop让该组件成为受控组件
   */
  activeKey?: string
  /**
   * 默认被选中的菜单项
   */
  defaultActiveKey?: string
  /**
   * 当前展开的SubMenu项，使用该prop让该组件成为受控组件
   */
  openKeys?: string | string[]
  /**
   * 默认展开的SubMenu项
   */
  defaultOpenKeys?: string | string[]
  /**
   * 是否默认展开所有SubMenu项，它的优先级高于defaultOpenKeys
   */
  defaultOpenAll?: boolean
  /**
   * 菜单项点击回调
   */
  onItemClick?: (key: string, itemInfo: any, event: MouseEvent) => void
  /**
   * 菜单项展开回调
   */
  onOpen?: (
    openKeys: string[],
    openInfo: { key: string; open: boolean }
  ) => void
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
  const ExactMenuComponent = type === 'secondary' ? SecondaryMenu : PrimaryMenu
  const { prefix: fusionPrefix = 'next-' } = fusionConfig
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
  )
}

const itemBasicShape = {
  key: PropTypes.string,
  label: PropTypes.node,
  render: PropTypes.func,
  visible: PropTypes.bool,
  disabled: PropTypes.bool,
}

ConsoleMenu.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  header: PropTypes.node,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      ...itemBasicShape,
      items: PropTypes.arrayOf(PropTypes.shape(itemBasicShape)),
    })
  ) as any,
  activeKey: PropTypes.string,
  defaultActiveKey: PropTypes.string,
  defaultOpenKeys: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string.isRequired),
  ]),
  defaultOpenAll: PropTypes.bool,
  children: PropTypes.node,
}

export default GetFusionConfig(ConsoleMenu) as React.FC<IConsoleMenuProps>
