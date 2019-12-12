import Message from '@alifd/next/lib/message'
import iconMap from './iconMap'
import './index.scss'

const success = title => {
  Message.show({
    type: 'success',
    title,
    iconType: iconMap.success,
    overlayProps: { className: 'custom-message-toast' },
  })
}

const error = title => {
  Message.show({
    type: 'error',
    title,
    iconType: iconMap.error,
    overlayProps: { className: 'custom-message-toast' },
  })
}

const warning = title => {
  Message.show({
    type: 'warning',
    title,
    iconType: iconMap.warning,
    overlayProps: { className: 'custom-message-toast' },
  })
}

const notice = title => {
  Message.show({
    type: 'notice',
    title,
    iconType: iconMap.notice,
    overlayProps: { className: 'custom-message-toast' },
  })
}

const loading = title => {
  Message.show({
    type: 'loading',
    title,
    iconType: iconMap.loading,
    overlayProps: { className: 'custom-message-toast' },
  })
}

const help = title => {
  Message.show({
    type: 'help',
    title,
    iconType: iconMap.help,
    overlayProps: { className: 'custom-message-toast' },
  })
}

Message.success = success
Message.error = error
Message.warning = warning
Message.notice = notice
Message.loading = loading
Message.help = help

export default Message
