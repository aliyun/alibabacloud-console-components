import React from 'react'

import { Grid } from '@alicloud/console-components'

export default interface IValueProps
  extends React.ComponentProps<typeof Grid.Col> {
  className?: string
}
