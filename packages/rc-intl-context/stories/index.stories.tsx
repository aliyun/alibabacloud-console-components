import * as React from 'react'
import '@alicloud/console-components/dist/xconsole.css'

import { storiesOf } from '@storybook/react'
import Basic from './basic/basic'
import Nesting from './nesting/nesting'

storiesOf('IntlContext', module)
  .add('Basic', () => <Basic />)
  .add('Nesting', () => <Nesting />)
