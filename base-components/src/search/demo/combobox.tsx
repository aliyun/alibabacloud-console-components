/**
 * @title 联想
 * @description
 */

import * as React from 'react'
import styled from 'styled-components'

import { Search } from '@alicloudfe/components'

const dataSource = [
  {
    label: 'Recent',
    value: 'Recent'
  },
  {
    label: 'dress',
    value: 'dress'
  },
  {
    label: 'sunglasses',
    value: 'sunglasses'
  },
  {
    label: 't-shirt',
    value: 't-shirt'
  }
]

class App extends React.Component {
  onSearch(value, filterValue) {
    console.log('onSearch', value, filterValue)
  }

  onChange(value, type, e) {
    console.log('onChange', value, type, e)
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <div>
        auto highlight first item
        <br />
        <Search
          dataSource={dataSource}
          onChange={this.onChange.bind(this)}
          onSearch={this.onSearch.bind(this)}
        />
        <br />
        <br />
        no default highlight item, should use UP/DOWN
        <br />
        <Search
          autoHighlightFirstItem={false}
          dataSource={dataSource}
          onChange={this.onChange.bind(this)}
          onSearch={this.onSearch.bind(this)}
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
