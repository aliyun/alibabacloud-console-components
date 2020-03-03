import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'
import { storiesOf } from '@storybook/react'
import BasicDemo from './basic'
import WithVar from './withVar'
import WithComponent from './withComponent'
import WithRcIntlDemo from './withRcIntl'
import WithDate from './withDate'
import OtherDemo from './otherDemo'

storiesOf('WindIntl', module)
  .add('BasicDemo', () => <BasicDemo />)
  .add('WithVar', () => <WithVar />)
  .add('WithComponent', () => <WithComponent />)
  .add('WithRcIntlDemo', () => <WithRcIntlDemo />)
  .add('WithDate', () => <WithDate />)
  .add('OtherDemo', () => <OtherDemo />)
