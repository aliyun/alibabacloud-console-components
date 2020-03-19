import React from 'react'
import ConsoleMenu from '@alicloud/console-components-console-menu'
import { Link } from 'gatsby'
import { usePageCtx } from './context'
import DocMenuLabel from './DocMenuLabel'
import { IDocPageMeta } from '.'

const SideBar: React.FC = () => {
  const pageCtx = usePageCtx()

  if (!('sideNav' in pageCtx.pageMeta)) return null

  const { navCategories, header } = pageCtx.pageMeta.sideNav

  return (
    <ConsoleMenu
      header={header}
      activeKey={pageCtx.pageMeta.path}
      defaultOpenAll
    >
      {navCategories.map((navCategory, navCategoryIdx) => {
        if (navCategory.tagSelector) {
          const docs = Object.keys(navCategory.tagSelector).reduce<
            IDocPageMeta[] | null
          >((acc, tagName) => {
            const tagVal = String(navCategory.tagSelector[tagName])
            if (!acc) {
              if (tagVal === 'true') {
                const map = new Map<string, IDocPageMeta>()
                Object.keys(pageCtx.tagIndex[tagName]).forEach(_tagVal => {
                  pageCtx.tagIndex[tagName][_tagVal].forEach(docMeta => {
                    map.set(docMeta.path, docMeta)
                  })
                })
                return Array.from(map).map(([_, docInfo]) => docInfo)
              }
              return pageCtx.tagIndex[tagName]?.[tagVal] ?? []
            }
            return acc.filter(({ tags }) => {
              if (tagVal === 'true') return tags?.[tagName] !== undefined
              return tags?.[tagName] === tagVal
            })
          }, null)
          if (!docs || docs.length == 0) return null
          docs.sort(getSortFn(navCategory.sortByTag))
          const consoleMenuItems = docs.map(docInfo => {
            return (
              <ConsoleMenu.Item key={docInfo.path}>
                <Link to={docInfo.path}>
                  <DocMenuLabel docInfo={docInfo} />
                </Link>
              </ConsoleMenu.Item>
            )
          })
          // 不创建可展开/收起的Submenu节点
          if (navCategory.flat || !navCategory.label) return consoleMenuItems
          return (
            <ConsoleMenu.SubMenu label={navCategory.label} key={navCategoryIdx}>
              {consoleMenuItems}
            </ConsoleMenu.SubMenu>
          )
        } else if (navCategory.categoryName) {
          const currentCategory = pageCtx.siteMeta.categories.find(
            ({ name }) => name === navCategory.categoryName
          )
          if (!currentCategory) {
            console.warn(`category not exist: ${navCategory.categoryName}`)
            return null
          }
          const consoleMenuItems = currentCategory.docs
            .sort(getSortFn(navCategory.sortByTag))
            .map(docInfo => {
              return (
                <ConsoleMenu.Item key={docInfo.path}>
                  <Link to={docInfo.path}>
                    <DocMenuLabel docInfo={docInfo} />
                  </Link>
                </ConsoleMenu.Item>
              )
            })
          // 不创建可展开/收起的Submenu节点
          if (navCategory.flat) return consoleMenuItems
          const label = navCategory.label ?? currentCategory.zhName
          return (
            <ConsoleMenu.SubMenu label={label} key={label}>
              {consoleMenuItems}
            </ConsoleMenu.SubMenu>
          )
        } else {
          return null
        }
      })}
    </ConsoleMenu>
  )
}

export default SideBar

function getSortFn(sortByTag?: string) {
  return (a: IDocPageMeta, b: IDocPageMeta) => {
    const { sortA, sortB } = (() => {
      if (sortByTag) {
        const sortA = Number(a.tags?.[sortByTag] ?? 1) || 1
        const sortB = Number(b.tags?.[sortByTag] ?? 1) || 1
        return { sortA, sortB }
      } else {
        const sortA = Number(a.sort ?? 1) || 1
        const sortB = Number(b.sort ?? 1) || 1
        return { sortA, sortB }
      }
    })()
    const cmp = sortA - sortB
    return cmp != 0 ? cmp : a.name.localeCompare(b.name)
  }
}
