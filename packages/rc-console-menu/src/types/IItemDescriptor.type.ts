/**
 * @public
 */
export interface IItemDescriptor {
  /**
   * 菜单项的Id，在一个导航里不允许出现重复的 key
   */
  key: string
  /**
   * 菜单项展示的内容
   */
  label?: React.ReactNode
  /**
   * 是否禁用该菜单项
   */
  disabled?: boolean
  /**
   * 是否渲染该菜单项
   */
  visible?: boolean
  /**
   * 菜单项内容的渲染函数，作用与`label`相同，只不过是通过渲染函数的方式来定义内容
   */
  render?: (item: IItemDescriptor) => React.ReactNode
  /**
   * 子菜单项的声明，传入该prop使得当前item成为一个可折叠节点
   */
  items?: IItemDescriptor[]
  /**
   * 透传给基础组件`<Nav>`或者`<Nav.SubNav>`的props，极少数情况下可能会用到。见【使用结构化声明】demo
   */
  navProps?: any;

  type?: 'divider' | 'item'
}