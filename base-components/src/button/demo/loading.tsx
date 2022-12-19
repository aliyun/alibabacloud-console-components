/**
 * @title 加载状态
 * @description 通过设置 `loading` 属性即可以让按钮处于加载状态。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Icon, Box } from '@alicloudfe/components'

class Demo extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      loading: false
    }
  }

  setLoading = () => {
    this.setState({ loading: true })
  }

  render() {
    return (
      <Box direction="row" spacing={20}>
        <Button type="secondary" loading>
          Loading
        </Button>
        <Button
          type="primary"
          loading={this.state.loading}
          onClick={this.setLoading}
        >
          Click to loading
        </Button>
      </Box>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
