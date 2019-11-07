import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'

import { storiesOf } from '@storybook/react'
import MultiPanelDemo from './MultiPanel'
import SlidePanelDemo from './SlidePanel'
import StackPanelDemo from './StackPanel'

storiesOf('WindRcActions', module)
  .add('MultiPanelDemo', () => <MultiPanelDemo />)
  .add('SlidePanelDemo', () => <SlidePanelDemo />)
  .add('StackPanelDemo', () => <StackPanelDemo />)
