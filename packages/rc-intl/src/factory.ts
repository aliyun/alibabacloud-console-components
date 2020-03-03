import {
  IWindIntlPublic,
  IMessages,
  IDetermineLocale,
  IWindIntlExtended,
} from './types'
import ReactIntl from './ReactIntl'
import createIntlProvider from './utils/useIntlContext/createIntlProvider'
import { Consumer } from '@alicloud/console-components-intl-context'

/**
 * @public
 */
const createReactIntlFromInstance = (
  instance: ReactIntl
): IWindIntlExtended => {
  const intl: IWindIntlPublic = Object.assign(
    instance.formatMessage.bind(instance),
    {
      set: instance.set.bind(instance),
      resetStore: instance.resetStore.bind(instance),
      setLocale: instance.setLocale.bind(instance),
      setMessages: instance.setMessages.bind(instance),
      getLocale: instance.getLocale.bind(instance),
      getMessages: instance.getMessages.bind(instance),
      message: instance.formatMessage.bind(instance),
      html: instance.formatHTMLMessage.bind(instance),
      date: instance.formatDate.bind(instance),
      number: instance.formatNumber.bind(instance),
    }
  )
  const { IntlProvider, withProvider } = createIntlProvider(intl)
  const intlExtended = Object.assign(intl, {
    IntlProvider,
    withProvider,
    Consumer,
  })
  return intlExtended
}

const createReactIntlFromCfg = (
  data: { locale?: string; messages?: IMessages } = {},
  options: {
    isCrossModules?: boolean
    determineLocale?: IDetermineLocale
  } = {}
): IWindIntlExtended => {
  const instance = new ReactIntl(data, options)
  return createReactIntlFromInstance(instance)
}

// the name 'create' is for backward compatibility reason
export { createReactIntlFromInstance as create, createReactIntlFromCfg }
