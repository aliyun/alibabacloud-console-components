/**
 * @title 自定义样式
 * @description 可以通过`listStyle`，`listClassName`来定制组件宽高，通过`itemRender`自定字节。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Cascader } from '@alicloudfe/components'

const dataSource = [
  {
    value: '2973',
    label: '陕西',
    children: [
      {
        value: '2974',
        label: '西安',
        children: [
          { value: '2975', label: '西安市' },
          { value: '2976', label: '高陵县' }
        ]
      },
      {
        value: '2980',
        label: '铜川',
        children: [
          { value: '2981', label: '铜川市' },
          { value: '2982', label: '宜君县' }
        ]
      }
    ]
  },
  {
    value: '3371',
    label: '新疆',
    children: [
      {
        value: '3430',
        label: '巴音郭楞蒙古自治州',
        children: [
          { value: '3431', label: '库尔勒市' },
          { value: '3432', label: '和静县' }
        ]
      }
    ]
  }
]

function itemRender(itemData) {
  return `${itemData.label}(${itemData.value})`
}

export default function DemoComponent() {
  const content = (
    <Cascader
      defaultValue="3439"
      defaultExpandedValue={['3371', '3430']}
      listStyle={{ width: '180px', height: '256px' }}
      dataSource={dataSource}
      itemRender={itemRender}
    />
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
