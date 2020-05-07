import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'
import { storiesOf } from '@storybook/react'
import Basic from './basic'
import WithText from './with-text'
import WithTable from './with-table'
import WithIntl from './with-intl'

storiesOf('WindRcCopyId', module)
  .add('basic', () => <Basic />)
  .add('Text Type', () => <WithText />)
  .add('WithTable', () => <WithTable />)
  .add('WithIntl', () => <WithIntl />)
