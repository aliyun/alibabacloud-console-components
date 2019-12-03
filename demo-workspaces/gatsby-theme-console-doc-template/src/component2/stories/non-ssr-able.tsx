import React from 'react'
import { ConsoleBarChart } from '@alicloud/console-chart'

const data = [
  {
    name: 'Students of course',
    data: [
      ['Chinese', 20],
      ['English', 10],
      ['Math', 15],
    ],
  },
]
const config = {
  padding: 20,
}

class NonSSRAbleDemo extends React.Component {
  state = {
    config,
  }

  render() {
    return (
      <ConsoleBarChart data={data} config={this.state.config} height={300} />
    )
  }
}

export default NonSSRAbleDemo
