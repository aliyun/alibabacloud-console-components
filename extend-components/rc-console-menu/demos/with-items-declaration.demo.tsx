import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import { Location } from 'history'
import ConsoleMenu, {
  IItemDescriptor,
} from '@alicloud/console-components-console-menu'
import { Input } from '@alicloud/console-components'
import { FakeBrowserWithWrapper as FakeBrowser } from '@alicloud/console-components-fake-browser'

const renderLinkItem = ({ key, label }: IItemDescriptor) => (
  <Link to={key}>{label}</Link>
)

const items: IItemDescriptor[] = [
  // Defination with label
  {
    key: '/home',
    label: '首页',
    render: renderLinkItem,
    navProps: {
      // 透传给Nav.Item组件的props
      className: 'test-nav-item-pros',
      icon: 'smile',
      // Nav.Item组件不认识的pros，会被它透传到`<li>`DOM节点上
      'custom-dom-property': '8237461',
    },
  },

  // Defination with custom render
  { key: '/instance', label: '实例', render: renderLinkItem },

  // Defination as a sub menu
  {
    key: '/logs',
    label: '日志',
    items: [
      { key: '/daily', label: '日常环境', render: renderLinkItem },
      { key: '/pre', label: '预发环境', render: renderLinkItem },
      { key: '/prod', label: '生产环境', render: renderLinkItem },
    ],
    navProps: {
      // 透传给Nav.SubNav组件的props
      className: 'test-nav-sub-menu-pros',
      icon: 'smile',
      // Nav.SubNav组件不认识的pros，会被它透传到`<li>`DOM节点上
      'custom-dom-property': '8237461',
    },
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
        key: '/docs',
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
 * 使用 items 声明结构化的导航菜单
 */
const Example = () => {
  return (
    <FakeBrowser>
      <Route>
        {({ location, history }) => {
          const activeKey = mapLocationToActiveKey(location)

          return (
            <Fragment>
              <div style={{ marginBottom: 8 }}>
                <Input
                  key={location.pathname}
                  style={{ width: '100%' }}
                  defaultValue={location.pathname}
                  onPressEnter={
                    ((e: any) => {
                      history.push(e.target.value)
                    }) as any
                  }
                />
              </div>
              <div>
                <ConsoleMenu
                  header="阿里云控制台"
                  items={items}
                  activeKey={activeKey}
                />
              </div>
            </Fragment>
          )
        }}
      </Route>
    </FakeBrowser>
  )
}

export default Example
