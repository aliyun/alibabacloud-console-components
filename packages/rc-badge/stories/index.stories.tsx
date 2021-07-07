import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'
import { storiesOf } from '@storybook/react'
import Basic from './basic'
import WithAppLayout from './with-applayout'

storiesOf('WindRcBadge', module)
  .add('Basic', () => <Basic />)

  .add('WithAppLayout', () => <WithAppLayout />)
