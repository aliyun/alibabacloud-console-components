import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'
import { storiesOf } from '@storybook/react'
import BasicDemo from './basic'
import ImperativeDemo from './imperative'
import PassPropsDemo from './passProps'

storiesOf('AppLayout', module)
  .add('BasicDemo', () => <BasicDemo />)
  .add('imperativeDemo', () => <ImperativeDemo />)
  .add('PassPropsDemo', () => <PassPropsDemo />)
