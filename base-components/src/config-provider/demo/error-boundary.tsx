/**
 * @title ErrorBoundary 捕获错误
 * @description 使用 `<ErrorBoundary>` 可以避免由于局部区域的错误，所引起的页面白屏。
 */

import * as React from 'react'
import styled from 'styled-components'

import { ConfigProvider, Button } from '@alicloudfe/components'

const { ErrorBoundary, config } = ConfigProvider

class Demo extends React.Component {
  render() {
    if (this.props.throwError) {
      throw Error('There is something going wrong!')
    } else {
      return <span>normal</span>
    }
  }
}

const NewDemo = config(Demo)

const fallbackUI = (props) => {
  const { error, errorInfo } = props
  return <span style={{ color: 'red' }}>{error.toString()}</span>
}

class App extends React.Component {
  state = {
    throwError: false
  }

  onClick = () => {
    this.setState({
      throwError: true
    })
  }

  render() {
    return (
      <div>
        Click to throw an error{' '}
        <Button type="primary" onClick={this.onClick}>
          trigger error
        </Button>
        <br />
        <br />
        Default fallback UI:
        <hr />
        <ConfigProvider errorBoundary>
          <NewDemo throwError={this.state.throwError} />
        </ConfigProvider>
        <br />
        <br />
        Customize fallback UI of configed Component(Basic Components / Biz
        Components):
        <hr />
        <ConfigProvider
          errorBoundary={{
            fallbackUI: (props) => {
              const { error, errorInfo } = props
              return (
                <span style={{ color: 'red' }}>Error: {error.toString()}</span>
              )
            },
            afterCatch: () => {
              console.log('catching')
            }
          }}
        >
          <NewDemo throwError={this.state.throwError} />
        </ConfigProvider>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
