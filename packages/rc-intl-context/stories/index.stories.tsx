import * as React from 'react'
import '@alife/dpl-console-design/index.css'

import { storiesOf } from '@storybook/react'
import Basic from './basic/basic'
import Nesting from './nesting/nesting'

storiesOf('IntlContext', module)
  .add('Basic', () => <Basic />)
  .add('Nesting', () => <Nesting />)
