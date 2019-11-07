import React from 'react'
import { Button, Balloon } from '@alicloud/console-components'

export default class Demo5 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  // triggered every time visible becomes false
  onClose() {
    console.log('onClose doing!')
  }

  onClick() {
    this.setState({visible: true})
    }

  render() {
    const visibleTrigger = <Button onClick={this.onClick.bind(this)} type="primary">click to pupup the card</Button>;
    const content = (<div>content</div>);

    return (
      <div style={{marginBottom: '100px'}}>
        <Balloon trigger={visibleTrigger} triggerType="click"
          visible={this.state.visible}
          onClose={this.onClose.bind(this)} >
          {content}
        </Balloon>
      </div>
    )
  }
}