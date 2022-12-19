// 弹层类组件高阶组件，默认向下 4px 弹出
import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { useCssVar } from './useCssVar'

const HOC = <T extends any>(
  WrappedComponents: React.ComponentType<T>
): React.ComponentType<T> => {
  const Wrapper = React.forwardRef((props, ref) => {
    const defaultOffsetY = useDefaultOffsetY()
    const popupProps = {
      align: 'tl bl',
      offset: [0, defaultOffsetY],
      ...(props as any).popupProps
    }
    return (
      <WrappedComponents ref={ref as any} {...props} popupProps={popupProps} />
    )
  }) as React.ComponentType<T>
  hoistNonReactStatics(Wrapper, WrappedComponents)
  return Wrapper
}

export default HOC

const OverlayHOC = <T extends any>(
  WrappedComponents: React.ComponentType<T>
): React.ComponentType<T> => {
  const Wrapper = React.forwardRef((props, ref) => {
    const defaultOffsetY = useDefaultOffsetY()
    return (
      <WrappedComponents
        ref={ref as any}
        align="tl bl"
        shouldUpdatePosition
        offset={[0, defaultOffsetY]}
        {...props}
      />
    )
  }) as React.ComponentType<T>
  hoistNonReactStatics(Wrapper, WrappedComponents)
  return Wrapper
}

export { OverlayHOC }

export function useDefaultOffsetY() {
  const varStr = useCssVar('--overlay-offset')
  const num = parseInt(varStr.trim())
  if (Number.isFinite(num)) {
    return num
  }
  return 4
}
