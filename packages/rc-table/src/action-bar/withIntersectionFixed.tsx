import 'intersection-observer'
import React, { useState } from 'react'
import classNames from 'classnames'
import IntersectionObserver from '@researchgate/react-intersection-observer'
import isEmpty from 'lodash/isEmpty'
import PropTypes from 'prop-types'
import { OverlayProps } from '@alicloud/console-components/types/overlay'
import AffixBar from './affix-bar'
import Context from '../layout/FixedBarContext'
import { IActionBarProps } from './index'
import { SFixedBarWrapper } from './styled'

interface IWithIntersectionFixedProps {
  fixedAlign?: 'top' | 'bottom'
  align: 'top' | 'bottom'
  afterIntersectChanged?: (
    fixedAlign: 'top' | 'bottom',
    nextIntersecting: boolean,
    prevIntersecting: boolean
  ) => void
  affixBarOverlayProps?: OverlayProps
}

const WithFixed = (threshold: number) => (
  BaseComponent: React.ComponentType<IActionBarProps>
) => {
  const displayName =
    BaseComponent.displayName || BaseComponent.name || 'Component'

  const WithIntersectionFixed: React.FC<IWithIntersectionFixedProps> = ({
    fixedAlign = 'top',
    afterIntersectChanged,
    affixBarOverlayProps,
    ...restProps
  }) => {
    const [isIntersecting, setIsIntersecting] = useState(true)

    const handleChange = ({
      isIntersecting: nextIsIntersecting,
      intersectionRatio,
    }: {
      isIntersecting: boolean
      intersectionRatio: number
    }): void => {
      const nextIntersecting =
        nextIsIntersecting && intersectionRatio >= threshold
      const prevIntersecting = isIntersecting

      if (nextIntersecting !== prevIntersecting) {
        setIsIntersecting(nextIntersecting)
        if (typeof afterIntersectChanged === 'function') {
          afterIntersectChanged(fixedAlign, nextIntersecting, prevIntersecting)
        }
      }
    }

    return (
      <>
        <IntersectionObserver onChange={handleChange} threshold={threshold}>
          <BaseComponent {...restProps} />
        </IntersectionObserver>
        {!isIntersecting && (
          <Context.Consumer>
            {({
              // zindex应该低于console-base的左上角抽屉栏
              fixedBarZIndex = 99,
              fixedClassName = '',
              fixedStyle = {},
            }) => {
              const children = (className?: string) => (
                <SFixedBarWrapper
                  className={classNames(
                    fixedClassName,
                    className,
                    'fixed-bar',
                    `fixed-to-${fixedAlign}`
                  )}
                  style={{
                    zIndex: fixedBarZIndex,
                    ...fixedStyle,
                  }}
                >
                  <BaseComponent {...restProps} />
                </SFixedBarWrapper>
              )

              const normalChildren = children()
              const overlayChildren = children(
                `overlay-fixed overlay-fixed-to-${fixedAlign}`
              )

              // 当指定了affixBarOverlayProps时，会将action-bar渲染到一个Overlay中。
              // 这是为了可以自定义渲染的容器。
              return (
                <AffixBar
                  overlayProps={{
                    ...affixBarOverlayProps,
                    visible: !isIntersecting,
                    align: fixedAlign === 'top' ? 'tl tl' : 'bl bl',
                    wrapperStyle: {
                      zIndex: fixedBarZIndex,
                    },
                  }}
                  showOverlay={!isEmpty(affixBarOverlayProps)}
                  normalChildren={normalChildren}
                  overlayChildren={overlayChildren}
                />
              )
            }}
          </Context.Consumer>
        )}
      </>
    )
  }
  WithIntersectionFixed.displayName = `withIntersectionObserver(${displayName})`
  WithIntersectionFixed.defaultProps = {
    fixedAlign: 'top',
  }
  WithIntersectionFixed.propTypes = {
    fixedAlign: PropTypes.oneOf(['top', 'bottom']),
    afterIntersectChanged: PropTypes.func,
  }

  return WithIntersectionFixed
}

export default WithFixed
