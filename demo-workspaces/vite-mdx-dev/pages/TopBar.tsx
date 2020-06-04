import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '@alicloud/console-components'
import { Link } from 'react-router-dom'
// import { useSearchPagesUI } from './SearchPages'
// import { usePageCtx } from './context'

export const TOP_BAR_HEIGHT = 52
export const BACKGROUND_COLOR = '#fff'
export const TITLE_COLOR = '#181818'
export const MENU_COLOR = '#181818;'
export const HOVER_COLOR = '#ff8f00'

const linkCSS = css`
  display: inline-block;
  height: ${TOP_BAR_HEIGHT}px;
  line-height: ${TOP_BAR_HEIGHT}px;
  &:hover {
    color: ${HOVER_COLOR};
  }
`

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
    ${linkCSS}
    color: ${TITLE_COLOR};
  }
`

const SNavList = styled.div`
  float: right;
  && a {
    ${linkCSS}
    padding: 0 4px;
    margin: 0 16px;
    font-size: 14px;
    color: ${MENU_COLOR};
    border-bottom: 3px solid ${BACKGROUND_COLOR};
  }
`

// const SSearch = styled.div`
//   display: inline-block;
//   padding: 10px 0;
//   line-height: 0;
//   opacity: 0.6;
//   width: 240px;
// `

export interface ITopBarProps {
  logo: React.ReactNode
  topNav: { href: string; text: string }[]
}

const TopBar: React.FC<ITopBarProps> = ({ logo, topNav }) => {
  // const pageCtx = (() => {
  //   try {
  //     return usePageCtx()
  //   } catch (error) {
  //     return null
  //   }
  // })()
  // const searchPagesUI = useSearchPagesUI()
  // if (!pageCtx) return <STopBar />
  return (
    <STopBar>
      <SLogo>
        <Link to="/">{logo}</Link>
      </SLogo>
      {/* <SSearch>{searchPagesUI}</SSearch> */}
      <SNavList>
        {topNav.map((navItem) => {
          if (/^https?:\/\/(.*)/.test(navItem.href)) {
            // external link
            return (
              <a
                href={navItem.href}
                target="_blank"
                rel="noopener noreferrer"
                key={navItem.text}
              >
                {navItem.text}
                &nbsp;
                <Icon type="external-link" size="xs" />
              </a>
            )
          }
          // in app link
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
