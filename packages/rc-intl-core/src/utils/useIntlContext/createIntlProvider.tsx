import React from 'react'
import PropTypes from 'prop-types'
import set from 'lodash/set'
// import { ConfigProvider } from '@alicloud/console-components'
import { Provider } from '@alicloud/console-components-intl-context'
import extractWindComponentMessages from '../extractWindComponentMessages'
import { IWindIntlPublic, IIntlProviderProps, IMessages } from '../../types'

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
  Object.keys(obj).forEach(key => {
    set(result, key, obj[key])
  })

  return result
}

/* eslint-disable react/static-property-placement */

const createIntlProvider = (intl: IWindIntlPublic) => {
  const IntlProvider: React.FC<IIntlProviderProps> = props => {
    const {
      messages = intl.getMessages() || {},
      locale = intl.getLocale(),
      baseComponentKeyPrefix = '@wind_v2.base',
      configProviderProps = {},
      children,
    } = props
    const extendProviderValue = () => {
      const { messages: rawMessages = intl.getMessages() || {} } = props
      return {
        rawMessages,
        intl,
      }
    }
    const baseComponentMessages = {
      ...extractWindComponentMessages(messages, {
        namespace: baseComponentKeyPrefix,
      }),
      momentLocale: locale && compatLocale(locale),
    }

    return (
      <Provider
        locale={locale}
        messages={normalize(messages)}
        extend={extendProviderValue}
      >
        <>{children}</>
        {/* <ConfigProvider {...configProviderProps} locale={baseComponentMessages}>
        </ConfigProvider> */}
      </Provider>
    )
  }

  IntlProvider.propTypes = {
    locale: PropTypes.string,
    messages: PropTypes.objectOf(PropTypes.any),
    baseComponentKeyPrefix: PropTypes.string,
    configProviderProps: PropTypes.objectOf(PropTypes.any),
  }
  return IntlProvider
}

export default createIntlProvider
