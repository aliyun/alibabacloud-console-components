import React, { Component } from 'react'
import { Tab, Button, Icon } from '@alicloud/console-components'


const panes = [
  { tab: 'Mail', key: 1, closeable: false },
  { tab: 'Message', key: 2, closeable: true },
  { tab: 'Setting', key: 3, closeable: true },
  { tab: 'Unread', key: 4, closeable: true },
]

export default class Demo10 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      panes: panes,
      activeKey: panes[0].key,
    }
  }

  /*eslint-disable eqeqeq */
  remove(targetKey) {
    let activeKey = this.state.activeKey;
    const panes = [];
    this.state.panes.forEach(pane => {
      if (pane.key != targetKey) {
        panes.push(pane);
      }
    })

    if (targetKey == activeKey) {
      activeKey = panes[0].key;
    }
    this.setState({ panes, activeKey });
  }

  onClose = (targetKey) => {
    this.remove(targetKey);
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  addTabpane = () => {
    this.setState(prevState => {
      const { panes } = prevState;
      panes.push({ tab: 'new tab', key: Math.random(), closeable: true });
      return { panes };
    })
  }

  render() {
    const state = this.state;
    return (
    <div>
      <Button onClick={this.addTabpane} size="large" type="primary"><Icon type="add"/> New Tab</Button>
      <br/><br/>
      <Tab
        shape="wrapped"
        activeKey={state.activeKey}
        onChange={this.onChange}
        onClose={this.onClose}
        className="custom-tab">
        {state.panes.map(item => <Tab.Item title={item.tab} key={item.key}  closeable={item.closeable}> {item.tab} content</Tab.Item>)}
      </Tab>
    </div>
    )
  }
}