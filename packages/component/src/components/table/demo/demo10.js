import React, { useState } from 'react'
import { Table, Button } from '@alicloud/console-components'

const dataSource = length => {
  const result = []
  for (let i = 0; i < length; i++) {
    result.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
      },
      id: 100306660940 + i,
      time: 2000 + i,
    })
  }
  return result
}

class Demo10 extends React.Component {
  state = {
    sticky: false,
    lock: false,
    dataSource: dataSource(50),
  }

  onSwitch(tag) {
    const props = {}
    switch (tag) {
      case 'sticky':
        props.sticky = true
        break
      case 'lock':
        props.lock = true
        break
      case 'dataSource':
        props.dataSource =
          this.state.dataSource.length > 0 ? [] : dataSource(50)
        break
      default:
        break
    }

    this.setState(props)
  }

  render() {
    return (
      <div>
        <p>
          <Button onClick={this.onSwitch.bind(this, 'sticky')}>
            enable sticky
          </Button>{' '}
          &nbsp;
          <Button onClick={this.onSwitch.bind(this, 'lock')}>
            enable lock
          </Button>{' '}
          &nbsp;
          <Button onClick={this.onSwitch.bind(this, 'dataSource')}>
            toggle dataSource
          </Button>
        </p>
        <Table
          dataSource={this.state.dataSource}
          fixedHeader
          stickyHeader={this.state.sticky}
        >
          <Table.Column
            title="Id"
            dataIndex="id"
            width={200}
            lock={this.state.lock}
          />
          <Table.Column title="Title" dataIndex="title.name" width={200} />
          <Table.Column title="Time" dataIndex="time" width={200} />
        </Table>
      </div>
    )
  }
}

export default Demo10

export const demoMeta = {
  zhName: `固定表头`,
  zhDesc: `表格可以固定表头,支持sticky方式`,
}
