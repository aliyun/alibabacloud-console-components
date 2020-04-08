import React from 'react'
import ConfigProvider from '@alifd/next/lib/config-provider'

/**
 * @public
 */
export interface IFusionConfig {
  prefix?: string
}

/**
 * @public
 */
export interface IFusionConfigProps {
  fusionConfig: IFusionConfig
}

/**
 * @public
 */
export function GetFusionConfig<PropType>(
  Wrapped: React.ComponentType<PropType>
): React.ComponentType<Omit<PropType, 'fusionConfig'>> {
  const ConfifgConsumer: any = (ConfigProvider as any).Consumer
  const HOC: React.FC<Omit<PropType, 'fusionConfig'>> = (props) => (
    <ConfifgConsumer>
      {(context: IFusionConfig) => (
        <Wrapped {...(props as PropType)} fusionConfig={context} />
      )}
    </ConfifgConsumer>
  )
  return HOC
}
