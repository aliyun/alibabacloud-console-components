import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'
import { storiesOf } from '@storybook/react'
import Basic from './basic'
import WithPaginationProps from './withPaginationProps'
import WithCustomPagination from './withCustomPagination'
import WithSelection from './withSelection'
import WithPrimaryOperation from './withPrimaryOperation'
import WithOperation from './withOperation'
import WithSearch from './withSearch'
import WithCustomSearch from './withCustomSearch'
import WithFixedHeader from './withFixedHeader'
import WithAppLayout from './withAppLayout'

storiesOf('WindRcTable', module)
  .add('Basic', () => <Basic />)
  .add('WithPaginationProps', () => <WithPaginationProps />)
  .add('WithCustomPagination', () => <WithCustomPagination />)
  .add('WithSelection', () => <WithSelection />)
  .add('WithPrimaryOperation', () => <WithPrimaryOperation />)
  .add('WithOperation', () => <WithOperation />)
  .add('WithSearch', () => <WithSearch />)
  .add('WithCustomSearch', () => <WithCustomSearch />)
  .add('withFixedHeader', () => <WithFixedHeader />)
  .add('WithAppLayout', () => <WithAppLayout />)
