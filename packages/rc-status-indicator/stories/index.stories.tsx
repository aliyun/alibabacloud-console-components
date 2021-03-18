import '@alicloud/console-components/dist/wind.css'
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Basic from './basic'
import Dot from './dot'
import CustomIcon from './custom-icon'
import CustomStatus from './custom-status'

storiesOf('wind-rc-status-indicator', module)
  .add('Basic', () => <Basic />)
  .add('Dot', () => <Dot />)
  .add('CustomIcon', () => <CustomIcon />)
  .add('CustomStatus', () => <CustomStatus />)
