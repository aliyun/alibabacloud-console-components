import { createContext } from 'react'
import { getInitialRefElement } from './utils'

export interface ICtxType {
  refElement: HTMLElement
}

const ctx = createContext<ICtxType>({ refElement: getInitialRefElement() })

export default ctx
