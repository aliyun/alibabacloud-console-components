import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'

import { storiesOf } from '@storybook/react'
import Threshold from './threshold'
import Visible from './visible'
import Basic from './basic'
import CustomChildren from './customChildren'
import Fragment from './fragment'
import Wrap from './wrap'
import CustomExpandTrigger from './customExpandTrigger'

storiesOf('WindRcActions', module)
  .add('Basic', () => <Basic />)
  .add('Threshold', () => <Threshold />)
  .add('Visible', () => <Visible />)
  .add('CustomChildren', () => <CustomChildren />)
  .add('Fragment', () => <Fragment />)
  .add('Wrap', () => <Wrap />)
  .add('CustomExpandTrigger', () => <CustomExpandTrigger />)
