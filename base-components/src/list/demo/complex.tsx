/**
 * @title 图文列表
 * @description 图文列表展示。
 */

import * as React from 'react'
import styled from 'styled-components'

import { List, Avatar, Box, Button, Divider } from '@alicloudfe/components'

const data = [
  {
    title: '构建一套产品化设计系统',
    description:
      '随着互联网行业的聚变式发展，在电商业务从“信息透出” 到 “在线交易” 的过程中，网站 UI 构建也经历了“体验一致性”、“设计效率”、“UI系统构建/应用效率”、“多端适配” …',
    author: '谢瑶 3 小时前更新',
    img: 'https://img.alicdn.com/tfs/TB1R5fio4v1gK0jSZFFXXb0sXXa-322-216.png'
  },
  {
    title: '构建一套产品化设计系统',
    description:
      '随着互联网行业的聚变式发展，在电商业务从“信息透出” 到 “在线交易” 的过程中，网站 UI 构建也经历了“体验一致性”、“设计效率”、“UI系统构建/应用效率”、“多端适配” …',
    author: '谢瑶 3 小时前更新',
    img: 'https://img.alicdn.com/tfs/TB1R5fio4v1gK0jSZFFXXb0sXXa-322-216.png'
  },
  {
    title: '构建一套产品化设计系统',
    description:
      '随着互联网行业的聚变式发展，在电商业务从“信息透出” 到 “在线交易” 的过程中，网站 UI 构建也经历了“体验一致性”、“设计效率”、“UI系统构建/应用效率”、“多端适配” …',
    author: '谢瑶 3 小时前更新',
    img: 'https://img.alicdn.com/tfs/TB1R5fio4v1gK0jSZFFXXb0sXXa-322-216.png'
  },
  {
    title: '构建一套产品化设计系统',
    description:
      '随着互联网行业的聚变式发展，在电商业务从“信息透出” 到 “在线交易” 的过程中，网站 UI 构建也经历了“体验一致性”、“设计效率”、“UI系统构建/应用效率”、“多端适配” …',
    author: '谢瑶 3 小时前更新',
    img: 'https://img.alicdn.com/tfs/TB1R5fio4v1gK0jSZFFXXb0sXXa-322-216.png'
  }
]
const actions = (
  <Box
    direction="row"
    align="center"
    style={{ whiteSpace: 'nowrap', height: '100%', paddingLeft: 100 }}
  >
    <Button text type="primary">
      编辑
    </Button>
    <Divider direction="ver" />
    <Button text type="primary">
      订阅
    </Button>
    <Divider direction="ver" />
    <Button text type="primary">
      删除
    </Button>
  </Box>
)

export default function DemoComponent() {
  const content = (
    <List
      dataSource={data}
      renderItem={(item, i) => (
        <List.Item
          key={i}
          extra={actions}
          media={<img width="161" height="108" src={item.img} />}
          title={item.title}
        >
          <p style={{ margin: '12px 0' }}>{item.description}</p>
          <div>{item.author}</div>
        </List.Item>
      )}
    />
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
