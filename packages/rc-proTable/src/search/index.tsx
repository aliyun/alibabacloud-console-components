import React from 'react'
// import { Search } from '@alicloud/console-components'
// import { Search, IRcSearchProps } from "@alicloud/console-components-search"
import { Search, IRcSearchProps } from "@ali/console-components-search"
//@ali/console-components-search

import { SearchProps } from '@alicloud/console-components/types/search'

const defaultFilterProps = {
  autoWidth: false,
}

let options = [
  {
    label: '实例名称',
    dataIndex: 'name',
    template: 'input',
    templateProps: {
      placeholder: '默认按实例名称搜索',
      dataSource: []
    }
  }
]

/**
 * @public
 */
const TableSearch: React.FC<IRcSearchProps> = props => (
  // <Search
  //   // hasClear
  //   size="medium"
  //   type="normal"
  //   shape="simple"
  //   filterProps={defaultFilterProps}
  //   {...props}
  // />
  <Search
    mode="single-single"
    options={options}
    // onSuggest={onSuggestAsync}
    // onChange={onChange1}
    // onSearch={onSearch} 
  />
)

export default TableSearch
