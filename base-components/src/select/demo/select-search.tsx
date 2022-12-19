/**
 * @title 远程搜索
 * @description 使用 `showSearch` 显示搜索框，如果需要动态更新 dataSource，需要关闭 filterLocal
 */

import * as React from 'react'
import styled from 'styled-components'

import { Select } from '@alicloudfe/components'
import jsonp from 'jsonp'

let timestamp = Date.now()

class Demo extends React.Component {
  state = {
    dataSource: []
  }

  handleSearch = (value) => {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout)
    }
    this.searchTimeout = setTimeout(() => {
      // eslint-disable-next-line handle-callback-err
      value
        ? jsonp(
            `https://suggest.taobao.com/sug?code=utf-8&q=${value}`,
            (err, data) => {
              const dataSource = data.result.map((item) => ({
                label: item[0],
                value: (timestamp++).toString(36)
              }))
              this.setState({ dataSource })
            }
          )
        : this.setState({ dataSource: [] })
    }, 100)
  }

  render() {
    return (
      <Select
        showSearch
        placeholder="input to search"
        filterLocal={false}
        dataSource={this.state.dataSource}
        onSearch={this.handleSearch}
        style={{ width: 200 }}
      />
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
