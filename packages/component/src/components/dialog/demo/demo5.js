import React from 'react'
import { Switch, Button, Dialog } from '@alicloud/console-components'

const largeContent = new Array(30).fill(
 <p>Start your business here by searching a popular product</p>
)

export default class Demo5 extends React.Component {
  state = {
    visible: false,
    isFullScreen: false
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

  toggleIsFullScreen = () => {
    this.setState({
      isFullScreen: !this.state.isFullScreen
    })
  }

  render() {
	  const newLargeContent=largeContent.map((content,index) => 
      <div key={index}>{content}</div>
    )
    const { visible, isFullScreen } = this.state

    return (
      <div>
        <div style={{ display: 'block', marginBottom: '10px' }}>
          When the height of the dialog exceeds the viewport height of the browser, whether to show the scroll bar:
        </div>
        <Switch style={{ display: 'block', marginBottom: '10px' }} checked={isFullScreen} onChange={this.toggleIsFullScreen} />
        <Button onClick={this.onOpen} type="primary">
          Open dialog
        </Button>
        <Dialog title="Welcome to Alibaba.com"
          visible={visible}
          isFullScreen={isFullScreen}
          onOk={this.onClose}
          onCancel={this.onClose}
          onClose={this.onClose}>
          {newLargeContent}
        </Dialog>
      </div>
    )
  }
}