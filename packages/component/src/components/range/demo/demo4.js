import React from 'react'
import { Range } from '@alicloud/console-components'

export default class Demo4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 128,
      doubleValue: [10, 30]
    }
  }

    //Controlled. onChange will be triggered when startValue isn't equal to endValue after sliding
  onChange(value) {
    console.log('onChange value:', value)
    this.setState({value})
  }

    // This callback will be triggered when startValue and endValue aren't equal after mousedown/mousemove. You shouldn't call setState here.
  onProcess(value) {
    this.setState({value})
    console.log('onProcess: ', value)
  }

  onChangeDouble(value) {
    this.setState({
      doubleValue: value
    })
  }
  render() {
    return (
      <div style={{width: '400px', margin: '50px'}}>
        <p>range 0 ~ 1024</p>
        <div style={{width: '400px', marginTop: '50px'}}>
          <Range value={this.state.value} onChange={this.onChange.bind(this)}
             onProcess={this.onProcess.bind(this)}
             min={0} max={1024} marks={[0, 1024]} />
        </div>
        <p>with value and without onChange</p>
        <div style={{width: '400px', marginTop: '50px'}}>
          <Range defaultValue={256} value={300}
            onProcess={this.onProcess.bind(this)}
            min={0} max={1024} marks={[0, 1024]} />
        </div>
        <p>double slider controlled</p>
          <div style={{width: '400px', marginTop: '50px'}}>
            <Range slider="double" value={this.state.doubleValue} onChange={this.onChangeDouble.bind(this)}
              onProcess={this.onProcess.bind(this)}
              min={0} max={1024} marks={[0, 1024]} />
          </div>
      </div>
    )
  }
}