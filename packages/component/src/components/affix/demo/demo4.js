import React from 'react'
import { Affix, Button } from '@alicloud/console-components'
import './demo4.less'

export default class Demo4 extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      affixed: false,
    }
  }

  onAffix = (affixed) => {
    this.setState({
      affixed,
    })
  }

  render() {
    const state = this.state

    return (
      <div className="affix-demo-wrapper">
        <Affix onAffix={this.onAffix}>
          <Button type="secondary">{state.affixed ? 'Affixed Button' : 'Unaffixed Button'}</Button>
        </Affix>
      </div>
    )
  }
}
