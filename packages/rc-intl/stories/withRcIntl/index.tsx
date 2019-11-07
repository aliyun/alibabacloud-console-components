import React from 'react'
import intl, {
  withRcIntl,
  IWindIntlPublic,
  withProvider,
} from '@alicloud/console-components-intl'

intl.set({
  messages: {
    '@wind_v2.rc.RComponent.test': 'withRcIntl works!',
  },
})

const RComponent: React.FC<{ intl: IWindIntlPublic }> = ({ intl: intl0 }) => (
  <>
    <p>{intl0('test')}</p>
  </>
)

const RComponentWithIntl = withRcIntl({
  componentName: 'RComponent',
})(RComponent)

const Demo: React.FC = withProvider()(() => {
  return <RComponentWithIntl />
})

export default Demo
