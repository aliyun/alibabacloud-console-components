/*
import React from 'react'
import PropTypes from 'prop-types'
import {
  Provider as ContextProvider,
  Consumer as ContextConsumer,
} from '@ali/wind-intl-context'
import Intl from './ReactIntl'
import { create } from './factory'
import { IMessages } from './types'

interface IProps {
  locale?: string
  messages?: IMessages
}

class Provider extends React.Component<IProps> {
  static propTypes = {
    locale: PropTypes.string,
    messages: PropTypes.objectOf(PropTypes.any),
    children: PropTypes.node,
  }

  static Consumer: typeof ContextConsumer = ContextConsumer

  extendProviderValue(ownerProps: IProps) {
    const { locale, messages } = ownerProps
    // TODO: extendProviderValue is run in 'render phase',
    // so intl will be different after each render
    return {
      intl: create(
        new Intl(
          { locale, messages },
          {
            isCrossModules: false,
          }
        )
      ),
    }
  }

  render() {
    const { locale, messages, children } = this.props
    return (
      <ContextProvider
        locale={locale}
        messages={messages}
        extend={this.extendProviderValue}
      >
        {children}
      </ContextProvider>
    )
  }
}

export default Provider
*/
