import React from 'react'
import {
  IWindIntlPublic,
  reactIntlFactory,
  withRcIntl,
} from '@alicloud/console-components-intl'

const intl = reactIntlFactory()

intl.set({
  messages: {
    '@wind_v2.rc.RComponent.test': 'withRcIntl works!',
  },
})

const RComponent: React.FC<{ intl: IWindIntlPublic }> = ({ intl: intl0 }) => (
  <div style={{ marginLeft: '16px' }}>
    <h2>通过使用withRcIntl，让你的组件拥有可动态配置的文案。</h2>
    <p>{intl0<any>('test')}</p>
  </div>
)

const RComponentWithIntl = withRcIntl({
  componentName: 'RComponent',
})(RComponent)

const Demo: React.FC = intl.withProvider()(() => {
  return <RComponentWithIntl />
})

export default Demo
