import React from 'react'
import RoutableMenu from '@alicloud/console-components-console-menu/RoutableMenu'
import { IRoutableItemDescriptor } from '@alicloud/console-components-console-menu'
import { FakeBrowserWithWrapper as FakeBrowser } from '@alicloud/console-components-fake-browser'

const items: IRoutableItemDescriptor[] = [
  { key: '/home', to: '/', label: '首页' },
  { key: '/instance', to: '/instance', label: '实例概览' },

  // Defination as a sub menu
  {
    key: '/logs',
    label: '日志',
    items: [
      { key: '/pre', to: '/pre', label: '预发环境' },
      { key: '/prod', to: '/prod', label: '生产环境' },
    ],
  },
  {
    key: '/rd',
    label: '资源目录',
    items: [
      { key: '/rd-overview', to: '/rd-overview', label: '概览' },
      { key: '/rd-members', to: '/rd-members', label: '成员列表' },
    ],
  },
]

// 初始打开某个页面，应该默认展开这个页面的父节点，即使defaultOpenKeys不包含它的父节点
const Example = () => {
  return (
    <FakeBrowser
      memoryRouterProps={{
        initialEntries: ['/rd-overview'],
        // initialEntries: ['/home'],
        initialIndex: 0,
      }}
    >
      <div>
        <RoutableMenu
          defaultOpenKeys={['/logs']}
          header="阿里云控制台"
          items={items}
        />
      </div>
    </FakeBrowser>
  )
}

export default Example
