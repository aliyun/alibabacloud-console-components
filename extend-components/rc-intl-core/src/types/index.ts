import React, { ReactNode } from 'react'
import { IPreset } from '../presets/date'

import ReactIntl from '../ReactIntl'

/**
 * @public
 */
export interface IMessages {
  [key: string]: string
}

/**
 * @public
 */
export interface IIntlCtxValue {
  locale?: string
  messages?: IMessages
  /**
   * 如果能够保证msg对象是一个扁平结构而不是嵌套对象（大部分情况是如此），
   * 就能简化一些处理过程，提高性能
   */
  flatMode?: boolean
  // Provider allow users to extend IIntlCtxValue with anything
  [key: string]: any
}

/**
 * @public
 */
export interface IDetermineLocale {
  globalIdentifier?: string | string[]
  cookie?: string | string[]
  html?: boolean
  navigator?: boolean
  fallback?: string
}

/**
 * @public
 */
export interface IFormatMessageOptions {
  id: string
  defaultMessage?: string
  values?: IFormatMessageContext
}

/**
 * @public
 */
export interface IFormatMessageContext {
  [key: string]: any
}

// 支持用户为intl的key提供类型，让ts对key做类型检查
export interface ExtendIntl {
  [prop: string]: any
}
// https://stackoverflow.com/a/57744230/8175856
export type NoInfer<T> = [T][T extends any ? 0 : never]

export type IntlKeys = 'Write this and you will get fired!' extends ExtendIntl['keys'] // 说明用户没有为IntlKeys提供declaration merging, keys接受任何合法值
  ? string
  : ExtendIntl['keys']

/**
 * @public
 * if use ReactIntl, user can pass react node as format context
 */
export interface IFormatMessageOptionsReact<CustomKeys> {
  id: ExtendIntl['keys'] | NoInfer<CustomKeys>
  defaultMessage?: string
  values?: IFormatMessageContextReact
}

/**
 * @public
 */
export interface IFormatMessageContextReact {
  [key: string]: string | ReactNode
}

/**
 * @public
 * The type that package user will get. Created by factory.ts.
 */
export type IWindIntlPublic = ReactIntl['formatMessage'] & {
  set: ReactIntl['set']
  resetStore: ReactIntl['resetStore']
  setLocale: ReactIntl['setLocale']
  setMessages: ReactIntl['setMessages']
  registerOnError: ReactIntl['registerOnError']
  getLocale: ReactIntl['getLocale']
  getMessages: ReactIntl['getMessages']
  message: ReactIntl['formatMessage']
  html: ReactIntl['formatHTMLMessage']
  date: ReactIntl['formatDate']
  number: ReactIntl['formatNumber']
}

/**
 * @public
 * The type that package user will get. Created by factory.ts.
 */
export type IWindIntlExtended = IWindIntlPublic & {
  IntlProvider: React.FC<IIntlProviderProps>
  withProvider: (
    providerProps?: IIntlProviderProps | undefined
  ) => <WrappedComponentProps extends {}>(
    WrappedComponent: React.ComponentType<WrappedComponentProps>
  ) => React.FC<WrappedComponentProps>
  Consumer: React.ExoticComponent<React.ConsumerProps<IIntlCtxValue>>
}

/**
 * @public
 */
export type IFormatDateOptions =
  | null
  | undefined
  | keyof IPreset
  | Intl.DateTimeFormatOptions

/**
 * @public
 */
export interface IIntlProviderProps {
  locale?: string
  messages?: IMessages
  baseComponentKeyPrefix?: string
  configProviderProps?: object
  /**
   * 如果能够保证msg对象是一个扁平结构而不是嵌套对象（大部分情况是如此），
   * 就能简化一些处理过程，提高性能
   */
  flatMode?: boolean
}
