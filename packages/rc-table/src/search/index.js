import React from 'react'
import { Search } from '@alicloud/console-components'

const defaultFilterProps = {
  autoWidth: false,
}

const TableSearch = props => (
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
