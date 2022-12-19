import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'
import { storiesOf } from '@storybook/react'
import Basic from './basic'
import WithWrapper from './withWrapper'

storiesOf('WindRcActions', module)
  .add('Basic', () => <Basic />)
  .add('WithWrapper', () => <WithWrapper />)
