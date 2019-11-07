import React from 'react'
import { Button, Dialog } from '@alicloud/console-components'

export default class Demo1 extends React.Component {
  state = {
    visible: false
  }

  onOpen = () => {
    this.setState({
      visible: true
    })
  }

  onClose = reason => {
    console.log(reason)

    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.onOpen} type="primary">
          Open dialog
        </Button>
        <Dialog title="Welcome to Alibaba.com"
          visible={this.state.visible}
          onOk={this.onClose.bind(this, 'okClick')}
          onCancel={this.onClose.bind(this, 'cancelClick')}
          onClose={this.onClose}>
          Start your business here by searching a popular product
        </Dialog>
      </div>
    )
  }
}