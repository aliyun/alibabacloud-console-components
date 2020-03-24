import React from 'react'
import { Search } from '@alicloud/console-components'
import { SearchProps } from '@alicloud/console-components/types/search'

const defaultFilterProps = {
  autoWidth: false,
}

const TableSearch: React.FC<SearchProps> = props => (
  <Search
    hasClear
    size="medium"
    type="normal"
    shape="simple"
    filterProps={defaultFilterProps}
    {...props}
  />
)

export default TableSearch
