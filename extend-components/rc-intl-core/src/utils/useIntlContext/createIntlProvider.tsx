import React from 'react'
import PropTypes from 'prop-types'
import set from 'lodash/set'
// import { ConfigProvider } from '@alicloud/console-components'
import { Provider } from '@alicloud/console-components-intl-context'
import { IWindIntlPublic, IIntlProviderProps, IMessages } from '../../types'

// TODO: 把normalize放在set的时候
const normalize = (obj: IMessages) => {
  const result = {}
  Object.keys(obj).forEach(key => {
    set(result, key, obj[key])
  })

  return result
}

/* eslint-disable react/static-property-placement */

const createIntlProvider = (intl: IWindIntlPublic) => {
  /**
   * provide value to the intl-context.
   * The component subtree under this React context can get messages from intl-context, which is a smaller influence compared to `intl.set()` in the top level.
   * User can use this to config the localization of wind components, which consume intl-context.
   * Notice that the top level intl instance will always use the top level config.
   * 这个react context通常是用来给wind组件传递文案信息的。应用层代码一般不需要通过react context来分发文案，直接从某个文件import intl实例就好。
   */
  const IntlProvider: React.FC<IIntlProviderProps> = props => {
    const {
      messages = intl.getMessages() || {},
      locale = intl.getLocale(),
      children,
    } = props
    const extendProviderValue = () => {
      const { messages: rawMessages = intl.getMessages() || {} } = props
      return {
        rawMessages,
        intl,
      }
    }

    return (
      <Provider
        locale={locale}
        messages={normalize(messages)}
        extend={extendProviderValue}
      >
        <>{children}</>
      </Provider>
    )
  }

  IntlProvider.propTypes = {
    locale: PropTypes.string,
    messages: PropTypes.objectOf(PropTypes.any),
  }

  const withProvider = (providerProps?: IIntlProviderProps) => <
    WrappedComponentProps extends {}
  >(
    WrappedComponent: React.ComponentType<WrappedComponentProps>
  ) => {
    const HOC: React.FC<WrappedComponentProps> = props => {
      return (
        <IntlProvider {...providerProps}>
          <WrappedComponent {...props} />
        </IntlProvider>
      )
    }
    HOC.displayName = `withIntlProvider(${WrappedComponent.displayName ||
      'UnknownComponent'})`
    return HOC
  }

  return { IntlProvider, withProvider }
}

export default createIntlProvider
