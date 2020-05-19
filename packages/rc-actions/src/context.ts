import { createContext } from 'react'
import { DropdownProps } from '@alicloud/console-components/types/dropdown'
import { MenuProps } from '@alicloud/console-components/types/menu'

export default createContext<{
  menuProps: MenuProps
  dropdownProps: DropdownProps
  prefix: string
}>({
  menuProps: {},
  dropdownProps: {},
  prefix: 'next-',
})
