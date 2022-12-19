/**
 * @title 使用 Consumer 组件读取上下文中的数据
 * @description 使用 `<Consumer>` 可以方便地读取 `<ConfigProvider>` 中上下文的数据
 */

import * as React from 'react'
import styled from 'styled-components'

import { ConfigProvider } from '@alicloudfe/components'
import PropTypes from 'prop-types'

const localeSettings = {
  momentLocale: 'fr-FR',
  CustomizedComponent: {
    helloWorld: 'hello, world'
  }
}

const App = ({ children }) => (
  <ConfigProvider
    prefix="customized-"
    locale={localeSettings}
    pure
    warning={false}
  >
    {children}
  </ConfigProvider>
)

App.propTypes = {
  children: PropTypes.node
}

const Child = () => (
  <ConfigProvider.Consumer>
    {(context) => (
      <div className="context-data">
        <h3>Context's state</h3>
        <pre>{JSON.stringify(context, false, 2)}</pre>
      </div>
    )}
  </ConfigProvider.Consumer>
)

const Demo = () => (
  <App>
    <Child />
  </App>
)

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .context-data {
    padding: 0 32px 32px;
    border: 3px dashed #aaa;
    border-radius: 9px;
  }
`
