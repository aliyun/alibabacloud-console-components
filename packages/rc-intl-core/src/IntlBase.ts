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
      warning(false, err.message || 'Uncaught error')
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
      warning(false, err.message || 'Uncaught error')
    }

    return result
  }
}

export default IntlBase
