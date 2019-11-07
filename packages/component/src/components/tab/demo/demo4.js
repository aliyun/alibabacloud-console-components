import React, { Component } from 'react'
import { Tab, Select } from '@alicloud/console-components'
import './demo4.less'

export default class Demo4 extends React.Component {

  state = {
    position: 'top',
  }

  changePosition = (val) => {
    this.setState({
      position: val,
    })
  }

  render() {
    return (
      <div>
        <Select onChange={this.changePosition} placeholder="Choose Positon of Tab">
          {
            ['top', 'bottom', 'left', 'right'].map(item => <Select.Option value={item} key={item}>{item}</Select.Option>)
          }
        </Select><br /><br />
        
        <Tab tabPosition={this.state.position} shape="wrapped" className="tab-demo4-box" contentClassName="custom-tab-content" size="small">
          <Tab.Item title="Tab 1" key="1">Tab 1 Content</Tab.Item>
          <Tab.Item title="Tab 2" key="2">Tab 2 Content</Tab.Item>
          <Tab.Item title="Tab 3" key="3">Tab 3 Content</Tab.Item>
        </Tab>
      </div>
    )
  }
}