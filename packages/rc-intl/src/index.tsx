import React from 'react'
import { Consumer } from '@alicloud/console-components-intl-context'
import intl from './react'
import createIntlProvider from './utils/useIntlContext/createIntlProvider'
import { IIntlProviderProps, IWindIntlPublic } from './types'

/**
 * @public
 * IntlProvider use the config of global intl as default
 */
const IntlProvider: React.FunctionComponent<
  IIntlProviderProps
> = createIntlProvider(intl)

/**
 * @public
 * A factory that create HOC to provide value to the intl-context.
 * The component subtree under this HOC can get the provided value from intl-context, which is a smaller influence compared to `intl.set()` in the top level.
 * User can use this to config the localization of wind components, which consume intl-context.
 * Notice that the top level intl instance will always use the top level config.
 */
const withProvider = (providerProps?: IIntlProviderProps) => <
  WrappedComponentProps extends {}
>(
  WrappedComponent: React.ComponentType<WrappedComponentProps>
) => {
  const HOC: React.FC<WrappedComponentProps> = props => {
    return (
      <IntlProvider {...providerProps}>
        <WrappedComponent {...props} />
      </IntlProvider>
    )
  }
  HOC.displayName = `withIntlProvider(${WrappedComponent.displayName ||
    'UnknownComponent'})`

  return HOC
}

/**
 * @public
 * These tools are only useful for users that use other wind components.
 * For users that don't, use intl instance （from ./react.ts） directly.
 */
export const intlExtended: IWindIntlPublic = Object.assign(intl, {
  IntlProvider,
  withProvider,
  Consumer,
})

export default intlExtended

export { intlExtended as intl, IntlProvider, withProvider, Consumer }

export { default as ReactIntl } from './ReactIntl'
export { default as IntlBase } from './IntlBase'

export * from './types'

export { default as presets } from './presets/date'
export * from './presets/date'

export { default as withRcIntl } from './utils/useIntlContext/withRcIntl'
