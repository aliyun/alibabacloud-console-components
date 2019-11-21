import React, { useCallback, useState, useLayoutEffect } from 'react'
import { navigate } from 'gatsby'
import { Search, Select } from '@alicloud/console-components'
import _ from 'lodash'
import { IDocPageMeta } from '.'
import { usePageCtx } from './context'

type IFilteredData = {
  category: string
  zhName: string
  matchDocs: IDocPageMeta[]
}[]

const SearchPages: React.FC = () => {
  const { categories } = usePageCtx().siteMeta
  const [filteredData, setFilteredData] = useState<IFilteredData>([])

  const onChange = useCallback(
    (value: string, actionType: string) => {
      if (actionType === 'itemClick' || actionType === 'enter') {
        // user confirm search result
        navigate(value)
      } else if (actionType === 'change') {
        // user input search text
        const filteredCategories = categories
          .map(category => {
            const matchDocs = category.docs.filter(
              doc =>
                containString(doc.name, value) ||
                containString(_.camelCase(doc.name), value) ||
                containString(doc.zhName, value)
            )
            return {
              category: category.name,
              zhName: category.zhName,
              matchDocs,
            }
          })
          .filter(Boolean)
        setFilteredData(filteredCategories)
      } else {
        throw new Error(`unexpected actionType from <Search>: ${actionType}`)
      }
    },
    [categories]
  )
  // trigger filter at start
  useLayoutEffect(() => {
    onChange('', 'change')
  }, [onChange])

  return (
    <Search
      shape="simple"
      onChange={onChange as any}
      style={{ width: '100%' }}
      filterLocal={false}
    >
      {filteredData.map(({ zhName: categoryZhName, matchDocs }) => (
        <Select.OptionGroup label={categoryZhName} key={categoryZhName}>
          {matchDocs.map(({ name, zhName, path }) => (
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

function containString(whole: string, part: string) {
  return whole.toLowerCase().indexOf(part.toLowerCase()) !== -1
}
