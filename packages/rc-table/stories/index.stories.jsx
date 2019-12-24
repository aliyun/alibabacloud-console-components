import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'
import { storiesOf } from '@storybook/react'
import Basic from './basic'
import ExpandTable from './expandTable'

storiesOf('WindRcTable', module).add('Basic', () => <Basic />)
storiesOf('WindRcTable', module).add('ExpandTable', () => <ExpandTable />)
