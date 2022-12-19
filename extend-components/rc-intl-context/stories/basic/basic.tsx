import React, { Component } from 'react'
import { Radio } from '@alicloud/console-components'
import { Provider, Consumer } from '@alicloud/console-components-intl-context'

/* eslint-disable */

const locales = {
  zhCN: 'zh-CN',
  enUS: 'en-US',
}

const messages = {
  [locales.zhCN]: {
    hello: '你好',
    world: '世界',
  },
  [locales.enUS]: {
    hello: 'Hello',
    world: 'World',
  },
}

export default class Basic extends Component {
  state = {
    locale: 'zh-CN',
  }

  changeLocale = (locale: any) => {
    this.setState({ locale })
  }

  render() {
    return (
      <div>
        <h3>使用 Provider / Consumer 传递国际化信息</h3>
        <div>
          <div>
            <Radio.Group value={this.state.locale} onChange={this.changeLocale}>
              <Radio value={locales.zhCN}>简体中文</Radio>
              <Radio value={locales.enUS}>美式英文</Radio>
            </Radio.Group>
          </div>
          <div>
            <Provider
              locale={this.state.locale}
              messages={messages[this.state.locale]}
            >
              <Consumer>
                {({ locale, messages }) => (
                  <>
                    <span>{messages && messages.hello}</span>
                    <span>{messages && messages.world}</span>
                  </>
                )}
              </Consumer>
            </Provider>
          </div>
        </div>
      </div>
    )
  }
}
