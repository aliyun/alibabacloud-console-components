import { RouteComponentProps } from 'dva/router'
import { Location } from 'history'
import { IConsoleMenuProps } from './ConsoleMenu'
import { IRoutableItemDescriptor } from './ItemDescriptor'

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
