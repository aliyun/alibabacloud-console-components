import React, { createContext, useContext } from 'react'

const context = createContext<{ varDef: any }>({ varDef: null })
export default context

export const Provider: React.FC<{ value: any }> = ({ value, children }) => {
  const ctxValue = useContext(context)
  const shouldProvide = (() => {
    // 以最外层的provider为准
    // 而不是像常规的context一样以最近的provider为准
    if (ctxValue?.varDef) {
      return ctxValue
    }
    return value
  })()
  return <context.Provider value={shouldProvide}>{children}</context.Provider>
}

export function withThemeProvider<Props>(
  ThemeProvider: React.FC,
  Wrapped: React.ComponentType<Props>
): React.ComponentType<Props> {
  return function WithThemeProvider(props: any) {
    return (
      <ThemeProvider>
        <Wrapped {...props} />
      </ThemeProvider>
    )
  }
}
