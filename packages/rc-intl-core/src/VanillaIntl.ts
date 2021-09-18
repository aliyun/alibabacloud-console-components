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
      let result: string = exactKey
      if (!messages) {
        try {
          const fallback = this._onError?.({
            code: 'formatMessage.messagesNotSetYet',
            key: exactKey,
            ctx: { defaultMessage: exactDefaultMessage, values: exactValues },
          })
          if (fallback) result = fallback
        } catch (error) {}
        warning(
          false,
          `[@ali/wind-intl] Cannot format "${exactKey}" before messages is set.` +
            `will resolve this message with: ${result}`
        )
      } else {
        try {
          const fallback = this._onError?.({
            code: 'formatMessage.notFound',
            key: exactKey,
            ctx: { defaultMessage: exactDefaultMessage, values: exactValues },
          })
          if (fallback) result = fallback
        } catch (error) {}
        warning(
          false,
          `[@ali/wind-intl] Cannot read ${exactKey} from messages, ` +
            `will resolve this message with: ${result}`
        )
      }
      return result
    }
    if (typeof message !== 'string') {
      let result = exactKey
      try {
        const fallback = this._onError?.({
          code: 'formatMessage.invalidMessage',
          key: exactKey,
          ctx: {
            defaultMessage: exactDefaultMessage,
            values: exactValues,
            message,
          },
        })
        if (fallback) result = fallback
      } catch (error) {}
      warning(
        false,
        `[@ali/wind-intl] Expect message to be a string, but get ${Object.prototype.toString.call(
          message
        )}. will resolve this message with: ${result}`
      )
      return result
    }

    const locale = this.getLocale()
    if (!locale) {
      warning(
        false,
        `[@ali/wind-intl] Locale is not set. You should set locale using \`intl.setLocale\` or \`intl.set\`.
        Falling back to default locale from browser.`
      )
      try {
        this._onError?.({
          code: 'formatMessage.localeNotSet',
          key: exactKey,
          ctx: {
            defaultMessage: exactDefaultMessage,
            values: exactValues,
            message,
          },
        })
      } catch (error) {}
    }
    let result = exactKey
    try {
      result = new IntlMessageFormat(message, locale).format(exactValues)
    } catch (err: any) {
      try {
        const fallback = this._onError?.({
          code: 'formatMessage.formatError',
          key: exactKey,
          ctx: {
            defaultMessage: exactDefaultMessage,
            values: exactValues,
            message,
          },
          error: err,
        })
        if (fallback) result = fallback
      } catch (error) {}
      if (
        err?.message === `Expected "{" but "-" found.` ||
        err?.found === '-'
      ) {
        warning(
          false,
          `文案格式不正确。文案key："${exactKey}"。
使用select语法的时候， select case不能包含连字符“-”。比如：
This is {region, select,
  cn-huabei {华北}
  cn-qingdao {青岛}
}.
是错误的文案，不符合最新的ICU语法规范： https://formatjs.io/docs/react-intl/upgrade-guide-3x#placeholder-argument-syntax-change
应该改成以下形式：
This is {region, select,
  cnHuabei {华北}
  cnQingdao {青岛}
}.
`
        )
      } else {
        const msg = err?.message || 'Uncaught error'
        warning(
          false,
          `文案格式不正确。文案key："${exactKey}"。错误信息："${msg}"`
        )
      }
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
