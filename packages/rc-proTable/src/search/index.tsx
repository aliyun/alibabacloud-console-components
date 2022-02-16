import React from 'react'
// import { Search } from '@alicloud/console-components'
// import { Search, IRcSearchProps } from "@alicloud/console-components-search"
import { Search, IRcSearchProps } from "@ali/console-components-search"
//@ali/console-components-search

const defaultFilterProps = {
  autoWidth: false,
}

/**
 * @public
 */
const TableSearch: React.FC<IRcSearchProps> = props => (
  <Search
    // onSuggest={onSuggestAsync}
    // onChange={onChange1}
    // onSearch={onSearch}
    {...props}
  />
)

export default TableSearch
