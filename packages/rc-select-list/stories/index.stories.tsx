import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'

import { storiesOf } from '@storybook/react'

import Basic from './basic'
import List from './list'
import Select from './select'

storiesOf('WindRcActions', module)
  .add('Basic', () => <Basic />)
  .add('List', () => <List />)
  .add('Select', () => <Select />)
