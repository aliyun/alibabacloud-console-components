import React from 'react'
import { Box as NextBox } from '@alifd/next'

type NextBoxProps = React.ComponentProps<typeof NextBox>

const Box: typeof NextBox = React.forwardRef((props: NextBoxProps, ref) => {
  return <NextBox spacing={8} {...props} ref={ref as any} />
}) as any

export default Box
