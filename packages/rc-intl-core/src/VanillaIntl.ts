import warning from 'warning'
import IntlMessageFormat from 'intl-messageformat'
import get from 'lodash/get'
import isNil from 'lodash/isNil'
import isPlainObject from 'lodash/isPlainObject'

import escapeValues from './utils/escapeValues'
import { IFormatMessageOptions, IFormatMessageContext } from './types'
import IntlBase from './IntlBase'

/* eslint-disable no-dupe-class-members */
/** @public */
class VanillaIntl extends IntlBase {
  public formatMessage(key: string, values?: IFormatMessageContext): string

  public formatMessage(options: IFormatMessageOptions): string

  public formatMessage(
    key: string | IFormatMessageOptions,
    values?: IFormatMessageContext
  ): string {
    const {
      exactKey,
      exactDefaultMessage,
      exactValues,
    } = getExactOptionsForFormat(key, values)

    const messages = this.getMessages()
    const message = get(messages, exactKey, exactDefaultMessage)

    if (isNil(message)) {
      if (!messages) {
        warning(
          false,
          `[@ali/wind-intl] Cannot format "${exactKey}" before messages is set.` +
            `will resolve this message with key: ${exactKey}`
        )
      }
      warning(
        false,
        `[@ali/wind-intl] Cannot read ${exactKey} from messages, ` +
          `will resolve this message with key: ${exactKey}`
      )
      return exactKey
    }
    if (typeof message !== 'string') {
      warning(
        false,
        `[@ali/wind-intl] Expect message to be a string, but get ${Object.prototype.toString.call(
          message
        )}. will resolve this message with key: ${exactKey}`
      )
      return exactKey
    }

    const locale = this.getLocale()
    if (!locale) {
      warning(
        false,
        `[@ali/wind-intl] Locale is not set. Using default locale.`
      )
    }
    let result = exactKey
    try {
      result = new IntlMessageFormat(message, locale).format(exactValues)
    } catch (err) {
      warning(false, err.message || 'Uncaught error')
    }

    return result
  }

  public formatHTMLMessage(key: string, values?: IFormatMessageContext): string

  public formatHTMLMessage(options: IFormatMessageOptions): string

  public formatHTMLMessage(
    key: string | IFormatMessageOptions,
    values?: IFormatMessageContext
  ) {
    const {
      exactKey,
      exactDefaultMessage,
      exactValues,
    } = getExactOptionsForFormat(key, values)
    const escapedValues = exactValues && escapeValues(exactValues)
    return this.formatMessage({
      id: exactKey,
      defaultMessage: exactDefaultMessage,
      values: escapedValues,
    })
  }
}

export default VanillaIntl

/**
 * @description get exact option for multi-signature method
 */
export function getExactOptionsForFormat(
  key: string | IFormatMessageOptions,
  values?: IFormatMessageContext
) {
  let exactKey: string
  let exactDefaultMessage: string | undefined
  let exactValues: IFormatMessageContext = isPlainObject(values)
    ? (values as IFormatMessageContext)
    : {}
  if (typeof key === 'string') {
    exactKey = key
  } else {
    const { id, defaultMessage, values: vals } = key
    if (typeof id !== 'string') {
      throw new ReferenceError(
        `[@ali/wind-intl] Expect id to be a string but get a ${Object.prototype.toString.call(
          id
        )}.`
      )
    }
    exactKey = id
    exactDefaultMessage = defaultMessage
    if (isPlainObject(vals)) {
      exactValues = vals as IFormatMessageContext
    }
  }
  return { exactKey, exactDefaultMessage, exactValues }
}
