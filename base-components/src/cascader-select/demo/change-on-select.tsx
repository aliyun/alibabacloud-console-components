/**
 * @title 选中即发生改变
 * @description 通过`changeOnSelect`设置是否选中即发生改变,允许只选中父节点，该属性仅在单选模式下有效。
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
          changeOnSelect
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
