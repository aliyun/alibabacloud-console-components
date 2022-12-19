/**
 * @title 自定义 value 展示
 * @description 自定义 value 展示
 */

import * as React from 'react'
import styled from 'styled-components'

import { Select, Radio } from '@alicloudfe/components'

class DemoWithFillProps extends React.Component {
  state = {
    value: '',
    fillProps: 'value',
    placeholder: 'Fill with value'
  }
  handleCtrlChange = (fillProps) => {
    this.setState({
      fillProps,
      value: '',
      placeholder: `Fill with ${fillProps}`
    })
  }

  handleChange = (value) => {
    this.setState({ value })
  }

  render() {
    const dataSource = [
      { value: 'Hang Meimei', label: '韩梅梅' },
      { value: 'Gao Hui', label: '高辉' },
      { value: 'Zhang San', label: '张三' },
      { value: 'Li Si', label: '李四' },
      { value: 'Wang Wu', label: '王五' },
      { value: 'Sun Yang', label: '孙杨' }
    ]

    return (
      <div style={{ marginBottom: 20 }}>
        <Radio.Group
          style={{ marginRight: 10 }}
          shape="button"
          value={this.state.fillProps}
          onChange={this.handleCtrlChange}
        >
          <Radio value="value">value</Radio>
          <Radio value="label">label</Radio>
        </Radio.Group>
        <Select
          placeholder={this.state.placeholder}
          value={this.state.value}
          fillProps={this.state.fillProps}
          style={{ width: 300 }}
          onChange={this.handleChange}
          dataSource={dataSource}
        />
      </div>
    )
  }
}

const DemoWithValueRender = () => {
  const dataSource = [
    { value: 'Lilith', age: 22, gender: 'F' },
    { value: 'Tom Cat', age: 28, gender: 'M' },
    { value: 'Jim Green', age: 18, gender: 'M' },
    { value: 'Monkey King', age: 999, gender: 'M' }
  ]

  const valueRender = (v) => {
    return `${v.value} / ${v.gender} / ${v.age}`
  }

  return (
    <Select
      mode="multiple"
      placeholder="Custom with valueRender"
      valueRender={valueRender}
      dataSource={dataSource}
    />
  )
}

export default function DemoComponent() {
  const content = (
    <div>
      <DemoWithFillProps />
      <DemoWithValueRender />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
