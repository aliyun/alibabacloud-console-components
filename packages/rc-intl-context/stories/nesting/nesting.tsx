import React from 'react'
import { Provider, Consumer } from '../..'

/* eslint-disable */

const Locales = {
  zhCN: 'zh-CN',
  enUS: 'en-US',
}

const Messages = {
  [Locales.zhCN]: {
    hello: '你好',
    world: '世界',
  },
  [Locales.enUS]: {
    hello: 'Hello',
    world: 'World',
  },
}

const Nesting = () => (
  <Provider>
    <h3>Provider 可以嵌套使用</h3>
    <Consumer>
      {({ locale, messages }) => {
        if (!locale && !messages) {
          return (
            <div>
              <div>1st nesting: locales and messages are both undefined.</div>
              <Provider locale={Locales.zhCN} messages={Messages[Locales.zhCN]}>
                <Consumer>
                  {({ locale, messages }) => {
                    if (locale === Locales.zhCN) {
                      return (
                        <>
                          <div>
                            2nd nesting: locale is {locale} -{' '}
                            {messages && messages.hello}
                            {messages && messages.world}
                          </div>
                          <Provider locale={Locales.enUS}>
                            <Consumer>
                              {({ locale, messages }) => {
                                if (
                                  locale === Locales.enUS &&
                                  messages &&
                                  messages.hello ===
                                    Messages[Locales.zhCN].hello
                                ) {
                                  return (
                                    <>
                                      <div>
                                        3rd nesting: locale is {locale} -{' '}
                                        {messages.hello} {messages.world}
                                      </div>
                                      <Provider messages={Messages[locale]}>
                                        <Consumer>
                                          {({ locale, messages }) => (
                                            <div>
                                              4st nesting: locale is {locale} -
                                              {messages && messages.hello}{' '}
                                              {messages && messages.world}
                                            </div>
                                          )}
                                        </Consumer>
                                      </Provider>
                                    </>
                                  )
                                }
                              }}
                            </Consumer>
                          </Provider>
                        </>
                      )
                    }
                  }}
                </Consumer>
              </Provider>
            </div>
          )
        }
      }}
    </Consumer>
  </Provider>
)

export default Nesting
