import React, { useState, useCallback, useMemo, useContext } from 'react'
import slidePanelGroupContext, {
  useSlidePanelContext,
  ActiveIdForAll,
} from './context'
import type { IUsePanelStackReturn } from './types/IUsePanelStackReturn.type'

const panelStackCtx = React.createContext<null | Pick<
  IUsePanelStackReturn,
  'push' | 'pop'
>>(null)

const AlterSlidePanelGroupContext: React.FC = ({ children }) => {
  const ctxVal = useSlidePanelContext()
  const { onSwitchPanelItem } = ctxVal
  const alteredCtxVal = useMemo(
    () => ({ onSwitchPanelItem, activeId: ActiveIdForAll }),
    [onSwitchPanelItem]
  )
  return (
    <slidePanelGroupContext.Provider value={alteredCtxVal}>
      {children}
    </slidePanelGroupContext.Provider>
  )
}

/**
 * @public
 */
export function usePanelStack(initer?: () => React.ReactElement) {
  const [panelStack, setPanelStack] = useState<React.ReactElement[]>(() =>
    typeof initer === 'function' ? [initer()] : []
  )

  const top: React.ReactElement | undefined = panelStack.slice(-1)[0]

  const push = useCallback((el: React.ReactElement) => {
    setPanelStack((prevStack) => [...prevStack, el])
  }, [])
  const pop = useCallback(() => {
    setPanelStack((prevStack) => prevStack.slice(0, -1))
  }, [])

  const panelStackCtxValue = useMemo(() => ({ push, pop }), [pop, push])

  // 把slidePanelGroupContext中传递的activeId改为ActiveIdForALL
  // 从而使得top中的面板被激活
  const actualTop = top ? (
    <panelStackCtx.Provider value={panelStackCtxValue}>
      <AlterSlidePanelGroupContext>{top}</AlterSlidePanelGroupContext>
    </panelStackCtx.Provider>
  ) : (
    top
  )

  return {
    top: actualTop,
    push,
    pop,
  }
}

/**
 * @public
 */
export const usePanelStackCtx = () => {
  const ctxVal = useContext(panelStackCtx)
  if (!ctxVal) {
    throw new Error(
      `usePanelStackCtx should be used inside panels that is managed by "usePanelStack"`
    )
  }
  return ctxVal
}
