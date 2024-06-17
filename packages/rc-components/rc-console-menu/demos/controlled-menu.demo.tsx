import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Location } from 'history'
import ConsoleMenu from '@alicloud/console-components-console-menu'
import { FakeBrowserWithWrapper as FakeBrowser } from '@alicloud/console-components-fake-browser'

/**
 * 将当前的 location 映射为被选中的 key
 * @param {Location} location
 */
const mapLocationToActiveKey = (location: Location) => {
  if (!location || !location.pathname || location.pathname === '/') {
    return '/home'
  }

  return location.pathname
}

/**
 * 结合 `<Route>` 和 `<Link>` 自定义受控的导航菜单
 */
const Example = () => (
  <Route>
    {({ location }) => {
      const activeKey = mapLocationToActiveKey(location)
      return (
        <ConsoleMenu header="Aliyun Console" activeKey={activeKey}>
          <ConsoleMenu.Item key="/home">
            <Link to="/home">首页</Link>
          </ConsoleMenu.Item>
          <ConsoleMenu.Item key="/list">
            <Link to="/list">实例</Link>
          </ConsoleMenu.Item>
          <ConsoleMenu.SubMenu key="logs" label="日志">
            <ConsoleMenu.Item key="/daily">
              <Link to="/daily">日常环境</Link>
            </ConsoleMenu.Item>
            <ConsoleMenu.Item key="/prod">
              <Link to="/prod">生产环境</Link>
            </ConsoleMenu.Item>
          </ConsoleMenu.SubMenu>
          <ConsoleMenu.SubMenu key="others" label="其他">
            <ConsoleMenu.Item key="help">
              <a
                href="https://www.aliyun.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                帮助
              </a>
            </ConsoleMenu.Item>
            <ConsoleMenu.Item key="docs" disabled>
              文档
            </ConsoleMenu.Item>
          </ConsoleMenu.SubMenu>
        </ConsoleMenu>
      )
    }}
  </Route>
)

const FakeBrowserDemo = () => {
  return (
    <FakeBrowser>
      <Example />
    </FakeBrowser>
  )
}

export default FakeBrowserDemo
