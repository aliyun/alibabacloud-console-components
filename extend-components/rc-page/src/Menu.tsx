import * as React from 'react'
import { Nav } from '@alicloud/console-components'
import StyledMenu, { Item, Group, SubMenu, PopupItem } from './styles/Menu'

/**
 * Menu组件的类型。我们通过Page的对象属性导出了其余的Menu组件。
 * @public
 */
export interface IMenu extends React.FC<React.ComponentProps<typeof Nav>> {
  Item: React.ComponentType<React.ComponentProps<typeof Nav['Item']>>
  Group: React.ComponentType<React.ComponentProps<typeof Nav['Group']>>
  SubMenu: React.ComponentType<React.ComponentProps<typeof Nav['SubNav']>>
  PopupItem: React.ComponentType<React.ComponentProps<typeof Nav['PopupItem']>>
}

/**
 * @public
 */
const Menu: IMenu = (props: {}) => (
  <StyledMenu
    type="line"
    direction="ver"
    activeDirection="right"
    triggerType="click"
    {...props}
  />
)

Menu.Item = Item
Menu.Group = Group
Menu.SubMenu = SubMenu
Menu.PopupItem = PopupItem

export default Menu
