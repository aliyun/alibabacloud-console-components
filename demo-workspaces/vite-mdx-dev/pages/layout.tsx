import React from 'react'

declare const TopBar: React.ComponentType
declare const Main: React.ComponentType
declare const MainLeft: React.ComponentType
declare const NavMenu: React.ComponentType
declare const MainRight: React.ComponentType
declare const Content: React.ComponentType
declare const Footer: React.ComponentType

interface IProps {}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <TopBar />
      <Main>
        <MainLeft>
          <NavMenu />
        </MainLeft>
        <MainRight>
          <Content>{children}</Content>
          <Footer />
        </MainRight>
      </Main>
    </>
  )
}

export default Layout
