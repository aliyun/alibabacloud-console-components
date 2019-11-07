import React from 'react'
import { Button, Dialog } from '@alicloud/console-components'

export default class Demo3 extends React.Component {
  state = {
    visible: false
  }

  onOpen = () => {
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
        <Button onClick={this.onOpen} type="primary">
          Open dialog
        </Button>
        <Dialog title="Welcome to Alibaba.com"
          footer={<Button warning type="primary" onClick={this.onClose}>Customize footer</Button>}
          visible={this.state.visible}
          onOk={this.onClose}
          onCancel={this.onClose}
          onClose={this.onClose}>
          Start your business here by searching a popular product
        </Dialog>
      </div>
    )
  }
}