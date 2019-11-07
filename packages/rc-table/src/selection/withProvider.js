import React, { Component } from 'react'
import { wrapDisplayName } from 'recompose'
import Provider from './Provider'

const withProvider = WrappedComponent => class H extends Component {
  static displayName = wrapDisplayName(
    WrappedComponent,
    'withSelectionProvider'
  )

  render() {
    return (
      <Provider {...this.props}>
        {props => <WrappedComponent {...props} />}
      </Provider>
    )
  }
}

export default withProvider
