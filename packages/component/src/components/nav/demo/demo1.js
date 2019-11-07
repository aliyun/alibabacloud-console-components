import React from 'react'
import { Nav } from '@alicloud/console-components'
import './demo1.less'

const { Item, SubNav } = Nav

const header = <span className="fusion">FUSION</span>

const footer = <a className="login-in" href="javascript:;">Login in</a>

const Demo1 = () => (
  <Nav className="custom-nav" direction="hoz" type="primary" header={header} footer={footer} defaultSelectedKeys={['home']} triggerType="hover">
    <Item key="home">Home</Item>
    <SubNav label="Component" selectable>
      <Item key="next">Next</Item>
      <Item key="mext">Mext</Item>
    </SubNav>
    <Item key="document">Document</Item>
  </Nav>
)

export default Demo1