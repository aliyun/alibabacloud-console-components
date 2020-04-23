import React from 'react'
import { Route } from 'dva/router'
import { Input } from '@alicloud/console-components'
import RoutableMenu from '@alicloud/console-components-console-menu/RoutableMenu'
import { IRoutableItemDescriptor } from '@alicloud/console-components-console-menu'
import { FakeBrowserWithWrapper as FakeBrowser } from '@alicloud/console-components-fake-browser'

const regions = ['cn-beijing', 'cn-shanghai', 'cn-hangzhou']

const items: IRoutableItemDescriptor[] = [
  { key: '/home', to: '/', label: '首页' },
  {
    key: '/instance',
		to: '/instance',
    label:
      '实例概览实例',
  },
  {
    key: '/instance/:region',
    // 可以使用函数来返回动态的 pathname 或 location
    to: () => `/instance/${regions[0]}`,
    activePathPatterns: ['/instance/:region', '/instance-list/:region'],
    label: '实例列表',
  },

  // Defination as a sub menu
  {
    key: '/logs',
    label: '日志',
    items: [
      {
        key: '/daily/:region?',
        // to 也可以声明为一个函数表达式
        // 第一个参数是当前的 route props ，第二个参数是当前的 item 的结构化信息
        // 你可以利用这些信息来动态地返回需要进行跳转的 pathname 或 location
        to: (routeProps, thisItem) => {
          // 下面的这个例子使用了当前路由的匹配信息（注意：并不是对于该 item 的匹配）
          // 来进行相应的跳转。如果当前的路由中包含 param: region ，（譬如
          // `/instance/:region` ，那么点击该 item 将会跳转到 `/daily/:region`
          const match = routeProps.match || {}
          const { params: { region = '' } = {} } = match
          return region ? `/daily/${region}` : '/daily'
        },
        label: '日常环境',
      },
      { key: '/pre', to: '/pre', visible: false, label: '预发环境' },
      { key: '/prod', to: '/prod', label: '生产环境' },
    ],
  },

  // Another sub menu
  {
    key: '/others',
    label: '其他',
    items: [
      {
        key: '/help',
        label: '帮助',
        render: ({ key, label }) => (
          <a href="https://www.aliyun.com" target="_blank">
            {label}
          </a>
        ),
      },
      {
        key: '/docs',
        to: '/docs',
        label: '文档',
        disabled: true,
      },
    ],
  },
]

const Example = () => {
  return (
    <FakeBrowser>
      <div>
        <RoutableMenu
          header="阿里云控制台"
          items={items}
        />
        <p>
          Tips: 在地址栏输入<code>/daily/cn-beijing</code>，父节点会自动展开
        </p>
      </div>
    </FakeBrowser>
  )
}

export default Example
