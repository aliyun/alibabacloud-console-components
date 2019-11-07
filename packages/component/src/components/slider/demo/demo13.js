import React from 'react'
import { Slider, Select } from '@alicloud/console-components'

const { Option } = Select

export default class Demo13 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      autoplay: false,
      autoplaySpeed: 1000,
    }
  }

  onSelectAutoplay(value) {
    this.setState({ autoplay: value })
  }

  onSelectAutoplaySpeed(value) {
    this.setState({ autoplaySpeed: value })
  }

  render() {
    return (
      <div>
        <Select placeholder="Autoplay" onChange={this.onSelectAutoplay.bind(this)}>
          <Option value>True</Option>
          <Option value={false}>False</Option>
        </Select>
        &nbsp;&nbsp;
        <Select placeholder="Autoplay Speed" onChange={this.onSelectAutoplaySpeed.bind(this)}>
          <Option value={1000}>1 second</Option>
          <Option value={2000}>2 seconds</Option>
          <Option value={3000}>3 seconds</Option>
        </Select>
        <br />
        <br />
        <Slider autoplay={this.state.autoplay} autoplaySpeed={this.state.autoplaySpeed}>
          <div><h3 className="h3">1</h3></div>
          <div><h3 className="h3">2</h3></div>
          <div><h3 className="h3">3</h3></div>
          <div><h3 className="h3">4</h3></div>
        </Slider>
      </div>
    )
  }
}