import React from 'react'
import { ConfigProvider } from '@alicloud/console-components'

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @param {Number} level
 */
export const getPriority = (level: number) =>
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
  const ConfifgConsumer: any = (ConfigProvider as any).Consumer
  const HOC: React.FC<Omit<PropType, 'fusionConfig'>> = (props) => (
    <ConfifgConsumer>
      {(context: any) => (
        <Wrapped {...(props as PropType)} fusionConfig={context} />
      )}
    </ConfifgConsumer>
  )
  return HOC
}

export function dedup<T>(arr: T[]) {
  return Array.from(new Set(arr))
}

export function ensureArray(value: any) {
  if (Array.isArray(value)) return value
  if (value === undefined) return []
  return [value]
}
