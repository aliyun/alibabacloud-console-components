import warning from 'warning'
import get from 'lodash/get'
import set from 'lodash/set'
import forOwn from 'lodash/forOwn'
import isPlainObject from 'lodash/isPlainObject'
import ReactIntl from '../../ReactIntl'
import withIntl from './withIntl'
import { create } from '../../factory'
import { IMessages } from '../../types'

const getPrefixedMessages = (messages: IMessages, prefix: string) => {
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
}: {
  namespace?: string
  defaultMessages?: IMessages
  defaultLocaleMessages?: { [locale: string]: IMessages }
  componentName: string
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
    if (!pickMessageSuccess) {
      warning(
        false,
        `[@ali/wind-intl] Messages[${keyPrefix}] should be an object, but get ${String(
          pickedMessages
        )}`
      )
    }
    const componentMessages = {
      ...(defaultLocaleMessages[locale] || {}),
      ...defaultMessages,
      ...(pickMessageSuccess ? (pickedMessages as IMessages) : {}),
      ...propsMessages,
    }

    const intlInstance = new ReactIntl(
      {
        locale,
        messages: componentMessages,
      },
      {
        isCrossModules: false,
      }
    )
    const intl = create(intlInstance)

    return {
      globIntl,
      globMessages,
      intl,
      locale,
      messages: componentMessages,
    }
  })

export default withRcIntl
