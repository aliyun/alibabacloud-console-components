import React from 'react'
import { wrapDisplayName } from 'recompose'
import Provider from './Provider'

function withProvider<T>(
  WrappedComponent: React.ComponentType<T>
): React.FC<T> {
  const H: React.FC<T> = props => {
    return (
      <Provider {...props}>
        {(newProps: T) => <WrappedComponent {...(newProps as T)} />}
      </Provider>
    )
  }
  H.displayName = wrapDisplayName(WrappedComponent, 'withSelectionProvider')
  return H
}

export default withProvider
