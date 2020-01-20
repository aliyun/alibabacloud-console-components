import React from 'react'
import ConsoleMenu from '@alicloud/console-components-console-menu'
import { Link } from 'gatsby'
import { usePageCtx } from './context'
import DocMenuLabel from './DocMenuLabel'

const SideBar: React.FC = () => {
  const pageCtx = usePageCtx()

  if (!('sideNav' in pageCtx.pageMeta)) return null

  const { navCategories, header } = pageCtx.pageMeta.sideNav
  const hasMultiCategoriesInNav = navCategories.length > 1

  return (
    <ConsoleMenu
      header={header}
      activeKey={pageCtx.pageMeta.path}
      defaultOpenAll
    >
      {navCategories.map(navCategory => {
        const currentCategory = pageCtx.siteMeta.categories.find(
          ({ name }) => name === navCategory.categoryName
        )
        if (!currentCategory) {
          console.warn(`category not exist: ${navCategory.categoryName}`)
          return null
        }
        const consoleMenuItems = currentCategory.docs
          .sort((a, b) => {
            const sortA = typeof a.sort === 'number' ? a.sort : 1
            const sortB = typeof b.sort === 'number' ? b.sort : 1
            if (sortA - sortB !== 0) return sortA - sortB
            return a.name.localeCompare(b.name)
          })
          .map(docInfo => {
            return (
              <ConsoleMenu.Item key={docInfo.path}>
                <Link to={docInfo.path}>
                  <DocMenuLabel docInfo={docInfo} />
                </Link>
              </ConsoleMenu.Item>
            )
          })
        if (hasMultiCategoriesInNav) {
          return (
            <ConsoleMenu.SubMenu
              label={currentCategory.zhName}
              key={currentCategory.zhName}
            >
              {consoleMenuItems}
            </ConsoleMenu.SubMenu>
          )
        }
        return consoleMenuItems
      })}
    </ConsoleMenu>
  )
}

export default SideBar
