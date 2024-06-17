import warning from 'warning'
import get from 'lodash/get'
import isNil from 'lodash/isNil'
import isObject from 'lodash/isObject'

import Store from './Store'
import getLocale from './utils/getLocale'
import dateFormatPreset from './presets/date'
import { IMessages, IDetermineLocale, IFormatDateOptions } from './types'

/**
 * @public
 */
class IntlBase {
  public static get LOCALE_ACCESS_KEY() {
    return 'locale'
  }

  public static get MESSAGES_ACCESS_KEY() {
    return 'messages'
  }

  private _store: Store

  public constructor(
    data: { locale?: string; messages?: IMessages } = {},
    options: {
      isCrossModules?: boolean
      determineLocale?: IDetermineLocale
    } = {}
  ) {
    const { isCrossModules = true, ...restOptions } = options

    const { locale, messages } = data

    this._store = Store.create(isCrossModules)

    if (locale || messages) {
      this.set(
        {
          locale,
          messages,
        },
        restOptions
      )
    }
  }

  public resetStore(isCrossModules: boolean) {
    this._store = Store.create(isCrossModules)
  }

  public setLocale(locale: string) {
    this._store.set(IntlBase.LOCALE_ACCESS_KEY, locale)
  }

  public getLocale(): string | undefined {
    return this._store.get(IntlBase.LOCALE_ACCESS_KEY)
  }

  public setMessages(
    messages: IMessages,
    opts: { mergeMessages?: boolean } = {}
  ) {
    const mergeMessages = opts.mergeMessages
    if (mergeMessages) {
      const old = this.getMessages() || {}
      messages = { ...old, ...messages }
    }
    this._store.set(IntlBase.MESSAGES_ACCESS_KEY, messages)
  }

  public getMessages(): IMessages | undefined {
    return this._store.get(IntlBase.MESSAGES_ACCESS_KEY)
  }

  public set(
    data: { locale?: string; messages?: IMessages },
    options: {
      determineLocale?: IDetermineLocale
      mergeMessages?: boolean
    } = {}
  ) {
    const { locale, messages } = data
    const { determineLocale, mergeMessages } = options

    if (locale) {
      this.setLocale(locale)
    } else {
      this.setLocale(getLocale(determineLocale))
    }

    if (messages) {
      this.setMessages(messages, { mergeMessages })
    }
  }

  protected _onError?: OnError
  public registerOnError(onError: OnError) {
    const prevOnError = this._onError
    if (prevOnError) {
      this._onError = (...args) => {
        const return1 = prevOnError(...args)
        const return2 = onError(...args)
        return return1 ?? return2
      }
    } else {
      this._onError = onError
    }
  }

  public formatDate(value: Date | number, options?: IFormatDateOptions) {
    let result = String(value)
    let opts
    if (isNil(options)) {
      opts = dateFormatPreset.dateTime
    } else if (typeof options === 'string') {
      opts = get(dateFormatPreset, options, dateFormatPreset.dateTime)
    } else {
      opts = options
    }

    try {
      // @ts-ignore
      result = new Intl.DateTimeFormat(this.getLocale(), opts).format(value)
    } catch (err) {
      try {
        // ensure no error is thrown
        warning(false, (err as unknown as Error).message || 'Uncaught error')
        const fallback = this._onError?.({
          code: 'formatDate',
          error: err,
          ctx: { value, opts, locale: this.getLocale() },
        })
        if (fallback) result = fallback
      } catch (error) {}
    }

    // fix: https://github.com/aliyun/alibabacloud-console-components/issues/50
    if (!isObject(options)) {
      const reg = /24(?=(:\d{1,2}:\d{1,2}))/
      result = result.replace(reg, '00')
    }

    return result
  }

  public formatNumber(value: number, options?: Intl.NumberFormatOptions) {
    let result = String(value)
    try {
      result = new Intl.NumberFormat(this.getLocale(), options).format(value)
    } catch (err) {
      try {
        // ensure no error is thrown
        warning(false, (err as unknown as Error).message || 'Uncaught error')
        const fallback = this._onError?.({
          code: 'formatNumber',
          error: err,
          ctx: { value, options, locale: this.getLocale() },
        })
        if (fallback) result = fallback
      } catch (error) {}
    }

    return result
  }
}

export default IntlBase

export type OnError = (errorInfo: {
  code: ErrorCode
  key?: string
  ctx?: unknown
  error?: any
}) => string | void

export type ErrorCode =
  | 'formatDate'
  | 'formatNumber'
  | 'formatMessage.messagesNotSetYet'
  | 'formatMessage.notFound'
  | 'formatMessage.invalidMessage'
  | 'formatMessage.localeNotSet'
  | 'formatMessage.formatError'
