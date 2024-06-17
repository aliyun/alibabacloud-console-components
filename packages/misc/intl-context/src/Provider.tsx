import React, { Component } from 'react'
import PropTypes from 'prop-types'
import isPlainObject from 'is-plain-object'
import Context from './Context'
import { IIntlCtxValue, IProviderProps } from './types'

/* eslint-disable react/static-property-placement */

/**
 * @public
 * Map the contextValue get from intl-context
 * into a new contextValue, and re-provide it to it's subtree.
 */
class Provider extends Component<IProviderProps> {
  public static propTypes = {
    locale: PropTypes.string,
    messages: PropTypes.objectOf(PropTypes.any),
    extend: PropTypes.oneOfType([
      PropTypes.objectOf(PropTypes.any),
      PropTypes.func,
    ]),
    children: PropTypes.node,
  }

  /**
   * User can add new properties to provide.
   */
  public computeExtendValue(contextValue: IIntlCtxValue): IIntlCtxValue {
    const { extend } = this.props

    if (!extend) {
      return {}
    }

    if (typeof extend === 'function') {
      return extend(this.props, contextValue)
    }

    if (isPlainObject(extend)) {
      return extend
    }

    return {}
  }

  public computeExactValueFrom(contextValue: IIntlCtxValue): IIntlCtxValue {
    const {
      locale: contextLocale = undefined,
      messages: contextMessages = undefined,
      ...restContextValue
    } = contextValue || {}

    const { locale, messages } = this.props

    return {
      ...restContextValue,
      locale: locale || contextLocale,
      messages: messages || contextMessages,
      ...this.computeExtendValue(contextValue),
    }
  }

  public render() {
    const { children } = this.props

    return (
      <Context.Consumer>
        {value => (
          <Context.Provider value={this.computeExactValueFrom(value)}>
            {children}
          </Context.Provider>
        )}
      </Context.Consumer>
    )
  }
}

export default Provider
