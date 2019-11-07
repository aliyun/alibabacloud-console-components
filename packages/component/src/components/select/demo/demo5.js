import React, { Component }from 'react'
import { Select, Button } from '@alicloud/console-components'
import './demo5.less'

const provinceData = ['Zhejiang', 'Hubei', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Hubei: ['Wuhan', 'Yichang', 'Jingzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
}

export default class Demo5 extends Component {
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
    this.setState({data, province: value, disabled: !data})
  }

  handleCityChange(value) {
    this.setState({city: value})
    console.log(this.state.province, value)
  }

  render() {
    const {data, disabled, province, city} = this.state
    return (
      <div className="select-demo5-container">
        <Select placeholder="Select Province" dataSource={provinceData} value={province} onChange={this.handleProvinceChange} />
        <Select placeholder="Select City" dataSource={data} value={city} onChange={this.handleCityChange} disabled={disabled}/>
      </div>
    )
  }
}