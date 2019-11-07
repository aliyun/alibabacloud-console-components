import React from 'react'
import { Overlay } from '@alicloud/console-components'

export default class Demo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  onClick = () => {
    this.setState({
      visible: true
    })
  }

  onClose = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick} ref={ref => {
          this.btn = ref;
        }}>
          Open
        </button>
        <Overlay visible={this.state.visible}
          safeNode={() => this.btn}
          align="cc cc"
          hasMask
          disableScroll
          onRequestClose={this.onClose}>
          <span className="overlay-demo">
            Hello World From Overlay!
          </span>
        </Overlay>
      </div>
    )
  }
}