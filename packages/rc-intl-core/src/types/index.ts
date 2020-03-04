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

/**
 * @public
 * if use ReactIntl, user can pass react node as format context
 */
export interface IFormatMessageOptionsReact {
  id: string
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
}
