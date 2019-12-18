import { IWindIntlPublic } from './types'
import ReactIntl from './ReactIntl'

const create = (instance: ReactIntl) => {
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
  return intl
}

export { create }
