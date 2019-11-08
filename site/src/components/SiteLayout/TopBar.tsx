import React from 'react'
import styled from 'styled-components'
import { Dropdown, Menu, Icon } from '@alicloud/console-components'
import { Link } from 'gatsby'
import { BaseCompDocEntry, BizCompDocEntry, GuideEntry } from '@site/constants'
import SearchPages, { ISearchPagesProps } from './SearchPages'

export const TOP_BAR_HEIGHT = 60
export const BACKGROUND_COLOR = '#20232a'
export const TITLE_COLOR = '#fff'
export const MENU_COLOR = '#e6e6e6'
export const HOVER_COLOR = '#61dafb'

const STopBar = styled.div`
  display: flex;
  height: ${TOP_BAR_HEIGHT}px;
  overflow: hidden;
  background-color: ${BACKGROUND_COLOR};
  padding: 0 20px;
  align-items: center;
`

const SLogo = styled.h1`
  display: inline-block;
  line-height: ${TOP_BAR_HEIGHT}px;
  vertical-align: top;
  padding-right: 30px;
  margin: 0;
  font-size: 30px;
  && a {
    color: ${TITLE_COLOR};
  }
`

const SNavList = styled.div`
  display: inline-block;
  && a,
  && span {
    display: inline-block;
    height: ${TOP_BAR_HEIGHT}px;
    line-height: ${TOP_BAR_HEIGHT}px;
    padding: 0 15px;
    margin: 0 5px;
    font-size: 14px;
    color: ${MENU_COLOR};
    border-bottom: 3px solid ${BACKGROUND_COLOR};
    &:hover,
    &.here {
      color: ${HOVER_COLOR};
    }
    &.here {
      border-bottom-color: ${HOVER_COLOR};
    }
  }
`

const SSearch = styled.div`
  display: inline-block;
  padding: 10px;
  line-height: 0;
  opacity: 0.6;
  width: 300px;
  margin-left: 30px;
`

interface NavItemProps {
  name: string
  href: string
}
const NavItem: React.FC<NavItemProps> = ({ name, href }) => {
  return <Link to={href}>{name}</Link>
}

interface NavMenuProps {
  name: string
  list: NavItemProps[]
}
const NavMenu: React.FC<NavMenuProps> = ({ name, list }) => {
  return (
    <Dropdown
      trigger={
        <span>
          {name}
          <Icon type="arrow-down" size="xxs" />
        </span>
      }
    >
      <Menu>
        {list.map((item: any, index: number) => (
          <Menu.Item key={index}>
            <NavItem {...item} />
          </Menu.Item>
        ))}
      </Menu>
    </Dropdown>
  )
}

const navs: (NavItemProps | NavMenuProps)[] = [
  // { name: '组件库', list: [{ name: '基础组件' }, { name: '业务组件' }] },
  // { name: '国际化方案' },
  // { name: 'DEMO' },
  // { name: '练习场' },
  // { name: '设计语言' },
  { name: '基础组件', href: BaseCompDocEntry },
  { name: '业务组件', href: BizCompDocEntry },
  { name: '开发指南', href: GuideEntry },
]

interface ITopBarProps {
  searchData: ISearchPagesProps['searchData']
}

const TopBar: React.FC<ITopBarProps> = ({ searchData }) => {
  return (
    <STopBar className="top-nav">
      <SLogo>
        <Link to={BaseCompDocEntry}>Console Components</Link>
      </SLogo>
      <SNavList className="top-nav_list">
        {navs.map((navItem: any, index) => {
          if (navItem.list) {
            return <NavMenu {...navItem} key={index} />
          }
          return <NavItem {...navItem} key={index} />
        })}
      </SNavList>
      <SSearch>
        <SearchPages searchData={searchData} />
      </SSearch>
    </STopBar>
  )
}

export default TopBar
