import React from 'react'
import { wrapDisplayName } from 'recompose'
import { TableProps } from '@alicloud/console-components/types/table'
import { IRcTableProps } from '../index'
import Provider from './Provider'

function withProvider<T>(
  WrappedComponent: React.ComponentType<T>
): React.FC<IRcTableProps & TableProps> {
  const H: React.FC<IRcTableProps & TableProps> = props => {
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
