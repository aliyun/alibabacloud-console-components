import React from 'react'
import { Message } from '@alicloud/console-components'
import RcMessage, { IRcMessageProps } from './RcMessage'
import iconMap from './config/iconMap'
import './index.less'

/**
 * @public
 */
export interface IToast {
  (title: string): void
}

/**
 * @public
 */
export interface IShowProps {
  [propName: string]: any
}

/**
 * @public
 */
export interface IShow {
  (prop: IShowProps): void
}

/**
 * @public
 */
export type IMessage = React.FC<IRcMessageProps> & {
  success: IToast
  error: IToast
  warning: IToast
  notice: IToast
  loading: IToast
  help: IToast
  show: IShow
}

/**
 * @public
 */
const success = (title: string) => {
  Message.show({
    type: 'success',
    title,
    iconType: iconMap.success,
    overlayProps: { className: 'rc-message-toast' },
  })
}

/**
 * @public
 */
const error = (title: string) => {
  Message.show({
    type: 'error',
    title,
    iconType: iconMap.error,
    overlayProps: { className: 'rc-message-toast' },
  })
}

/**
 * @public
 */
const warning = (title: string) => {
  Message.show({
    type: 'warning',
    title,
    iconType: iconMap.warning,
    overlayProps: { className: 'rc-message-toast' },
  })
}

/**
 * @public
 */
const notice = (title: string) => {
  Message.show({
    type: 'notice',
    title,
    iconType: iconMap.notice,
    overlayProps: { className: 'rc-message-toast' },
  })
}

/**
 * @public
 */
const loading = (title: string) => {
  Message.show({
    type: 'loading',
    title,
    iconType: iconMap.loading,
    overlayProps: { className: 'rc-message-toast' },
  })
}

/**
 * @public
 */
const help = (title: string) => {
  Message.show({
    type: 'help',
    title,
    iconType: iconMap.help,
    overlayProps: { className: 'rc-message-toast' },
  })
}

/**
 * @public
 */
const show = (props: IShowProps) => {
  Message.show({
    ...props,
    iconType: iconMap[props.type || 'success'],
    overlayProps: { className: 'rc-message-toast' },
  })
}

/**
 * @public
 */
const ExportedRcMessage: IMessage = Object.assign(RcMessage, {
  success,
  error,
  warning,
  notice,
  loading,
  help,
  show,
})

export { success, error, warning, notice, loading, help, show }

export default ExportedRcMessage

export * from './RcMessage'
