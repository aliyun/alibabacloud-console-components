/**
 * @title 弹出型子菜单的顶部对齐
 * @description 通过 popupAlign 一键设置。用于菜单深度较浅，但子菜单内容较多的场景。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Nav, Radio } from '@alicloudfe/components'

const { Item, SubNav } = Nav

class App extends React.Component {
  state = {
    popupAlign: 'outside'
  }

  setValue(popupAlign) {
    this.setState({
      popupAlign
    })
  }

  render() {
    const { popupAlign } = this.state

    return (
      <div>
        <div className="demo-ctl">
          <Radio.Group
            shape="button"
            size="medium"
            value={popupAlign}
            onChange={this.setValue.bind(this)}
          >
            <Radio value="follow">popupAlign="follow"</Radio>
            <Radio value="outside">popupAlign="outside"</Radio>
          </Radio.Group>
        </div>
        <Nav
          style={{ height: 400, width: 240 }}
          mode="popup"
          popupAlign={popupAlign}
        >
          <SubNav key="sub-nav-1" label="Sub Nav 1">
            <Item key="1">Item 1</Item>
          </SubNav>
          <SubNav key="sub-nav-2" label="Sub Nav 2">
            <Item key="1">Item 1</Item>
            <Item key="2">Item 2</Item>
          </SubNav>
          <SubNav key="sub-nav-3" label="Sub Nav 3">
            <Item key="1">Item 1</Item>
            <Item key="2">Item 2</Item>
            <Item key="3">Item 3</Item>
          </SubNav>
          <SubNav key="sub-nav-4" label="Sub Nav 4">
            <Item key="1">Item 1</Item>
            <Item key="2">Item 2</Item>
            <Item key="3">Item 3</Item>
            <Item key="4">Item 4</Item>
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
    margin: 5px;
  }
`
