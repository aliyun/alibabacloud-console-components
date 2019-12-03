import { Message } from '@alicloud/console-components'
import RcMessage from './RcMessage'
import iconMap from './config/iconMap'
import './index.less'

export interface IToast {
  (title: string): void
}

export interface IShowProps {
  [propName: string]: any
}

export interface IShow {
  (prop: IShowProps): void
}

/**
 * @public
 */
export type IMessage = typeof RcMessage & {
  success: IToast
  error: IToast
  warning: IToast
  notice: IToast
  loading: IToast
  help: IToast
  show: IShow
}

const success = (title: string) => {
  Message.show({
    type: 'success',
    title,
    iconType: iconMap.success,
    overlayProps: { className: 'rc-message-toast' },
  })
}

const error = (title: string) => {
  Message.show({
    type: 'error',
    title,
    iconType: iconMap.error,
    overlayProps: { className: 'rc-message-toast' },
  })
}

const warning = (title: string) => {
  Message.show({
    type: 'warning',
    title,
    iconType: iconMap.warning,
    overlayProps: { className: 'rc-message-toast' },
  })
}

const notice = (title: string) => {
  Message.show({
    type: 'notice',
    title,
    iconType: iconMap.notice,
    overlayProps: { className: 'rc-message-toast' },
  })
}

const loading = (title: string) => {
  Message.show({
    type: 'loading',
    title,
    iconType: iconMap.loading,
    overlayProps: { className: 'rc-message-toast' },
  })
}

const help = (title: string) => {
  Message.show({
    type: 'help',
    title,
    iconType: iconMap.help,
    overlayProps: { className: 'rc-message-toast' },
  })
}

const show = (props: IShowProps) => {
  Message.show({
    ...props,
    iconType: iconMap[props.type || 'success'],
    overlayProps: { className: 'rc-message-toast' },
  })
}

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
