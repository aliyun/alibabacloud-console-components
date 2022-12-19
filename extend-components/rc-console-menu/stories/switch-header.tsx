import React, { useState } from 'react'
import ConsoleMenu from '@alicloud/console-components-console-menu'
import { FakeBrowserWithWrapper as FakeBrowser } from '@alicloud/console-components-fake-browser'

/**
 * @param {String|Number} key 被点击的 `<Item>` 的 key
 * @param {Item} item 被点击的 `<Item>` 的序列化对象
 * @param {SyntheticEvent} e
 */
const onItemClick = (key: string, itemInfo: any, e: MouseEvent) => {
  console.log(`Item ${key} has been clicked.`)
  console.log([itemInfo, e])
}

/**
 * 使用组件方式声明导航菜单
 */
const Example = () => {
  const [header, setHeader] = useState('产品1')
  const handleSelectHeader = (value: string) => {
    console.log('selectValue:', value)
    setHeader(value)
  }
  return (
    <ConsoleMenu
      header={header}
      headers={['产品1', '产品2']}
      onSelectHeader={handleSelectHeader}
      onItemClick={onItemClick}
      defaultActiveKey="home"
    >
      <ConsoleMenu.Item key="home">首页</ConsoleMenu.Item>
      <ConsoleMenu.Item key="list">实例</ConsoleMenu.Item>
      <ConsoleMenu.SubMenu key="logs" label="日志">
        <ConsoleMenu.Item key="daily">
          日常环境是用于开发人员日常调试所用的开发环境，包括服务器、系统环境、开发资源和集成环境组成
        </ConsoleMenu.Item>
        <ConsoleMenu.Item key="prod">生产环境</ConsoleMenu.Item>
      </ConsoleMenu.SubMenu>
      <ConsoleMenu.SubMenu key="others" label="其他">
        <ConsoleMenu.Item key="help">帮助</ConsoleMenu.Item>
        <ConsoleMenu.Item key="docs" disabled>
          文档
        </ConsoleMenu.Item>
      </ConsoleMenu.SubMenu>
      <ConsoleMenu.Item key="monitor">监控</ConsoleMenu.Item>
    </ConsoleMenu>
  )
}

const FakeBrowserDemo = () => {
  return (
    <FakeBrowser>
      <Example />
    </FakeBrowser>
  )
}

export default FakeBrowserDemo
