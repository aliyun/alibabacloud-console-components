import React from 'react'
import { Range, NumberPicker, Grid, Icon } from '@alicloud/console-components'
import'./demo5.less'

const {Row, Col} = Grid

export default class Demo5 extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      valueInt: 3,
      valueDec: 0.05,
      valueIcon: 1,
      preIconClass: '',
      afterIconClass: ''
    }
  }

  onChangeInt(value) {
    console.log(value);
    this.setState(Object.assign({}, this.state, {
      valueInt: value
    }))
  }

  onChangeDec(value) {
    this.setState(Object.assign({}, this.state, {
      valueDec: value
    }))
  }

  onIconRangeProcess(value) {
    const mid = 50;
    this.setState(Object.assign({}, this.state, {
      valueIcon: value,
      preIconClass: value < mid ? 'myicon-highlight' : '',
      afterIconClass: value >= mid ? 'myicon-highlight' : ''
    }))
  }

  render() {
    return (
      <div style={{width: '400px', margin: '50px'}}>
        <h2>Used with numberPicker</h2>
        <Row>
          <Col span="12" style={{marginTop: '10px'}}>
            <Range value={this.state.valueInt} min={0} max={20} step={1}
              onChange={this.onChangeInt.bind(this)} />
          </Col>
          <Col span="12">
            <NumberPicker value={this.state.valueInt} min={0} max={1024} step={1}
              onChange={this.onChangeInt.bind(this)} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col span="12" style={{marginTop: '10px'}}>
            <Range value={this.state.valueDec} min={0} max={1} step={0.01}
              onChange={this.onChangeDec.bind(this)} />
          </Col>
          <Col span="12">
            <NumberPicker value={this.state.valueDec} min={0} max={1} step={0.01}
              onChange={this.onChangeDec.bind(this)} />
          </Col>
        </Row>
        <h2>Used with Icon</h2>

        <div className="iconWrapper">
          <Icon className={`myicon ${this.state.preIconClass}`} type="cry" />
          <Range min={1} max={100} onChange={this.onIconRangeProcess.bind(this)}
            value={this.state.valueIcon} />
          <Icon className={`myicon ${this.state.afterIconClass}`} type="smile" />
        </div>
      </div>
    )
  }
}