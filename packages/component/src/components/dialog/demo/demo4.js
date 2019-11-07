import React from 'react'
import { Switch, Button, Dialog } from '@alicloud/console-components'

const shortContent = <p>Start your business here by searching a popular product</p>
const longContent = [
  <p key="0">Start your business here by searching a popular product</p>,
  <p key="1">Start your business here by searching a popular product</p>,
  <p key="2">Start your business here by searching a popular product</p>,
  <p key="3">Start your business here by searching a popular product</p>
]

export default class Demo4 extends React.Component {
  state = {
    visible: false,
    short: true,
    shouldUpdatePosition: true
  }

  onOpen = () => {
    this.setState({
      visible: true,
      short: true
    })
  }

  onClose = () => {
    this.setState({
      visible: false
    })
  }

  toggleShouldUpdatePosition = () => {
    this.setState({
      shouldUpdatePosition: !this.state.shouldUpdatePosition
    })
  }

  modifyContent = () => {
    this.setState({
      short: !this.state.short
    })
  }

  render() {
    const { visible, short, shouldUpdatePosition } = this.state

    return (
      <div>
        <div style={{ display: 'block', marginBottom: '10px' }}>
          Whether to update the dialog position when the dialog height changes:
        </div>
        <Switch style={{ display: 'block', marginBottom: '10px' }} checked={shouldUpdatePosition} onChange={this.toggleShouldUpdatePosition} />
        <Button onClick={this.onOpen} type="primary">
          Open dialog
        </Button>
        <Dialog title="Welcome to Alibaba.com"
          visible={visible}
          onOk={this.onClose.bind(this, 'okClick')}
          onCancel={this.onClose.bind(this, 'cancelClick')}
          onClose={this.onClose}
          shouldUpdatePosition={shouldUpdatePosition}>
          <Button type="primary" onClick={this.modifyContent}>
            Change content
          </Button>
          {short ? shortContent : longContent}
        </Dialog>
      </div>
    )
  }
}