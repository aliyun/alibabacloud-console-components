import React from 'react'
import ConsoleMenu, { IItemDescriptor } from '@alicloud/console-components-console-menu'
import { FakeBrowserWithWrapper as FakeBrowser } from '@alicloud/console-components-fake-browser'

const items: IItemDescriptor[] = [
  // Defination with label
  {
    key: 'overview',
    label: '概览',
    items: [
      { key: 'resources', label: '资源' },
      { key: 'monitor', label: '监控' },
    ],
  },

  // Defination with custom render
  { key: 'instance', label: '实例' },

  // Defination as a sub menu
  {
    key: 'logs',
    label: '日志',
    items: [
      { key: 'daily', label: '日常环境' },
      { key: 'pre', label: '预发环境' },
      { key: 'prod', label: '生产环境' },
    ],
  },

  // Another sub menu
  {
    key: 'others',
    label: '其他',
    items: [
      {
        key: 'help',
        label: '帮助',
        render: ({ key, label }) => (
          <a
            href="https://help.aliyun.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        ),
      },
      {
        key: 'docs',
        label: '文档',
        disabled: true,
        render: ({ key, label }) => (
          <a
            href="https://docs.aliyun.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        ),
      },
    ],
  },
]

/**
 * 使用 items 声明结构化的导航菜单
 */
const Example = () => {
  return (
    <FakeBrowser>
      <ConsoleMenu
        header="阿里云控制台"
        items={items}
        defaultActiveKey="monitor"
        defaultOpenAll
      />
    </FakeBrowser>
  )
}

export default Example
