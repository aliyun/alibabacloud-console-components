import React from 'react'
import { Overlay } from '@alicloud/console-components'
import './demo1.less'

export default class Demo1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  onClick = () => {
    this.setState({
      visible: !this.state.visible
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
          Toggle visible
        </button>
        <Overlay visible={this.state.visible}
          target={() => this.btn}
          safeNode={() => this.btn}
          onRequestClose={this.onClose}>
          <span className="overlay-demo">
            Hello World From Overlay!
          </span>
        </Overlay>
      </div>
    )
  }
}
