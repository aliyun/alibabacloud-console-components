import { Tag as NextTag } from '@alifd/next'
import React from 'react'
import { withThemeClass } from '../utils/withThemeClass'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { wrap } from './WindColorfulTag'
import { useCssVar } from '../utils/useCssVar'
import cls from 'classnames'

type NextTagProps = React.ComponentProps<typeof NextTag>

const Tag: typeof NextTag = wrap(
  withThemeClass(
    React.forwardRef((props: NextTagProps, ref) => {
      const { children, color, prefix = 'next-' } = props
      const { className, ...others } = props;

      const theme = useCssVar('--alicloudfe-components-theme').trim()

      if (
        theme === 'hybridcloud' ||
        theme === 'hybridcloud-dark' ||
        theme === 'yunxiao' ||
        theme === 'yunxiao-dark'
      ) {
        return (
          <NextTag
            ref={ref as any}
            className={cls(
              { [`${prefix}tag-custom-${color}`]: true },
              className
            )}
            {...others}
          >
            {children}
          </NextTag>
        )
      }
      return (
        <NextTag {...props} ref={ref as any}>
          {children}
        </NextTag>
      )
    })
  )
) as any

hoistNonReactStatics(Tag, NextTag)

// @ts-ignore
Tag.displayName = NextTag.displayName

export default Tag
