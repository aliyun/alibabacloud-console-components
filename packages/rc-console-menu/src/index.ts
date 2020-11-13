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
export * from './RoutableMenuTypes'
export { Item, SubMenu, Divider, StyledComponents }

export { HybridCloudLightTheme } from './theme/hybridcloud-light'
export { HybridCloudDarkTheme } from './theme/hybridcloud-dark'
export { XConsoleTheme } from './theme/xconsole'
export { WindTheme } from './theme/wind'
