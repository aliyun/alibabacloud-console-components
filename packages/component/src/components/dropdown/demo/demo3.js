import React from 'react'
import { Dropdown, Menu, Button} from '@alicloud/console-components'


const menu = (
  <Menu>
    <Menu.Item>Option 1</Menu.Item>
    <Menu.Item>Option 2</Menu.Item>
    <Menu.Item>Option 3</Menu.Item>
    <Menu.Item>Option 4</Menu.Item>
  </Menu>
)

export default class Demo3 extends React.Component {
  state = {
    visible: false
  }

  toggleVisible = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  onVisibleChange = visible => {
    this.setState({
      visible
    })
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <Button onClick={this.toggleVisible} ref="button">Toggle Overlay</Button>
        </div>
        <Dropdown trigger={<span>Hello dropdown</span>}
          triggerType="click"
          visible={this.state.visible}
          onVisibleChange={this.onVisibleChange}
          safeNode={() => this.refs.button}>
          {menu}
        </Dropdown>
      </div>
    )
  }
}
