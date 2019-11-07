import React from 'react'
import { Animate } from '@alicloud/console-components'
import './demo1.less'

export default class Demo1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: true }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    return (
      <div className="animate-demo1-container">
        <button onClick={this.handleToggle}>Toggle visible</button>
        <Animate animation={{
          enter: 'my-zoom-in',
          leave: 'my-zoom-out'
        }}>
        {this.state.visible ?
          <div className="basic-demo">Next Animate</div> :
          null}
        </Animate>
      </div>
    )
  }
}
