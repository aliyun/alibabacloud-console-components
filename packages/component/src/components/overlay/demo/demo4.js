import React from 'react'
import { Overlay } from '@alicloud/console-components'

const { Popup } = Overlay

export default class Demo4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  onVisibleChange = visible => {
    this.setState({
      visible
    })
  }

  render() {
    return (
      <Popup trigger={<button>Open</button>}
        triggerType="click"
        visible={this.state.visible}
        onVisibleChange={this.onVisibleChange}>
        <span className="overlay-demo">
          Hello World From Popup!
        </span>
      </Popup>
    )
  }
}