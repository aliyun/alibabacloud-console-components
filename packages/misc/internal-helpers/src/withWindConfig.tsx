import React from 'react'
import { ConfigProvider } from '@alicloud/console-components'

/**
 * @public
 */
export interface IWindConfig {
  prefix?: string
  [key: string]: any
}

/**
 * @public
 */
export interface IWindConfigProps {
  windConfig: IWindConfig
}

/**
 * @public
 */
export function withWindConfig<PropType extends { windConfig: IWindConfig }>(
  Wrapped: React.ComponentType<PropType>
) {
  const ConfifgConsumer: any = (ConfigProvider as any).Consumer
  const HOC: React.FC<Omit<PropType, keyof IWindConfigProps>> = props => (
    <ConfifgConsumer>
      {(context: IWindConfig) => (
        <Wrapped {...(props as PropType)} windConfig={context} />
      )}
    </ConfifgConsumer>
  )
  return HOC
}
