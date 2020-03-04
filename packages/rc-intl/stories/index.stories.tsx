import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'
import { storiesOf } from '@storybook/react'
import BasicDemo from './basic'
import WithVar from './withVar'
import OverwriteWind from './overwriteBaseComponent'
import WithRcIntlDemo from './withRcIntl'
import WithDate from './date'
import NumberDemo from './number'

storiesOf('WindIntl', module)
  .add('BasicDemo', () => <BasicDemo />)
  .add('WithVar', () => <WithVar />)
  .add('OverwriteWind', () => <OverwriteWind />)
  .add('WithRcIntlDemo', () => <WithRcIntlDemo />)
  .add('WithDate', () => <WithDate />)
  .add('NumberDemo', () => <NumberDemo />)
