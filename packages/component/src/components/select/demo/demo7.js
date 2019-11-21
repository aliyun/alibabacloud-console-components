import React from 'react'
import { Select } from '@alicloud/console-components'
import styled from 'styled-components'

class Emp {
  constructor(props) {
    this.name = props.name
    this.age = props.age
    this.gender = props.gender
  }

  toString() {
    return this.name
  }
}

const dataSource = [
  { value: new Emp({ name: 'Lilith', age: 22, gender: 'F' }) },
  { value: new Emp({ name: 'Tom Cat', age: 28, gender: 'M' }) },
  { value: new Emp({ name: 'Jim Green', age: 18, gender: 'M' }) },
  { value: new Emp({ name: 'Monkey King', age: 999, gender: 'M' }) },
]

const handleChange = value => {
  console.log('handleChange: ', value)
}

const valueRender = item => {
  const v = item.value
  return `${v.name} / ${v.gender} / ${v.age}`
}

const SWrapper = styled.div`
  padding: 16px;
  background-color: #f8f8f8;
`

const Demo7 = () => (
  <SWrapper>
    <Select
      mode="multiple"
      placeholder="custom value"
      valueRender={valueRender}
      dataSource={dataSource}
      onChange={handleChange}
    />
  </SWrapper>
)

export default Demo7
