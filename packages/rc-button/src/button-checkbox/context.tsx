import { createContext } from 'react'

export default createContext<{
  selectedIds: string[]
  onSelect: (id: string) => void
}>({
  selectedIds: [],
  onSelect: () => {},
})
