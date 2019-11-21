import React from 'react'
import ConsoleMenu from '@alicloud/console-components-console-menu'
import _ from 'lodash'
import { Link } from 'gatsby'
import { usePageCtx } from './context'

const SideBar: React.FC = () => {
  const pageCtx = usePageCtx()

  if (pageCtx.pageMeta.type !== 'doc') return null

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
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(docInfo => {
            return (
              <ConsoleMenu.Item key={docInfo.path}>
                <Link to={docInfo.path}>
                  {capitalizeFirstLetter(_.camelCase(docInfo.name))}
                  {docInfo.zhName}
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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
