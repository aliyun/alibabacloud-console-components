import { Tab as NextTab } from '@alifd/next'
import React, { Children } from 'react'
import { withThemeClass } from '../utils/withThemeClass'
import hoistNonReactStatics from 'hoist-non-react-statics'
import cls from 'classnames'

import { useCssVar } from '../utils/useCssVar'

// export default withThemeClass(NextTab)

type NextTabProps = React.ComponentProps<typeof NextTab>

const Tab: typeof NextTab = withThemeClass(
  React.forwardRef((props: NextTabProps, ref) => {
    const { children } = props;
    
    const theme = useCssVar('--alicloudfe-components-theme').trim()
    
    if (theme === 'hybridcloud' || theme === "hybridcloud-dark") {
      return (
        <NextTab animation={false} {...props} ref={ref as any}>
          {children}
        </NextTab>
      )
    }
    return (
      <NextTab {...props} ref={ref as any}>
        {children}
      </NextTab>
    )
  })
) as any

hoistNonReactStatics(Tab, NextTab)

// @ts-ignore
Tab.displayName = NextTab.displayName

export default Tab
