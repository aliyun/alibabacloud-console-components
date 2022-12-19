import set from 'lodash/set'

import { IMessages } from '@alicloud/console-components-intl-core'

const defaultOptions = {
  namespace: '@wind_v2.base',
}

export default function extractWindComponentMessages(
  rawMessages: IMessages,
  options: { namespace: string } = defaultOptions
) {
  const result: IMessages = {}
  const { namespace } = options
  const prefix = `${namespace}.`

  Object.keys(rawMessages).forEach(key => {
    if (key.startsWith(prefix)) {
      set(result, key.replace(prefix, ''), rawMessages[key])
    }
  })

  return result
}
