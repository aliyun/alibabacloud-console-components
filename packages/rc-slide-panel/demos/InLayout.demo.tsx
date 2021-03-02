import React, { useState } from 'react'
import { Button } from '@alicloud/console-components'
import AppLayout from '@alicloud/console-components-app-layout'
import ConsoleMenu from '@alicloud/console-components-console-menu'
import Page from '@alicloud/console-components-page'
import SlidePanel from '@alicloud/console-components-slide-panel'

/* eslint-disable jsx-a11y/anchor-is-valid */

const Nav = () => (
  <ConsoleMenu header="产品控制台">
    <ConsoleMenu.Item key="overview">概览</ConsoleMenu.Item>
    <ConsoleMenu.Item key="instance">实例</ConsoleMenu.Item>
    <ConsoleMenu.SubMenu key="log" label="日志">
      <ConsoleMenu.Item key="access-log">访问日志</ConsoleMenu.Item>
      <ConsoleMenu.Item key="load-log">负载日志</ConsoleMenu.Item>
    </ConsoleMenu.SubMenu>
    <ConsoleMenu.Item key="help">产品帮助</ConsoleMenu.Item>
    <ConsoleMenu.Item key="api-docs">API 文档</ConsoleMenu.Item>
  </ConsoleMenu>
)

const Example = () => {
  const [active, setActive] = useState(false)

  return (
    <AppLayout nav={<Nav />} style={{ height: 300 }}>
      <Page>
        <Page.Header title="概览" />
        <Page.Content>
          <Button
            onClick={() => {
              setActive(true)
            }}
          >
            open bottom slide panel
          </Button>
          <SlidePanel
            title="Bottom Slide Panel"
            placement="bottom"
            isShowing={active}
            width="medium"
            onMaskClick={() => {
              setActive(false)
            }}
            popupProps={{
              container: () =>
                document.querySelector('.windcc-app-layout__content'),
              target: () =>
                document.querySelector('.windcc-app-layout__content'),
              // 让滑动面板从内容区域的下方出现，并且距离内容区域有内边距24px
              offset: [24, 0],
              style: {
                right: 24,
              },
            }}
          >
            Bottom slide panel content
          </SlidePanel>
        </Page.Content>
      </Page>
    </AppLayout>
  )
}

export default Example
