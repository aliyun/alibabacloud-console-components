/**
 * 将css var定义（包含默认值）提供给组件树
 */
import React, { useMemo } from 'react'
import { ThemeProvider } from 'styled-components'
import type { ICssVars } from '..'

export function withStyledTheme<WrappedType extends React.ComponentType<any>>(
  cssVars: ICssVars,
  Wrapped: WrappedType
) {
  const WithCssVarDefaultHOC: React.FC<any> = (props) => {
    const theme = useMemo(() => {
      return (prevTheme: any) => {
        return {
          ...prevTheme,
          // 外层的cssVars优先级更高
          cssVars: { ...cssVars, ...prevTheme?.cssVars },
        }
      }
    }, [])
    return (
      <ThemeProvider theme={theme}>
        <Wrapped {...props} />
      </ThemeProvider>
    )
  }
  return WithCssVarDefaultHOC
}
