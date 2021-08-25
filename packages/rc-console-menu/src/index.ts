import './index.less'
import ConsoleMenu from './ConsoleMenu'
import { SubMenu, Item, Divider, Header, Menu, SecondaryMenu } from './styles'

/**
 * @public
 */
const StyledComponents = { SubMenu, Item, Divider, Header, Menu, SecondaryMenu }

/**
 * @public
 */
export type IConsoleMenu = typeof ConsoleMenu & {
  Item: typeof Item
  SubMenu: typeof SubMenu
  Divider: typeof Divider
}

/**
 * @public
 */
const ExportedConsoleMenu: IConsoleMenu = Object.assign(ConsoleMenu, {
  Item,
  SubMenu,
  Divider,
})

export default ExportedConsoleMenu

export * from './ConsoleMenu'
export { ConsoleMenu }

export * from './ItemDescriptor'
export { Item, SubMenu, Divider, StyledComponents }

export { IConsoleMenuProps } from './types/IConsoleMenuProps.type'
export { IItemDescriptor } from './types/IItemDescriptor.type'
export { IRoutableItemDescriptor } from './types/IRoutableItemDescriptor.type'
export { IRoutableMenuProps } from './types/IRoutableMenuProps.type'

export { HybridCloudLightTheme } from './theme/hybridcloud-light'
export { HybridCloudDarkTheme } from './theme/hybridcloud-dark'
export { XConsoleTheme } from './theme/xconsole'
export { WindTheme } from './theme/wind'
export { XConsoleDarkTheme } from './theme/xconsole-dark'
