import warning from 'warning'
import get from 'lodash/get'
import set from 'lodash/set'
import forOwn from 'lodash/forOwn'
import isPlainObject from 'lodash/isPlainObject'
import withIntl from './withIntl'
import { createReactIntlFromCfg } from '../../factory'
import { IMessages } from '../../types'

export const getPrefixedMessages = (messages: IMessages, prefix: string) => {
  const flattenedMessages = {}

  forOwn(messages, (value, key) => {
    set(flattenedMessages, key, value)
  })

  return get(flattenedMessages, prefix)
}

/**
 * @public
 * Other wind components use intl-context to read localization-related config.
 * This is how they consume intl-context.
 */
const withRcIntl = ({
  namespace = '@wind_v2.rc',
  defaultMessages = {},
  defaultLocaleMessages = {},
  componentName,
  warningIfNoMessageFromCtx = true,
}: {
  namespace?: string
  defaultMessages?: IMessages
  defaultLocaleMessages?: { [locale: string]: IMessages }
  componentName: string
  warningIfNoMessageFromCtx?: boolean
}) =>
  withIntl((value, hocProps: { messages?: IMessages }) => {
    const keyPrefix = `${namespace}.${componentName}`
    const { messages: propsMessages = {} } = hocProps
    const {
      intl: globIntl = undefined,
      messages: globMessages = {},
      locale = 'en',
    } = value || {}

    const pickedMessages = getPrefixedMessages(globMessages, keyPrefix)
    const pickMessageSuccess = isPlainObject(pickedMessages)
    if (!pickMessageSuccess && warningIfNoMessageFromCtx) {
      warning(
        false,
        `[@ali/wind-intl] Messages[${keyPrefix}] should be an object, but get ${String(
          pickedMessages
        )}`
      )
    }
    const componentMessages = {
      ...defaultMessages,
      ...(defaultLocaleMessages[locale] || {}),
      ...(pickMessageSuccess ? (pickedMessages as IMessages) : {}),
      ...propsMessages,
    }
    const intl = createReactIntlFromCfg({
      locale,
      messages: componentMessages,
    })
    return {
      globIntl,
      globMessages,
      intl,
      locale,
      messages: componentMessages,
    }
  })

export default withRcIntl
