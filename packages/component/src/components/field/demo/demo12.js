import React from 'react'
import { Button, Input, Table, Field } from '@alicloud/console-components'

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.idx = 3

    this.field = new Field(this, {
      parseName: true,
      values: {
        name: [0, 1, 2, 3].map(i => {
          return { id: i, input: i }
        }),
      },
    })
  }

  getValues = () => {
    const values = this.field.getValues()
    console.log(values)
  }

  addItem(index) {
    ++this.idx
    this.field.addArrayValue('name', index, { id: this.idx, input: this.idx })
  }

  removeItem(index) {
    this.field.deleteArrayValue('name', index)
  }

  input = (value, index) => (
    <Input {...this.field.init(`name.${index}.input`)} />
  )

  op = (value, index) => {
    return (
      <span>
        <Button type="primary" onClick={this.addItem.bind(this, index + 1)}>
          add
        </Button>
        <Button
          warning
          onClick={this.removeItem.bind(this, index)}
          style={{ marginLeft: 4 }}
        >
          delete
        </Button>
      </span>
    )
  }

  render() {
    const dataSource = this.field.getValue('name')
    return (
      <div>
        <Table dataSource={dataSource}>
          <Table.Column title="id" dataIndex="id" />
          <Table.Column title="input" dataIndex="id" cell={this.input} />
          <Table.Column title="operation" cell={this.op} width={180} />
        </Table>
        <pre style={{ marginTop: 8 }}>
          {JSON.stringify(dataSource, null, 2)}
        </pre>
      </div>
    )
  }
}

export const demoMeta = {
  zhName: `动态表格`,
  zhDesc:
    '通过 `deleteArrayValue/addArrayValue` 可以往数组格式的数据里面 删除/添加 数据, 并且自动订正其他 name 的 偏移问题',
}

export default Demo
