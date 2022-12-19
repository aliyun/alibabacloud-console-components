import React, { useLayoutEffect } from 'react'
import * as PropTypes from 'prop-types'
import * as S from './styles'
import type { IPageProps } from './types/IPageProps.type'
export type { IPageProps }

enum SceneryThemeColorMap {
  white = 'var(--body-bg, #ffffff)',
  grey = '#FAFAFA',
}

const usePageLayout = ({
  sceneryRef,
  sceneryTheme,
}: Required<Pick<IPageProps, 'sceneryRef' | 'sceneryTheme'>>): void => {
  useLayoutEffect(() => {
    let elem: HTMLElement | null = null

    if (typeof sceneryRef === 'function') {
      elem = sceneryRef()
    } else if (typeof sceneryRef === 'string') {
      elem =
        document.querySelector(sceneryRef) ||
        document.getElementById(sceneryRef)
    }

    if (!elem) {
      return
    }
    const elemNotNull = elem

    const prevElemBackgroundColor = elemNotNull.style.backgroundColor
    elemNotNull.style.backgroundColor = SceneryThemeColorMap[sceneryTheme]

    return () => {
      elemNotNull.style.backgroundColor = prevElemBackgroundColor
    }
  }, [sceneryTheme, sceneryRef])
}

/**
 * 整个页面的容器。
 * @public
 */
const Page: React.FC<IPageProps> = ({
  sceneryTheme = 'white',
  sceneryRef = () => document.body,
  className,
  style,
  children,
}) => {
  usePageLayout({ sceneryTheme, sceneryRef })

  return (
    <S.Page className={className} style={style}>
      {children}
    </S.Page>
  )
}

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.objectOf(PropTypes.any),
  // eslint-disable-next-line react/no-unused-prop-types
  sceneryTheme: PropTypes.oneOf(['white', 'grey']),
  // eslint-disable-next-line react/no-unused-prop-types
  sceneryRef: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.func,
  ]),
}

export default Page
