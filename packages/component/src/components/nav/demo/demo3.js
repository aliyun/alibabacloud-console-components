import React from 'react'
import { Nav, Radio } from '@alicloud/console-components'

const { Item, SubNav } = Nav

export default class Demo3 extends React.Component {
  state = {
    iconOnly: false,
    hasTooltip: true,
    hasArrow: true
    }

  setValue(name, value) {
    this.setState({
      [name]: value === 'true'
    })
  }

  render() {
    const { iconOnly, hasTooltip, hasArrow } = this.state

    return (
      <div>
        <div className="demo-ctl">
          <Radio.Group shape="button" size="medium" value={iconOnly ? 'true' : 'false'} onChange={this.setValue.bind(this, 'iconOnly')}>
            <Radio value="true">iconOnly=true</Radio>
            <Radio value="false">iconOnly=false</Radio>
          </Radio.Group>
          {iconOnly ?
          <Radio.Group shape="button" size="medium" value={hasArrow ? 'true' : 'false'} onChange={this.setValue.bind(this, 'hasArrow')}>
            <Radio value="true">hasArrow=true</Radio>
            <Radio value="false">hasArrow=false</Radio>
          </Radio.Group> : null}
          {iconOnly ?
          <Radio.Group shape="button" size="medium" value={hasTooltip ? 'true' : 'false'} onChange={this.setValue.bind(this, 'hasTooltip')}>
            <Radio value="true">hasTooltip=true</Radio>
            <Radio value="false">hasTooltip=false</Radio>
          </Radio.Group> : null}
        </div>
        <Nav style={{ width: '200px' }} iconOnly={iconOnly} hasArrow={hasArrow} hasTooltip={hasTooltip}>
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
