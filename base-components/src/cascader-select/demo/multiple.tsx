/**
 * @title 多选
 * @description 设置`multiple`为`true`，开启多选，此时节点可勾选。
 */

import * as React from 'react'
import styled from 'styled-components'

import { CascaderSelect } from '@alicloudfe/components'
import 'whatwg-fetch'

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data })
      })
      .catch((e) => console.log(e))
  }

  handleChange(value, data, extra) {
    console.log(value, data, extra)
  }

  render() {
    return (
      <CascaderSelect
        multiple
        dataSource={this.state.data}
        onChange={this.handleChange}
      />
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .cascader-value {
    width: 500px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`
