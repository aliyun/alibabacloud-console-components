/**
 * 判断是否为 ReactFragment
 * @param {*} component  传入的组件
 */
import React from 'react'
export default function isReactFragment(component) {
  if (component == null) {
    return false
  }

  if (component.type) {
    return component.type === React.Fragment
  }
  return component === React.Fragment
}
