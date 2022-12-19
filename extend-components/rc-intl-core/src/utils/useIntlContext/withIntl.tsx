import React from 'react'
import { Consumer } from '@alicloud/console-components-intl-context'
import { IIntlCtxValue } from '../../types'
import { wrapDisplayName } from '../displayName'

/**
 * @description
 * A factory that create HOC to consume the intl-context.
 * The component wrapped by the HOC will get intl-related values from props.
 * Other wind components use intl-context to read localization-related config.
 */
const withIntl = <
  MapIntlToProps extends (value: IIntlCtxValue, hocProps: any) => any
>(
  mapIntlToProps?: MapIntlToProps
) => {
  type ReceivedProps = MapIntlToProps extends (
    value: IIntlCtxValue,
    hocProps: infer R
  ) => any
    ? R
    : never
  type PropsToInject = MapIntlToProps extends (
    value: IIntlCtxValue,
    hocProps: any
  ) => infer P
    ? P
    : never

  return <WrappedComponentProps extends {}>(
    WrappedComponent: React.ComponentType<WrappedComponentProps>
  ) => {
    const HOC = React.forwardRef<
      Omit<WrappedComponentProps & ReceivedProps, keyof PropsToInject>
    >((props, ref) => {
      const hocProps = props
      return (
        <Consumer>
          {(value: IIntlCtxValue) => {
            const injectProps = mapIntlToProps
              ? mapIntlToProps(value, hocProps)
              : value
            return <WrappedComponent {...hocProps} {...injectProps} ref={ref} />
          }}
        </Consumer>
      )
    })
    HOC.displayName = wrapDisplayName(WrappedComponent, 'withIntl')
    return HOC
  }
}

export default withIntl
