import React from 'react'
import styled from 'styled-components'
import AppLayout from '@alicloud/console-components-app-layout'
import TopBar from './TopBar'

export interface IProps {
  sideMenu: React.ReactNode
  userConfig: any
}

// Layout与页面组件的父子关系反转，
// 页面组件是父组件，Layout是子组件，前者为后者注入信息、要渲染的内容
// 这样的话，页面组件能根据当前所处页面来注入有用的信息，比如侧边导航内容
// 这实际上是洋葱圈模型在React中的应用

// 但是，这样的话，每次跳转到不同的页面，页面组件都会变化，造成其中的Layout组件重渲染
// 因此，实现的时候，页面实际上是一个hook，在Layout的父组件上运行，它的结果通过React context或者props传递给Layout组件

const Layout: React.FC<IProps> = ({ sideMenu, children, userConfig }) => {
  return (
    <div>
      <TopBar
        logo="TestSite"
        topNav={[
          { href: 'https://github.com/vitejs/vite', text: 'Vite' },
          {
            href: 'https://github.com/aliyun/alibabacloud-console-components',
            text: 'ConsoleComponents',
          },
        ]}
      />
      {/* {children} */}
      <SAppLayout
        // nav={<SideBar />}
        // adjustHeight={TOP_BAR_HEIGHT}
        navCollapsible={false}
      >
        {children}
      </SAppLayout>
    </div>
  )

  // return (
  //   <>
  //     <Main>
  //       <MainLeft>{sideMenu}</MainLeft>
  //       <MainRight>
  //         {content}
  //         <Footer />
  //       </MainRight>
  //     </Main>
  //   </>
  // )
}

export default Layout

const SAppLayout = styled(AppLayout)`
  .windcc-app-layout__nav {
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
