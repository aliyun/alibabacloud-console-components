import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'
import { storiesOf } from '@storybook/react'
import BasicDemo from './basic'
import AutoWidthDemo from './auto-width'
import LegacyProps from './legacyProps'
import NonString from './non-string'
import CustomOmission from './custom-omission'
import TooltipMaxWidth from './tooltip-max-width'
import DynamicChildren from './dynamic-children'
import PopupStyle from './popupStyle'

storiesOf('AppLayout', module)
  .add('BasicDemo', () => <BasicDemo />)
  .add('AutoWidthDemo', () => <AutoWidthDemo />)
  .add('LegacyProps', () => <LegacyProps />)
  .add('NonString', () => <NonString />)
  .add('CustomOmission', () => <CustomOmission />)
  .add('TooltipMaxWidth', () => <TooltipMaxWidth />)
  .add('DynamicChildren', () => <DynamicChildren />)
  .add('PopupStyle', () => <PopupStyle />)
