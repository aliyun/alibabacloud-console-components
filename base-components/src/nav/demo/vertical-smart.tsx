/**
 * @title 缩起内嵌菜单
 * @description 内嵌菜单可以被缩起/展开。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Nav, Switch, Radio } from '@alicloudfe/components'

const { Item, SubNav } = Nav

class App extends React.Component {
  state = {
    collapse: false,
    embeddable: false
  }

  onChange = (val) => {
    this.setState({
      collapse: val
    })
  }

  changeEmbeddable = (embeddable) => {
    this.setState({
      embeddable
    })
  }

  render() {
    const { collapse, embeddable } = this.state
    let iconOnly, mode

    if (collapse) {
      iconOnly = true
      mode = 'popup'
    } else {
      iconOnly = false
      mode = 'inline'
    }

    return (
      <div>
        <Switch defaultChecked={false} onChange={this.onChange} size="small" />
        <div className="demo-ctl">
          <Radio.Group
            shape="button"
            size="medium"
            value={embeddable}
            onChange={this.changeEmbeddable}
          >
            <Radio value>embeddable=true</Radio>
            <Radio value={false}>embeddable=false</Radio>
          </Radio.Group>
        </div>
        <Nav
          style={{ width: '200px' }}
          embeddable={embeddable}
          defaultOpenAll
          defaultSelectedKeys={['0-1']}
          iconOnly={iconOnly}
          hasArrow={false}
          hasTooltip
          mode={mode}
        >
          <Item icon="calendar"> Schedule </Item>
          <Item icon="email"> Email </Item>
          <Item icon="help"> Help </Item>
          <SubNav icon="set" label="Settings">
            <Item icon="account"> Account </Item>
            <Item icon="exit"> Exit </Item>
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
