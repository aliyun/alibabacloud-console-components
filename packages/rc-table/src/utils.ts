import React from 'react'
import isFunction from 'lodash/isFunction'

const isClassComponent = (val: any): boolean =>
  isFunction(val) && val.prototype && val.prototype.isReactComponent

const isFunctionalComponent = isFunction

const isComponent = (val: any): boolean =>
  isClassComponent(val) || isFunctionalComponent(val)

const isElement = React.isValidElement

export { isClassComponent, isFunctionalComponent, isComponent, isElement }
