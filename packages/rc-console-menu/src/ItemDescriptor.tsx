import React from 'react'
import { Location } from 'history'
import * as S from './styles'

/* eslint-disable @typescript-eslint/no-explicit-any */

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

/**
 * @public
 */
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

/**
 * @internal
 */
export function mapItemToJSX(item: IItemDescriptor): React.ReactNode {
  const {
    key,
    label,
    disabled = false,
    visible = true,
    render,
    items: subItems,
    navProps,
    type,
  } = item
  if (visible) {
    if (subItems) {
      return (
        <S.SubMenu key={key} label={label} {...navProps}>
          {subItems.map(mapItemToJSX)}
        </S.SubMenu>
      )
    }

    if (type === 'divider') {
      return <S.Divider key={key} />
    }

    return (
      <S.Item key={key} disabled={disabled} {...navProps}>
        {render ? render(item) : label}
      </S.Item>
    )
  }
  return null
}

/**
 * 打平嵌套结构，得到由叶子节点组成的数组。
 * 类似于将`[item1, [item2, item3], item4]`变成`[item1, item2, item3, item4]`
 */
/*
export function flattenNestedItems(
  items: IItemDescriptor[]
): IItemDescriptor[] {
  const result: IItemDescriptor[] = []
  items.forEach(item => {
    if (item.items) {
      // this is a parent
      result.push(...flattenNestedItems(item.items))
    } else {
      // this is a leaf
      result.push(item)
    }
  })
  return result
}
*/
