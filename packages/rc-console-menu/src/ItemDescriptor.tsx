import React from 'react'
import * as S from './styles'
import { IItemDescriptor } from './types/IItemDescriptor.type'

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
