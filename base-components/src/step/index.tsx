import React from 'react'
import { Step as NextStep } from '@alifd/next'
import type { StepProps } from '@alifd/next/types/step'
import hoistNonReactStatics from 'hoist-non-react-statics'

import { withThemeClass } from '../utils/withThemeClass'

const Step: typeof NextStep = ((props: StepProps) => {
  // @ts-ignore
  return <NextStep stretch {...props} />
}) as any

hoistNonReactStatics(Step, NextStep)

export default withThemeClass(Step)
