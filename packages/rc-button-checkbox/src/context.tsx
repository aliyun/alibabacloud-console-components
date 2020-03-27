import { createContext, SyntheticEvent } from 'react'

export default createContext<{
  selectedIds: string[]
  onSelect: (id: string, e: SyntheticEvent) => void
}>({
  selectedIds: [],
  onSelect: () => {},
})
