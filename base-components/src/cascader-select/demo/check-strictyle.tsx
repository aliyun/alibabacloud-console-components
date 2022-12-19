/**
 * @title 设置父子节点选中是否关联
 * @description 通过`checkStrictly`设置父子节点是否关联选中状态，仅在多选情况下有效。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Checkbox, CascaderSelect } from '@alicloudfe/components'
import 'whatwg-fetch'

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      checkStrictly: false
    }
  }

  componentDidMount() {
    fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
      .then((response) => response.json())
      .then((data) => this.setState({ data, value: ['2975'] }))
      .catch((e) => console.log(e))
  }

  handleCheck = () => {
    this.setState({
      checkStrictly: !this.state.checkStrictly
    })
  }

  handleChange = (value, data, extra) => {
    console.log(value, data, extra)
  }

  render() {
    return (
      <div className="control-multiple-demo">
        <label className="strictly-check">
          <Checkbox
            checked={this.state.checkStrictly}
            onChange={this.handleCheck}
          />
          <span className="strictly-text">Enable checkStrictly</span>
        </label>
        <CascaderSelect
          multiple
          checkStrictly={this.state.checkStrictly}
          dataSource={this.state.data}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .control-multiple-demo .strictly-check {
    display: block;
    margin-bottom: 10px;
  }

  .control-multiple-demo .strictly-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
  }
`
