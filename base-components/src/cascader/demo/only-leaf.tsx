/**
 * @title 设置是否只能选择叶子项
 * @description 单选的时候通过`canOnlySelectLeaf`属性设置是否仅叶子节点可选中；多选的时候通过`canOnlyCheckLeaf`属性设置是否仅叶子节点可勾选。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Cascader } from '@alicloudfe/components'
import 'whatwg-fetch'

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: null
    }
  }

  componentDidMount() {
    fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
      .then((response) => response.json())
      .then((data) => this.setState({ data, value: '2975' }))
      .catch((e) => console.log(e))
  }

  handleChange = (value, data, extra) => {
    console.log(value, data, extra)
  }

  render() {
    return (
      <div className="control-single-demo">
        <Cascader
          canOnlySelectLeaf
          dataSource={this.state.data}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <Cascader
          multiple
          canOnlyCheckLeaf
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
  .control-single-demo > div:not(last-child) {
    margin-right: 20px;
  }
`
