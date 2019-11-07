import React from 'react'
import { Loading, Button } from '@alicloud/console-components';

export default class Demo4 extends React.Component {

  constructor(props, context) {
    super(props, context)
      this.state = {
        visible: false
      }
  }

  onClick() {
    this.setState({visible: !this.state.visible})
  }

  onClose = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <span>
        <Loading 
          visible={this.state.visible} 
          fullScreen shape="fusion-reactor"
          onVisibleChange={this.onClose.bind(this)}>
          <Button onClick={this.onClick.bind(this)} >Full Screen</Button>
        </Loading>
      </span>
    )
  }
}
