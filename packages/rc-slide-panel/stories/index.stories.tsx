import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'

import { storiesOf } from '@storybook/react'
import MultiPanelDemo from './MultiPanel'
import SlidePanelDemo from './SlidePanel'
import StackPanelDemo from './StackPanel'
import SlidePanelWithContainer from './SlidePanelWithContainer'
import CheckPanelShouldBeClosable from './CheckPanelShouldBeClosable'
import BottomPanel from './BottomPanel'
import Nested from './Nested'
import InLayout from './InLayout'

storiesOf('WindRcActions', module)
  .add('MultiPanelDemo', () => <MultiPanelDemo />)
  .add('SlidePanelDemo', () => <SlidePanelDemo />)
  .add('StackPanelDemo', () => <StackPanelDemo />)
  .add('SlidePanelWithContainer', () => <SlidePanelWithContainer />)
  .add('CheckPanelShouldBeClosable', () => <CheckPanelShouldBeClosable />)
  .add('BottomPanel', () => <BottomPanel />)
  .add('Nested', () => <Nested />)
  .add('InLayout', () => <InLayout />)
