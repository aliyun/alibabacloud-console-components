import React from 'react'
import styled from 'styled-components'
import { Dropdown, Menu, Icon } from '@alicloud/console-components'
import { Link } from 'gatsby'
import SearchPages, { ISearchPagesProps } from './SearchPages'
import { usePageCtx } from './context'

export const TOP_BAR_HEIGHT = 52
export const BACKGROUND_COLOR = '#fff'
export const TITLE_COLOR = '#181818'
export const MENU_COLOR = '#181818;'
export const HOVER_COLOR = '#ff8f00'

const STopBar = styled.div`
  height: ${TOP_BAR_HEIGHT}px;
  overflow: hidden;
  background-color: ${BACKGROUND_COLOR};
  padding: 0 20px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
  /* https://stackoverflow.com/a/9343125 */
  position: relative;
  z-index: 2;
`

const SLogo = styled.h1`
  display: inline-block;
  height: ${TOP_BAR_HEIGHT}px;
  line-height: ${TOP_BAR_HEIGHT}px;
  vertical-align: top;
  margin: 0;
  font-size: 16px;
  min-width: 190px;
  && a {
    color: ${TITLE_COLOR};
    :hover {
      color: ${HOVER_COLOR};
    }
  }
`

const SNavList = styled.div`
  float: right;
  && a {
    display: inline-block;
    height: ${TOP_BAR_HEIGHT}px;
    line-height: ${TOP_BAR_HEIGHT}px;
    padding: 0 15px;
    margin: 0 5px;
    font-size: 14px;
    color: ${MENU_COLOR};
    border-bottom: 3px solid ${BACKGROUND_COLOR};
    &:hover {
      color: ${HOVER_COLOR};
    }
  }
`

const SSearch = styled.div`
  display: inline-block;
  padding: 10px 0;
  line-height: 0;
  opacity: 0.6;
  width: 240px;
`

// interface INavItemProps {
//   name: string
//   href: string
// }
// const NavItem: React.FC<INavItemProps> = ({ name, href }) => {
//   return <Link to={href}>{name}</Link>
// }

// interface INavMenuProps {
//   name: string
//   list: INavItemProps[]
// }
// const NavMenu: React.FC<INavMenuProps> = ({ name, list }) => {
//   return (
//     <Dropdown
//       trigger={
//         <span>
//           {name}
//           <Icon type="arrow-down" size="xxs" />
//         </span>
//       }
//     >
//       <Menu>
//         {list.map((item: any, index: number) => (
//           <Menu.Item key={index}>
//             <NavItem {...item} />
//           </Menu.Item>
//         ))}
//       </Menu>
//     </Dropdown>
//   )
// }

const TopBar: React.FC = () => {
  const pageCtx = usePageCtx()

  return (
    <STopBar>
      <SLogo>
        <Link to={pageCtx.siteMeta.primaryPath}>Console Components</Link>
      </SLogo>
      <SSearch>
        <SearchPages />
      </SSearch>
      <SNavList>
        {pageCtx.siteMeta.topNav.map((navItem, index) => {
          return (
            <Link to={navItem.href} key={navItem.text}>
              {navItem.text}
            </Link>
          )
        })}
      </SNavList>
    </STopBar>
  )
}

export default TopBar
