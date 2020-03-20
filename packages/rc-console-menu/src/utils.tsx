import React from 'react'
import { ConfigProvider } from '@alicloud/console-components'

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @param {Number} level
 */
export const getPriority = (level: number): string =>
  new Array(level).fill('&').join('')

/**
 * Checks if value is `null` or `undefined`
 * @param {*} value
 * @return {Boolean}
 */
export const isNil = (value: any): value is undefined | null => value == null

export function GetFusionConfig<PropType extends { fusionConfig: any }>(
  Wrapped: React.ComponentType<PropType>
) {
  const context = (ConfigProvider as any).getContext()
  const HOC: React.FC<Omit<PropType, 'fusionConfig'>> = (props) => (
    <Wrapped {...(props as PropType)} fusionConfig={context} />
  )
  return HOC
}
