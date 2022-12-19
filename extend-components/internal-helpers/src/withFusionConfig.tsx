import React, { useContext } from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { ConfigProvider } from '@alicloud/console-components'

const ctx = React.createContext<any>(null)

export function withFusionConfig<T>(Comp: T) {
  const Wrapper = React.forwardRef((props, ref) => {
    const ConfifgConsumer = (ConfigProvider as any).Consumer
    return (
      <ConfifgConsumer>
        {(context: any) => (
          <ctx.Provider value={context}>
            {/* @ts-ignore */}
            <Comp {...props} ref={ref} />
          </ctx.Provider>
        )}
      </ConfifgConsumer>
    )
  })
  hoistNonReactStatics(Wrapper, Comp as any)
  return (Wrapper as any) as T
}

export function useFusionConfig() {
  const ctxValue = useContext(ctx)
  return ctxValue || (ConfigProvider as any).getContext() || {}
}
