import React, { useRef, useLayoutEffect, useState, useContext } from 'react'

const ctx = React.createContext<IDict>({})

interface IDict {
  [varName: string]: string
}

const style = { display: 'none' }

export const CssVarReader: React.FC<{
  varNames: string[]
}> = ({ varNames, children }) => {
  const elRef = useRef<HTMLDivElement>(null)
  const [dict, setDict] = useState<IDict | null>(null)
  useLayoutEffect(() => {
    if (!elRef.current) {
      return
    }
    const computedStyle = getComputedStyle(elRef.current)
    const nextDict: IDict = {}
    let hasDiff = false
    varNames.forEach(varName => {
      nextDict[varName] = computedStyle.getPropertyValue(varName)
      if (!dict || dict[varName] !== nextDict[varName]) {
        hasDiff = true
      }
    })
    if (hasDiff) {
      setDict(nextDict)
    }
  }, [varNames])

  return (
    <>
      <div ref={elRef} className="css-var-reader" style={style}>
        [react-css-var] css variables reader
      </div>
      {dict && <ctx.Provider value={dict}>{children}</ctx.Provider>}
    </>
  )
}

export const withCssVarReader = <WrappedType extends React.ComponentType<any>>(
  varNames: string[],
  Wrapped: WrappedType
) => {
  const CssVarReaderHOC: React.FC<any> = props => {
    return (
      <CssVarReader varNames={varNames}>
        <Wrapped {...props} />
      </CssVarReader>
    )
  }
  return CssVarReaderHOC
}

export function useCssVar(varName: string): string
export function useCssVar(varName: string[]): string[]
export function useCssVar(varName: string | string[]): any {
  const dict = useContext(ctx)
  if (Array.isArray(varName)) {
    return varName.map(n => dict[n])
  }
  return dict[varName]
}
