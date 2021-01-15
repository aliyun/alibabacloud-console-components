/**
 * 将css var定义（包含默认值）提供给组件树
 */
import React, { useCallback } from 'react'
import { ThemeProvider as OriginalStyledThemeProvider } from 'styled-components'
import type { CssVarTheme } from '..'

export const StyledThemeProvider: React.FC<{ theme: CssVarTheme<any> }> = ({
  theme,
  children,
}) => {
  const getTheme = useCallback((prevTheme: any) => {
    return {
      ...prevTheme,
      // 外层的cssVars优先级更高
      cssVars: { ...theme.vars, ...prevTheme?.cssVars },
    }
  }, [])
  return (
    <OriginalStyledThemeProvider theme={getTheme}>
      {children}
    </OriginalStyledThemeProvider>
  )
}

export function withStyledTheme<WrappedType extends React.ComponentType<any>>(
  theme: CssVarTheme<any>,
  Wrapped: WrappedType
) {
  const WithCssVarDefaultHOC: React.FC<any> = (props) => {
    return (
      <StyledThemeProvider theme={theme}>
        <Wrapped {...props} />
      </StyledThemeProvider>
    )
  }
  return WithCssVarDefaultHOC
}
