import React, {
  useCallback,
  useState,
  useLayoutEffect,
  useContext,
} from 'react'
import { navigate } from 'gatsby'
import { Search, Select } from '@alicloud/console-components'
import _ from 'lodash'
import { IDocPageMeta, ISiteMeta } from '.'
import DocMenuLabel from './DocMenuLabel'
import styled, { createGlobalStyle } from 'styled-components'

interface IMatchedDoc extends IDocPageMeta {
  matchExplain?: React.ReactNode
}

interface IFilteredData {
  label: string
  matchDocs: IMatchedDoc[]
}

interface ISearchCtx {
  filteredData: IFilteredData[]
  onChange: (value: string) => void
  searchVal: string
  visible: boolean
  setVisible: (v: boolean) => void
}

const ctx = React.createContext<ISearchCtx | null>(null)

export function useSearchPages(categories: ISiteMeta['categories']) {
  const [searchVal, setSearchVal] = useState('')
  const [visible, setVisible] = useState(false)
  const [filteredData, setFilteredData] = useState<IFilteredData[]>([])

  const onChange = useCallback(
    (value: string) => {
      const _filteredByName = filterByName(value, categories)
      const filteredByTags = filterByTags(value, categories)
      // 去重，如果文档已经在“tag匹配”结果中，就不需要展示在“名称匹配”结果中。
      const filteredByName = _filteredByName.filter(
        ({ path: path1 }) =>
          !filteredByTags.find(({ path: path2 }) => path2 == path1)
      )
      setFilteredData([
        { label: '名称匹配', matchDocs: filteredByName },
        { label: 'Tag匹配', matchDocs: filteredByTags },
      ])
      setSearchVal(value)
    },
    [categories]
  )
  // trigger filter at start
  useLayoutEffect(() => {
    onChange('')
  }, [onChange])

  return (wrapped: React.ReactNode) => (
    <ctx.Provider
      value={{
        filteredData,
        onChange,
        searchVal,
        visible,
        setVisible,
      }}
    >
      {wrapped}
    </ctx.Provider>
  )
}

export function useSearchPagesUI() {
  const ctxVal = useContext(ctx)
  if (!ctxVal)
    throw new Error(`useSearchPagesUI should be used with useSearchPages`)
  const { filteredData, onChange, searchVal, visible, setVisible } = ctxVal
  return (
    <>
      <GlobalStyle />
      <Search
        shape="simple"
        value={searchVal}
        onChange={
          ((value: string, actionType: 'itemClick' | 'enter' | 'change') => {
            if (actionType === 'itemClick' || actionType === 'enter') {
              // user confirm search result
              navigate(value)
            } else if (actionType === 'change') {
              // user input search text
              onChange(value)
            } else {
              throw new Error(
                `unexpected actionType from <Search>: ${actionType}`
              )
            }
          }) as any
        }
        style={{ width: '100%' }}
        filterLocal={false}
        visible={visible}
        onVisibleChange={setVisible}
        autoWidth={false}
        popupClassName="doc-search-popup"
      >
        {filteredData.map(({ label, matchDocs }) => (
          <Select.OptionGroup label={label} key={label}>
            {matchDocs.map(docInfo => (
              <Select.Option value={docInfo.path} key={docInfo.path}>
                <DocMenuLabel docInfo={docInfo} />
                {docInfo.matchExplain}
              </Select.Option>
            ))}
          </Select.OptionGroup>
        ))}
      </Search>
    </>
  )
}

function containString(whole: string, part: string) {
  return whole.toLowerCase().indexOf(part.toLowerCase()) !== -1
}

function filterByName(
  keyword: string,
  categories: ISiteMeta['categories']
): IMatchedDoc[] {
  const docs = categories
    .map(category => {
      const matchDocs = category.docs
        .filter(
          doc =>
            containString(doc.name, keyword) ||
            containString(_.camelCase(doc.name), keyword) ||
            containString(doc.zhName, keyword)
        )
        .map<IMatchedDoc>(doc => ({
          ...doc,
        }))
      // 这个category有多少文档的名称匹配keyword
      return matchDocs
    })
    .reduce((acc, cur) => [...acc, ...cur], [])
  return docs
}

function filterByTags(
  keyword: string,
  categories: ISiteMeta['categories']
): IFilteredData['matchDocs'] {
  if (!keyword) return []
  const filter = (() => {
    const split = keyword.split(':')
    if (split.length === 1) {
      return [keyword, '']
    }
    return [split[0], split[1]]
  })()

  const matchDocs: IFilteredData['matchDocs'] = []
  categories.forEach(category => {
    category.docs.forEach(doc => {
      const { tags } = doc
      if (!tags) return false
      for (const tagName of Object.keys(tags)) {
        if (tagName.startsWith('_')) continue
        const tagVal = String(tags[tagName])
        if (
          containString(tagName, filter[0]) &&
          containString(tagVal, filter[1])
        ) {
          matchDocs.push({
            ...doc,
            matchExplain: renderMatchedTag(tagName, tagVal),
          })
          // 避免同一个文档被搜出来多次
          return
        }
      }
    })
  })
  return matchDocs
}

export function useSearchPagesUpdater() {
  const ctxVal = useContext(ctx)
  if (!ctxVal)
    throw new Error(`useSearchPagesUpdater should be used with useSearchPages`)
  const { onChange, setVisible } = ctxVal
  return useCallback((val: string) => {
    onChange(val)
    setVisible(true)
  }, [])
}

// ScMatchedExplain
const ScMatchedTag = styled.span`
  float: right;
  margin-left: 48px;
  color: #a9a9a9;
`
function renderMatchedTag(
  tagName: string,
  tagVal: string | boolean | undefined
) {
  if (!tagVal) return null
  if (String(tagVal) !== 'true') {
    return (
      <ScMatchedTag>
        {tagName}:{tagVal}
      </ScMatchedTag>
    )
  }
  return <ScMatchedTag>{tagName}</ScMatchedTag>
}

const GlobalStyle = createGlobalStyle`
  .doc-search-popup.next-menu {
      ::-webkit-scrollbar {
        width: 5px;
      }
      ::-webkit-scrollbar-track {
        background: #dedede;
      }
      ::-webkit-scrollbar-thumb {
        background: #666;
      }
  }
`
