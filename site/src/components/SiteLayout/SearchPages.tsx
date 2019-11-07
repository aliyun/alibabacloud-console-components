import React, { useCallback, useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import { Search, Select } from '@alicloud/console-components'
import { IPageMeta } from '.'

export interface ISearchPagesProps {
  searchData: {
    bizComponents: IPageMeta[]
    baseComponents: IPageMeta[]
    guides: IPageMeta[]
  }
}

type IFilteredData = {
  category: string
  children: IPageMeta[]
}[]

const SearchPages: React.FC<ISearchPagesProps> = ({ searchData }) => {
  const [filteredData, setFilteredData] = useState<IFilteredData>([])

  const onChange = useCallback(
    (value: string, actionType: string) => {
      if (actionType === 'itemClick' || actionType === 'enter') {
        // user confirm search result
        navigate(value)
      } else if (actionType === 'change') {
        // user input search text
        const { bizComponents, baseComponents, guides } = searchData
        const newFilteredData = [
          {
            category: '基础组件',
            children: filterPages(baseComponents, value),
          },
          {
            category: '业务组件',
            children: filterPages(bizComponents, value),
          },
          {
            category: '开发文档',
            children: filterPages(guides, value),
          },
        ]
        setFilteredData(newFilteredData)
      } else {
        throw new Error(`unexpected actionType from <Search>: ${actionType}`)
      }
    },
    [searchData]
  )
  // trigger filter at start
  useEffect(() => {
    onChange('', 'change')
  }, [onChange])

  return (
    <Search shape="simple" onChange={onChange as any} style={{ width: '100%' }}>
      {filteredData.map(({ category, children }) => (
        <Select.OptionGroup label={category} key={category}>
          {children.map(({ name, zhName, path }) => (
            <Select.Option value={path} key={path}>
              {name} {zhName}
            </Select.Option>
          ))}
        </Select.OptionGroup>
      ))}
    </Search>
  )
}

export default SearchPages

function filterPages(pages: IPageMeta[], filterText: string) {
  return pages.filter(({ name, zhName }) => {
    return isSubString(name, filterText) || isSubString(zhName, filterText)
  })
}

function isSubString(whole: string, part: string) {
  return whole.toLowerCase().indexOf(part.toLowerCase()) !== -1
}
