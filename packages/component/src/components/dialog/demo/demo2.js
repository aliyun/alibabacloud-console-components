import React from 'react'
import { Button, Dialog, Radio } from '@alicloud/console-components'
import'./demo2.less'

export default class Demo2 extends React.Component {
  state = {
    visible: false,
    footerActions: ['ok', 'cancel'],
    footerAlign: 'right'
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

  toggleFooterActions = footerActionsStr => {
    this.setState({
      footerActions: footerActionsStr.split(',')
    })
  }

  toggleFooterAlign = footerAlign => {
    this.setState({
      footerAlign
    })
  }

  render() {
    const { visible, footerActions, footerAlign } = this.state

    return (
      <div>
        <Button onClick={this.onOpen} type="primary">
          Open dialog
        </Button>
        <Dialog title="Customize buttons of footer"
          visible={visible}
          footerActions={footerActions}
          footerAlign={footerAlign}
          onOk={this.onClose}
          onCancel={this.onClose}
          onClose={this.onClose}>
          <div className="demo-content">
            <Radio.Group className="demo-radio-group" shape="button" value={footerActions.join(',')} onChange={this.toggleFooterActions}>
              <Radio value="ok,cancel">ok is left</Radio>
              <Radio value="cancel,ok">ok is right</Radio>
              <Radio value="ok">only ok</Radio>
              <Radio value="cancel">only cancel</Radio>
            </Radio.Group>
            <Radio.Group className="demo-radio-group" shape="button" value={footerAlign} onChange={this.toggleFooterAlign}>
              <Radio value="left">left</Radio>
              <Radio value="center">center</Radio>
              <Radio value="right">right</Radio>
            </Radio.Group>
          </div>
        </Dialog>
      </div>
    )
  }
}
