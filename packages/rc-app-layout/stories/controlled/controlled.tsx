import React, { useState } from 'react'
import { Button } from '@alicloud/console-components'
import AppLayout from '@alicloud/console-components-app-layout'
import ConsoleMenu from '@alicloud/console-components-console-menu'
import Page from '@alicloud/console-components-page'

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

// 使用 `navCollapsed` 控制导航区域是否展开或收起
// 该示例使用 class component 并通过 state 完成受控
// 在实际项目中，你可以通过 React Hooks 或者 Redux 进行状态管理从而完成受控

const Controlled: React.FC<{}> = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <AppLayout
      nav={<Nav />}
      navCollapsed={collapsed}
      onNavCollapseTriggerClick={(prevCollapsed: boolean) => {
        setCollapsed(!prevCollapsed)
      }}
    >
      <Page>
        <Page.Header title="概览" />
        <Page.Content>
          <Button
            type="primary"
            size="large"
            onClick={() => {
              setCollapsed(!collapsed)
            }}
          >
            {collapsed ? '展开当前已关闭的导航区' : '收起当前已展开的导航区'}
          </Button>
        </Page.Content>
      </Page>
    </AppLayout>
  )
}

export default Controlled
