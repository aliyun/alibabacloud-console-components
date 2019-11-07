import React, { Component } from 'react'
import { Transfer } from '@alicloud/console-components'

const dataSource = (() => {
  const dataSource = [];

  for (let i = 0; i < 10; i++) {
    dataSource.push({
      label: `content${i}`,
      value: `${i}`,
      disabled: i % 4 === 0
    })
  }

  return dataSource;
})()

export default class Demo5 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ['3']
    }
  }

  handleChange = (value, data, extra) => {
    console.log(value, data, extra);

    this.setState({
      value
    })
  }

  render() {
    return (
      <Transfer
        value={this.state.value}
        dataSource={dataSource}
        defaultLeftChecked={['1']}
        onChange={this.handleChange}
        titles={['Title', 'Title']}
      />
    )
  }
}
