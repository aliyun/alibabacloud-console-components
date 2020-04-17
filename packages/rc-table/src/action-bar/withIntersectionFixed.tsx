import 'intersection-observer'
import React, { useState } from 'react'
import classNames from 'classnames'
import IntersectionObserver from '@researchgate/react-intersection-observer'
import { isEmpty } from 'lodash'
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
              fixedBarZIndex = 1000,
              fixedClassName = '',
              fixedStyle = {},
            }) => {

							const children = (className: string) => (
                <SFixedBarWrapper
                  className={classNames(
                    fixedClassName,
										className
                  )}
                  style={{
                    zIndex: fixedBarZIndex,
                    ...fixedStyle,
                  }}
                >
                  <BaseComponent {...restProps} />
                </SFixedBarWrapper>
							)

              const normalChildren = children(`fixed-to-${fixedAlign}`)
              const overlayChildren = children(`overlay-fixed-to-${fixedAlign}`)

              return (
                <AffixBar
                  overlayProps={{
                    ...affixBarOverlayProps,
                    visible: !isIntersecting,
                    align: fixedAlign === 'top' ? 'tl tl' : 'bl bl',
                    animation: false,
                    className: 'overlay-inner',
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
