/**
 * @title 默认展开值
 * @description 通过`defaultExpandedValue`设置默认展开值用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { CascaderSelect } from '@alicloudfe/components'
import 'whatwg-fetch'

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        {
          value: '2973',
          label: '陕西',
          children: [
            {
              value: '2974',
              label: '西安',
              children: [
                { value: '2975', label: '西安市', isLeaf: true },
                { value: '2976', label: '高陵县', isLeaf: true }
              ]
            },
            {
              value: '2980',
              label: '铜川',
              children: [
                { value: '2981', label: '铜川市', isLeaf: true },
                { value: '2982', label: '宜君县', isLeaf: true }
              ]
            }
          ]
        }
      ]
    }
  }

  handleChange = (value, data, extra) => {
    console.log(value, data, extra)
  }

  render() {
    return (
      <CascaderSelect
        defaultExpandedValue={['2973', '2980', '2981']}
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
const Style = styled.div``
