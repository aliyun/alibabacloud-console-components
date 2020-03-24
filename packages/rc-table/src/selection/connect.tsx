import React, { Component } from 'react'
import isFunction from 'lodash/isFunction'
import { wrapDisplayName } from 'recompose'
import Context from './Context'

const getMappedProps = (mapper, mapperArgs) =>
  isFunction(mapper) ? mapper(...mapperArgs) : {}

const connect = (mapStateToProps, mapUpdateToProps) => WrappedComponent =>
  class Connect extends Component {
    static displayName = wrapDisplayName(WrappedComponent, 'connect')

    render() {
      const ownerProps = this.props
      return (
        <Context.Consumer>
          {contextValue => {
            const { update, ...restContextValue } = contextValue
            const stateProps = getMappedProps(mapStateToProps, [
              restContextValue,
              ownerProps,
            ])
            const updateProps = getMappedProps(mapUpdateToProps, [
              update,
              ownerProps,
            ])
            const props = {
              ...ownerProps,
              ...stateProps,
              ...updateProps,
            }
            return <WrappedComponent {...props} />
          }}
        </Context.Consumer>
      )
    }
  }

export default connect
