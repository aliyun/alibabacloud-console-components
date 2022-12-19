import React from 'react'
import PropTypes from 'prop-types'
import set from 'lodash/set'
import { ConfigProvider } from '@alicloud/console-components'
import { Provider } from '@alicloud/console-components-intl-context'
import extractWindComponentMessages from '../extractWindComponentMessages'
import {
  IWindIntlPublic,
  IIntlProviderProps,
  IMessages,
} from '@alicloud/console-components-intl-core'

/**
 * Compatible `locale` to moment's locale format
 * moment's doesn't recognize regionless chinese locale like `zh`
 * @param {String} locale
 * @return {String}
 */
const compatLocale = (locale: string) => (locale === 'zh' ? 'zh-cn' : locale)

// TODO: 把normalize放在set的时候
const normalize = (obj: IMessages) => {
  const result = {}
  Object.keys(obj).forEach((key) => {
    set(result, key, obj[key])
  })

  return result
}

/* eslint-disable react/static-property-placement */

const createIntlProvider = (intl: IWindIntlPublic) => {
  /**
   * provide value to the intl-context.
   */
  const IntlProvider: React.FC<IIntlProviderProps> = (props) => {
    const {
      messages = intl.getMessages() || {},
      locale = intl.getLocale(),
      baseComponentKeyPrefix = '@wind_v2.base',
      configProviderProps = {},
      children,
      flatMode,
    } = props
    const extendProviderValue = () => {
      const { messages: rawMessages = intl.getMessages() || {} } = props
      return {
        rawMessages,
        intl,
        flatMode,
      }
    }
    const baseComponentMessages = {
      ...extractWindComponentMessages(messages, {
        namespace: baseComponentKeyPrefix,
      }),
      momentLocale: locale && compatLocale(locale),
    }

    // normalize操作比较耗时，因此提供了一个选项来绕过它
    const normalized = flatMode === true ? messages : normalize(messages)

    return (
      <Provider
        locale={locale}
        messages={normalized}
        extend={extendProviderValue}
      >
        <ConfigProvider {...configProviderProps} locale={baseComponentMessages}>
          <>{children}</>
        </ConfigProvider>
      </Provider>
    )
  }

  IntlProvider.propTypes = {
    locale: PropTypes.string,
    messages: PropTypes.objectOf(PropTypes.any),
    baseComponentKeyPrefix: PropTypes.string,
    configProviderProps: PropTypes.objectOf(PropTypes.any),
  }

  /**
   * A factory that create HOC to provide value to the intl-context.
   * The component subtree under this HOC can get the provided value from intl-context, which is a smaller influence compared to `intl.set()` in the top level.
   * User can use this to config the localization of wind components, which consume intl-context.
   * Notice that the top level intl instance will always use the top level config.
   */
  const withProvider = (providerProps?: IIntlProviderProps) => <
    WrappedComponentProps extends {}
  >(
    WrappedComponent: React.ComponentType<WrappedComponentProps>
  ) => {
    const HOC: React.FC<WrappedComponentProps> = (props) => {
      return (
        <IntlProvider {...providerProps}>
          <WrappedComponent {...props} />
        </IntlProvider>
      )
    }
    HOC.displayName = `withIntlProvider(${
      WrappedComponent.displayName || 'UnknownComponent'
    })`
    return HOC
  }

  return { IntlProvider, withProvider }
}

export default createIntlProvider
