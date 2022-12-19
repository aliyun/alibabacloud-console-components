/**
 * @title 基本
 * @description 最简单的用法，展示 ConfigProvider 是如何工作的。
 */

import * as React from 'react'
import styled from 'styled-components'

import { ConfigProvider } from '@alicloudfe/components'
import PropTypes from 'prop-types'

const { config } = ConfigProvider

class Output extends React.Component {
  static propTypes = {
    prefix: PropTypes.string,
    locale: PropTypes.object
  }

  static defaultProps = {
    prefix: 'next-',
    locale: {
      hello: '你好'
    }
  }

  render() {
    const { prefix, locale } = this.props

    return (
      <ul>
        <li>prefix: {prefix}</li>
        <li>locale: {JSON.stringify(locale)}</li>
      </ul>
    )
  }
}

const Func = (props) => {
  return <div>This is a Function Component</div>
}

const NewFunc = config(Func)
const NewOutput = config(Output)

class Demo extends React.Component {
  render() {
    return (
      <ConfigProvider prefix="custom-" locale={{ Output: { hello: 'hello' } }}>
        <div>
          <NewOutput />
          <NewFunc />
        </div>
      </ConfigProvider>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
