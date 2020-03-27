import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'
import { storiesOf } from '@storybook/react'
import Basic from './basic'
import TextButton from './text-button'
import SquareButton from './square-button'

storiesOf('WindRcButtonCheckbox', module)
  .add('Basic', () => <Basic />)
  .add('TextButton', () => <TextButton />)
  .add('SquareButton', () => <SquareButton />)
