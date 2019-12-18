import * as React from 'react'

import { storiesOf } from '@storybook/react'
import BasicDemo from './basic'
// import WithRcIntlDemo from './withRcIntl'

storiesOf('WindIntl', module).add('BasicDemo', () => <BasicDemo />)
// .add('WithRcIntlDemo', () => <WithRcIntlDemo />)

// 每次只能运行一个Demo，因为他们都使用了顶层intl对象，会相互影响
