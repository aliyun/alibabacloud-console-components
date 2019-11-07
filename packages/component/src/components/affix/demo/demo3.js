import React from 'react'
import { Affix, Button } from '@alicloud/console-components'
import './demo3.less'

export default class Demo3 extends React.Component {

  _containerRefHandler(ref) {
    this.container = ref
  }

  render() {
    return (
      <div className="custom-affix-container" ref={this._containerRefHandler.bind(this)}>
        <div className="a-wrapper">
          <Affix container={() => this.container} offsetTop={0}>
            <Button type="secondary">Affixed Button</Button>
          </Affix>
        </div>
      </div>
    )
  }
}

