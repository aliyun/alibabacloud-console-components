/**
 * @title 自定义图标
 * @description 通过设置 `icons` 属性中的 `loading` 即可自定义加载的 `icon`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Icon } from '@alicloudfe/components'

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
      <div>
        <Button
          type="secondary"
          iconSize="xs"
          loading
          icons={{
            loading: <Icon type="loading" style={{ color: '#1b58f4' }} />
          }}
        >
          Custom loading icon
        </Button>
        &nbsp;&nbsp;
        <Button
          type="primary"
          loading={this.state.loading}
          onClick={this.setLoading}
          icons={{
            loading: <Icon type="loading" style={{ color: '#1b58f4' }} />
          }}
        >
          Click to loading and show loading icon
        </Button>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
