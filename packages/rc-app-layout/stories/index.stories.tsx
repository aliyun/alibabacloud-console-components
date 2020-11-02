import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'
import { storiesOf } from '@storybook/react'
import Basic1 from './basic/basic1'
import Basic2 from './basic/basic2'
import Controlled from './controlled/controlled'
import UnControlled from './uncontrolled/uncontrolled'
import HybridcloudLightBasic from './hybridcloud-light/basic'
import HybridcloudDarkBasic from './hybridcloud-dark/basic'

storiesOf('AppLayout', module)
  .add('Basic1', () => <Basic1 />)
  .add('Basic2', () => <Basic2 />)
  .add('Controlled', () => <Controlled />)
  .add('UnControlled', () => <UnControlled />)
  .add('HybridcloudLightBasic', () => <HybridcloudLightBasic />)
  .add('HybridcloudDarkBasic', () => <HybridcloudDarkBasic />)
