import React from 'react'
import { Nav, Button } from '@alicloud/console-components'
import './index.less'

const header = (
  <span className="header">@alicloud/console-components</span>
)

const footer = (
  <div className="footer">
    <Button ghost="dark">Sign in</Button>
  </div>
)

const defaultSelectedKeys = ['home']

const BasicDemo = () => (
  <div className="nav-demo-basic">
    <Nav
      direction="hoz"
      type="primary"
      triggerType="hover"
      defaultSelectedKeys={defaultSelectedKeys}
      header={header}
      footer={footer}
    >
      <Nav.Item key="home">首页</Nav.Item>
      <Nav.Item key="doc">文档</Nav.Item>
      <Nav.SubNav
        label="更多"
        selectable
      >
        <Nav.Item key="edit">编辑</Nav.Item>
        <Nav.Item key="help">帮助</Nav.Item>
      </Nav.SubNav>
    </Nav>
  </div>
)

export default BasicDemo
