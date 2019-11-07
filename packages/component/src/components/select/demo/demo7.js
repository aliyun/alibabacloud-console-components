import React, { Component }from 'react'
import { Select, Button } from '@alicloud/console-components'
import './demo7.less'

class Emp {
  constructor(props) {
    this.name = props.name
    this.age = props.age
    this.gender = props.gender
  }
  // rewrite toString，return a unique key
  toString() {
    return this.name
  }
}

const dataSource = [
  {value: new Emp({name: 'Lilith', age: 22, gender: 'F'})},
  {value: new Emp({name: 'Tom Cat', age: 28, gender: 'M'})},
  {value: new Emp({name: 'Jim Green', age: 18, gender: 'M'})},
  {value: new Emp({name: 'Monkey King', age: 999, gender: 'M'})},
]

const handleChange = value => {
  console.log('handleChange: ', value)
}

const valueRender = item => {
  const v = item.value
  return `${v.name} / ${v.gender} / ${v.age}`
}

const Demo7 = () => (
  <div className="select-demo7-container">
    <Select
      mode="multiple"
      placeholder="custom value"
      valueRender={valueRender}
      dataSource={dataSource}
      onChange={handleChange} />
    </div>
)

export default Demo7
