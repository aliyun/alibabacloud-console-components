import React from 'react'
import hoistStatics from 'hoist-non-react-statics'
// 不从'../index.js'引ConfigProvider，避免循环依赖
import ConfigProvider from '../components/config-provider'

export default function withWindConfig(Wrapped) {
  const ConfifgConsumer = ConfigProvider.Consumer
  const HOC = props => (
    <ConfifgConsumer>
      {context => <Wrapped {...props} windConfig={context} />}
    </ConfifgConsumer>
  )
  hoistStatics(HOC, Wrapped)
  return HOC
}
