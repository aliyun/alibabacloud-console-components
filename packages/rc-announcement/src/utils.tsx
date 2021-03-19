import React from 'react'
import pick from 'lodash/pick'
import { ConfigProvider } from '@alicloud/console-components'
import { ISliderOptions } from './types/ISliderOptions.type'

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

export function GetFusionConfig<
  PropType extends { fusionConfig: IFusionConfig }
>(Wrapped: React.ComponentType<PropType>) {
  const ConfifgConsumer: any = (ConfigProvider as any).Consumer
  const HOC: React.FC<Omit<PropType, 'fusionConfig'>> = props => (
    <ConfifgConsumer>
      {(context: IFusionConfig) => (
        <Wrapped {...(props as PropType)} fusionConfig={context} />
      )}
    </ConfifgConsumer>
  )
  return HOC
}

export const extractSliderOptions = (
  sliderOptions: ISliderOptions = {}
): ISliderOptions => {
  return (
    pick(sliderOptions, [
      'autoplay',
      'autoplaySpeed',
      'speed',
      'onChange',
      'animation',
    ]) || {}
  )
}
