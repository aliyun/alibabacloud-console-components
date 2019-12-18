import React from 'react'

// https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging

export function getDisplayName(WrappedComponent: React.ComponentType<any>) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export function wrapDisplayName(
  WrappedComponent: React.ComponentType<any>,
  wrapperName: string
) {
  return `${wrapperName}(${getDisplayName(WrappedComponent)})`
}
