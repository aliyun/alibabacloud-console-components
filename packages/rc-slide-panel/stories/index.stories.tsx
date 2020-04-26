import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'

import { storiesOf } from '@storybook/react'
import MultiPanelDemo from './MultiPanel'
import SlidePanelDemo from './SlidePanel'
import StackPanelDemo from './StackPanel'
import SlidePanelWithContainer from './SlidePanelWithContainer'
import CheckPanelShouldBeClosable from './CheckPanelShouldBeClosable'

storiesOf('WindRcActions', module)
  .add('MultiPanelDemo', () => <MultiPanelDemo />)
  .add('SlidePanelDemo', () => <SlidePanelDemo />)
  .add('StackPanelDemo', () => <StackPanelDemo />)
  .add('SlidePanelWithContainer', () => <SlidePanelWithContainer />)
  .add('CheckPanelShouldBeClosable', () => <CheckPanelShouldBeClosable />)
