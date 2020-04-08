import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'
import { storiesOf } from '@storybook/react'
import Basic from './basic'
import WithOffset from './with-offset'

storiesOf('WindRcBadgeBalloon', module)
  .add('Basic', () => <Basic />)
  .add('WithOffset', () => <WithOffset />)
