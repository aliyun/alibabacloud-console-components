import React, { isValidElement } from 'react'
import isPlainObject from 'lodash/isPlainObject'
import isFunction from 'lodash/isFunction'
import { TableOperaion, ITableProps } from './index'
import { isComponent } from './utils'

const renderComponent = (
  DefaultComponent: any,
  props: TableOperaion,
  ...args: ITableProps[]
): React.ReactNode | null => {
  if (isValidElement(props)) {
    return props
  }

  if (isPlainObject(props)) {
    const isValidComponent = isComponent(DefaultComponent)
    if (!isValidComponent) {
      // TODO only warning on dev
      console.warn(
        `Default component is expected to be a class or function as React component but received a ${DefaultComponent}.`
      )
    }
    return isValidComponent ? <DefaultComponent {...props} /> : null
  }

  if (isFunction(props)) {
    return props(args[0])
  }

  return null
}

export default renderComponent
