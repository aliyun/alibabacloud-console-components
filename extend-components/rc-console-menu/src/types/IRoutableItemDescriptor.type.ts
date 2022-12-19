import { Location } from 'history'
import { IItemDescriptor } from './IItemDescriptor.type'

export interface IRoutableItemDescriptor extends IItemDescriptor {
  /**
   * 菜单项点击后跳转的路径（应用内跳转），也可以通过函数表达式动态返回需要跳转的 pathname 或 location。
   * 使用该prop，会使得item被渲染成{@link https://reacttraining.com/react-router/web/api/Link | React-Router的Link组件}
   */
  to?:
    | string
    | ((
        context: { match: any; location: Location },
        thisItem: IRoutableItemDescriptor
      ) => string)
  /**
   * 菜单项点击之后跳转的超链接（url 跳转）。
   * 使用该prop，会使得item被渲染成`<a>`
   */
  href?:
    | string
    | ((
        context: { match: any; location: Location },
        thisItem: IRoutableItemDescriptor
      ) => string)
  /**
   * 透传给`<Link>`或者`<a>`的props
   */
  linkProps?: any
  /**
   * 定义匹配路由路径的多个 pattern ，如果 location.pathname 与其中任意一个 pattern 相匹配，则该菜单项被选中。
   * 匹配算法与{@link https://reacttraining.com/react-router/web/api/matchPath | react-router}相同
   */
  activePathPatterns?: string[]
  /**
   * 子菜单项的声明，传入该prop使得当前item成为一个可折叠节点
   */
  items?: IRoutableItemDescriptor[]
}
