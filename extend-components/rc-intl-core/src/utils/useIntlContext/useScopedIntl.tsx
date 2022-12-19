import { useContext } from 'react'
import { Context } from '@alicloud/console-components-intl-context'
import warning from 'warning'
import isPlainObject from 'lodash/isPlainObject'
import { createReactIntlFromCfg } from '../../factory'
import { IMessages, IWindIntlExtended, IIntlCtxValue } from '../../types'
import { getPrefixedMessages } from './withRcIntl'

/**
 * @public
 */
interface IUseScopedIntlOption {
  namespace?: string
  defaultMessages?: IMessages
  defaultLocaleMessages?: { [locale: string]: IMessages }
}

/**
 * @public
 * 获取专属于某个业务组件的文案、国际化工具。
 *
 * 假设有文案：`"@wind_v2.rc.MyButton.label": "my msg"`
 * ```js
 * const {intl} = useScopedIntl("MyButton");
 * intl("label");  // 得到my msg
 * ```
 */
function useScopedIntl(
  componentName: string,
  {
    namespace = '@wind_v2.rc',
    defaultMessages = {},
    defaultLocaleMessages = {},
  }: IUseScopedIntlOption = {}
) {
  const value: IIntlCtxValue = useContext(Context)

  const keyPrefix = `${namespace}.${componentName}`
  const { messages: ctxMessages = {}, locale = 'en', flatMode } = value || {}

  const pickedMessages = getPrefixedMessages(ctxMessages, keyPrefix, flatMode)
  const pickMessageSuccess = isPlainObject(pickedMessages)
  if (!pickMessageSuccess) {
    warning(
      false,
      `[@ali/wind-intl] Messages[${keyPrefix}] should be an object, but get ${String(
        pickedMessages
      )}`
    )
  }
  const componentMessages = {
    ...(defaultLocaleMessages[locale] || {}),
    ...defaultMessages,
    ...(pickMessageSuccess ? (pickedMessages as IMessages) : {}),
  }
  const intl: IWindIntlExtended = createReactIntlFromCfg({
    locale,
    messages: componentMessages,
  })

  return {
    ctxMessages,
    intl,
    locale,
    messages: componentMessages,
  }
}

export default useScopedIntl
