import React, { useContext } from 'react'
import type { ISlidePanelGroupProps } from './SlidePanelGroup'

// 当面板感知到ctxValue.activeId为ActiveIdForALL时，必定激活
export const ActiveIdForAll = '__ActiveIdForALL' as const

interface ISlidePanelGroupContext {
  activeId: ISlidePanelGroupProps['activeId']
  onSwitchPanelItem: ISlidePanelGroupProps['onSwitchPanelItem']
}

const slidePanelGroupContext = React.createContext<ISlidePanelGroupContext | null>(
  null
)
export default slidePanelGroupContext

export const useSlidePanelContext = (): ISlidePanelGroupContext => {
  const ctxValue = useContext(slidePanelGroupContext)
  if (!ctxValue)
    throw new Error(`SlidePanelItem should be a children of SlidePanelGroup`)
  return ctxValue
}
