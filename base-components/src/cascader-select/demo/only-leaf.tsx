/**
 * @title 设置是否只能选择叶子项
 * @description 通过`canOnlyCheckLeaf`属性设置是否仅叶子节点可勾选，仅在多选的时候有效。
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
        <CascaderSelect
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
