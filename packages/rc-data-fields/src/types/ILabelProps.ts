import React from 'react'

import { Grid } from '@alicloud/console-components'

export default interface ILabelProps
  extends React.ComponentProps<typeof Grid.Col> {
  className?: string
}
