import { Nav } from '@alicloud/console-components'
import { IItemDescriptor } from './IItemDescriptor.type'

type NavProps = React.ComponentProps<typeof Nav>

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
  onSelectHeader?: (value: string) => void
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
