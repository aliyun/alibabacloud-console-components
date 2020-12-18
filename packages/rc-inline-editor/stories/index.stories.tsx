import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'
import { storiesOf } from '@storybook/react'
import Basic from './basic'
import WithText from './with-text'
import CustomValidate from './custom-validate'
import WithTable from './with-table'

storiesOf('WindRcInlineEditor', module)
  .add('Basic', () => <Basic />)
  .add('WithText', () => <WithText />)
  .add('CustomValidate', () => <CustomValidate />)
  .add('WithTable', () => <WithTable />)
