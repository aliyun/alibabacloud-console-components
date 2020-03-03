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
    <h2>通过使用withRcIntl设置自定义组件文案</h2>
    <p>{intl0('test')}</p>
  </div>
)

const RComponentWithIntl = withRcIntl({
  componentName: 'RComponent',
})(RComponent)

const Demo: React.FC = intl.withProvider()(() => {
  return <RComponentWithIntl />
})

export default Demo
