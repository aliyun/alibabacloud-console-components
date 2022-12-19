/**
 * @title 固定宽度滑动
 * @description 默认双滑块(`slider` 为 `double`)，且指定 `defaultValue`为区间值下可用。范围不可被改变，拖动所选区域改变始末滑块位置。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Range } from '@alicloudfe/components'

const style = {
  marginBottom: '15px'
}

const styleX3 = {
  marginBottom: '45px'
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: [10, 300]
    }
  }

  //Controlled. onChange will be triggered when startValue isn't equal to endValue after sliding
  onChange(value) {
    console.log('onChange value:', value)
    this.setState({ value })
  }

  // This callback will be triggered when startValue and endValue aren't equal after mousedown/mousemove. You shouldn't call setState here.
  onProcess(value) {
    // this.setState({value});
    console.log('onProcess: ', value)
  }

  render() {
    return (
      <div style={{ width: '400px', margin: '50px' }}>
        <Range fixedWidth defaultValue={[20, 40]} style={style} />
        <h4>with tooltipVisible</h4>
        <Range
          tooltipVisible
          fixedWidth
          defaultValue={[70, 90]}
          style={styleX3}
        />
        <h4>with marks</h4>
        <Range
          fixedWidth
          step={10}
          defaultValue={[20, 40]}
          marks={10}
          style={styleX3}
        />
        <h4>with 0.01 step</h4>
        <Range
          fixedWidth
          defaultValue={[0.6, 0.7]}
          min={0.5}
          max={1}
          step={0.01}
        />
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
