/**
 * @title 辅助输入获取远程数据
 * @description 使用动态数据填充 AutoComplete, 设置 `filterLocal` 为 false
 */

import * as React from 'react'
import styled from 'styled-components'

import { Select } from '@alicloudfe/components'
import jsonp from 'jsonp'

const { AutoComplete } = Select

class Demo extends React.Component {
  state = {
    dataSource: []
  }

  handleChange = (value) => {
    clearTimeout(this.searchTimeout)
    this.searchTimeout = setTimeout(() => {
      // eslint-disable-next-line handle-callback-err
      jsonp(
        `https://suggest.taobao.com/sug?code=utf-8&q=${value}`,
        (err, data) => {
          const dataSource = data.result.map((item) => item[0])
          this.setState({ dataSource })
        }
      )
    }, 100)
  }

  render() {
    return (
      <div className="demo-container">
        <AutoComplete
          filterLocal={false}
          placeholder="search from taobao"
          onChange={this.handleChange}
          dataSource={this.state.dataSource}
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
  .demo-container {
    background-color: #f8f8f8;
    padding: 16px;
  }
`
