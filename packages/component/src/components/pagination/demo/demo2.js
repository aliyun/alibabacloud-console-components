import React from 'react'
import { Pagination } from '@alicloud/console-components'

export default class Demo2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 2
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(current) {
    this.setState({
      current
    })
  }

  render() {
    return (
      <Pagination current={this.state.current} onChange={this.handleChange} />
    )
  }
}

