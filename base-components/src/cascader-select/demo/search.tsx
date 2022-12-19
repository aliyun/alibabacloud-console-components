/**
 * @title 搜索
 * @description 通过设置`showSearch`为`true`，可以开启组件的搜索功能, 通过`filter`属性自定义搜索逻辑。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Checkbox, CascaderSelect } from '@alicloudfe/components'
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
      .then((data) => this.setState({ data, value: ['2975'] }))
      .catch((e) => console.log(e))
  }

  handleChange = (value, data, extra) => {
    console.log(value, data, extra)
  }

  filter(searchValue, path) {
    return (
      searchValue === '' ||
      path
        .map(({ value, label }) => `${value}${label}`)
        .join('')
        .match(searchValue)
    )
  }

  render() {
    return (
      <div className="search-demo">
        <CascaderSelect
          showSearch
          style={{ width: '240px' }}
          dataSource={this.state.data}
          placeholder="搜索名字"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <CascaderSelect
          showSearch
          filter={this.filter}
          style={{ width: '240px' }}
          multiple={this.state.multiple}
          dataSource={this.state.data}
          onChange={this.handleChange}
          placeholder="搜索名字或id值"
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
  .search-demo .multiple-check {
    display: block;
    margin-bottom: 10px;
  }

  .search-demo .multiple-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
  }
`
