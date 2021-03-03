import { RouteComponentProps } from 'react-router-dom'
import { Location } from 'history'
import { IConsoleMenuProps } from './IConsoleMenuProps.type'
import { IRoutableItemDescriptor } from './IRoutableItemDescriptor.type'

/**
 * @public
 */
export interface IRoutableMenuProps
  extends RouteComponentProps,
    IConsoleMenuProps {
  /**
   * 根据当前location来返回要激活的菜单项
   */
  mapLocationToActiveKey?: (location: Location) => string
  /**
   * 使用对象数组来声明菜单项
   */
  items?: IRoutableItemDescriptor[]
}
