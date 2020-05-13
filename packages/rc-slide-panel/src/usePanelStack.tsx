import React, { useState, useCallback, useMemo, useContext } from 'react'
import slidePanelGroupContext, {
  useSlidePanelContext,
  ActiveIdForAll,
  defaultStackPanelId,
} from './context'

const panelStackCtx = React.createContext<null | Pick<
  IUsePanelStackReturn,
  'push' | 'pop'
>>(null)

const AlterSlidePanelGroupContext: React.FC<{ stackPanelId: string }> = ({
  children,
  stackPanelId,
}) => {
  const ctxVal = useSlidePanelContext()

  const { onSwitchPanelItem, activeId = defaultStackPanelId } = ctxVal

  const actualActiveId = activeId === stackPanelId ? ActiveIdForAll : activeId

  const alteredCtxVal = useMemo(
    () => ({ onSwitchPanelItem, activeId: actualActiveId, stackPanelId }),
    [onSwitchPanelItem, actualActiveId, stackPanelId]
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
export interface IUsePanelStackReturn {
  /**
   * 当前展示的面板（栈顶）。<br />
   * 请将它渲染到`<SlidePanelGroup>`中。当你把所有面板都出栈以后，top为undefined。
   */
  top: React.ReactElement
  /**
   * 推入新的面板（入栈）。
   */
  push: (el: React.ReactElement) => void
  /**
   * 从当前面板返回（出栈）。
   */
  pop: () => void
}

/**
 * @public
 */
export function usePanelStack(
  initer?: () => React.ReactElement,
  stackPanelId?: string
) {
  const actualStackPanelId = stackPanelId || defaultStackPanelId

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
      <AlterSlidePanelGroupContext stackPanelId={actualStackPanelId}>
        {top}
      </AlterSlidePanelGroupContext>
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
