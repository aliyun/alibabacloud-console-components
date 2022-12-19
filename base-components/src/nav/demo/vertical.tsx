/**
 * @title 左侧内嵌导航
 * @description 垂直菜单，子菜单内嵌在菜单区域，四种样式模式可选。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Nav, Radio } from '@alicloudfe/components'

const { Item, SubNav } = Nav

class App extends React.Component {
  state = {
    type: 'normal'
  }

  changeType = (type) => {
    this.setState({
      type
    })
  }

  render() {
    const { type } = this.state

    return (
      <div>
        <div className="demo-ctl">
          <Radio.Group
            shape="button"
            size="medium"
            value={type}
            onChange={this.changeType}
          >
            <Radio value="normal">type="normal"</Radio>
            <Radio value="primary">type="primary"</Radio>
            <Radio value="secondary">type="secondary"</Radio>
            <Radio value="line">type="line"</Radio>
          </Radio.Group>
        </div>
        <Nav style={{ width: '200px' }} type={type} defaultOpenAll>
          <Item icon="account">Navigation One</Item>
          <Item icon="account">Navigation Two</Item>
          <Item icon="account">Navigation Three</Item>
          <Item icon="account">Navigation Four</Item>
          <Item icon="account">Navigation Five</Item>
          <SubNav icon="account" label="Sub Nav">
            <Item icon="account">Item 1</Item>
            <Item icon="account">Item 2</Item>
            <Item icon="account">Item 3</Item>
            <Item icon="account">Item 4</Item>
          </SubNav>
        </Nav>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .demo-ctl {
    background-color: #f1f1f1;
    border-left: 4px solid #0d599a;
    color: #0a7ac3;
    margin-bottom: 20px;
    padding: 5px;
  }
  .demo-ctl .next-radio-group {
    display: block;
    margin: 5px;
  }
`
