/* eslint-disable no-console */
import * as Cookie from 'js-cookie'
import get from 'lodash/get'
import isArray from 'lodash/isArray'
import kebabCase from 'lodash/kebabCase'
import { IDetermineLocale } from '../types'

const fromHtml = () => {
  let result
  try {
    result = document.getElementsByTagName('html')[0].getAttribute('lang')
  } catch (err) {
    console.warn(err)
  }

  return result
}

const fromNavigator = () => {
  let result
  try {
    result = window.navigator.language
  } catch (err) {
    console.warn(err)
  }

  return result
}

const fromGlobalIdentifier = (
  captures: string | string[]
): undefined | string => {
  if (typeof captures === 'string') {
    return fromGlobalIdentifier([captures])
  }

  if (!isArray(captures)) {
    return
  }

  for (let i = 0, len = captures.length; i < len; i++) {
    const identifier = captures[i]
    if (typeof identifier === 'string') {
      const value = get(window, identifier)
      if (value) {
        return value
      }
    }
  }
}

const fromCookie = (captures: string | string[]): undefined | string => {
  if (typeof captures === 'string') {
    return fromCookie([captures])
  }

  if (!isArray(captures)) {
    return
  }

  for (let i = 0, len = captures.length; i < len; i++) {
    const key = captures[i]
    if (typeof key === 'string') {
      const value = Cookie.get(key)
      if (value) {
        return value
      }
    }
  }
}

const DEFAULT_FALLBACK_LOCALE = 'en'

const getLocale = (
  options: IDetermineLocale & { transformer?: (input: string) => string } = {}
) => {
  const {
    globalIdentifier = [
      // LOCALE is not support yet
      'ALIYUN_CONSOLE_CONFIG.LOCALE',
      'ALIYUN_CONSOLE_CONFIG.LANG',
    ],
    cookie = [
      // aliyun_locale is not support yet
      'aliyun_locale',
      'aliyun_lang',
    ],
    html = true,
    navigator = true,
    fallback = DEFAULT_FALLBACK_LOCALE,
    transformer = kebabCase,
  } = options

  return transformer(
    fromGlobalIdentifier(globalIdentifier) ||
      fromCookie(cookie) ||
      (html ? fromHtml() : null) ||
      (navigator ? fromNavigator() : null) ||
      fallback ||
      DEFAULT_FALLBACK_LOCALE
  )
}

export default getLocale
