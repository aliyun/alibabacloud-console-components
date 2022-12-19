/**
 * @title 级联选择
 * @description 使用 Select 构建级联选择框
 */

import * as React from 'react'
import styled from 'styled-components'

import { Select } from '@alicloudfe/components'

const provinceData = ['Zhejiang', 'Hubei', 'Jiangsu']
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Hubei: ['Wuhan', 'Yichang', 'Jingzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
}

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      disabled: true
    }

    this.handleProvinceChange = this.handleProvinceChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
  }

  handleProvinceChange(value) {
    const data = cityData[value]
    this.setState({ data, province: value, city: '', disabled: !data })
  }

  handleCityChange(value) {
    this.setState({ city: value })
    console.log(this.state.province, value)
  }

  render() {
    const { data, disabled, province, city } = this.state

    return (
      <div>
        <Select
          placeholder="Select Province"
          dataSource={provinceData}
          value={province}
          onChange={this.handleProvinceChange}
          style={{ marginRight: 8 }}
        />
        <Select
          placeholder="Select City"
          dataSource={data}
          value={city}
          onChange={this.handleCityChange}
          disabled={disabled}
        />
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
