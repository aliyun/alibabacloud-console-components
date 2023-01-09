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
  affixMode?: 'intersection-observer' | 'sticky'
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
    affixMode,
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

    if (affixMode === 'sticky')
      return (
        <Context.Consumer>
          {({
            // zindex应该低于console-base的左上角抽屉栏
            fixedBarZIndex = 99,
            fixedClassName = '',
            fixedStyle = {},
          }) => {
            return (
              <FixedBarWrapper
                className={classNames(fixedClassName)}
                fixedAlign={fixedAlign}
                zIndex={fixedBarZIndex}
                style={fixedStyle}
              >
                <BaseComponent {...restProps} />
              </FixedBarWrapper>
            )
          }}
        </Context.Consumer>
      )

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
                <FixedBarWrapper
                  className={classNames(fixedClassName, className)}
                  fixedAlign={fixedAlign}
                  zIndex={fixedBarZIndex}
                  style={fixedStyle}
                >
                  <BaseComponent {...restProps} />
                </FixedBarWrapper>
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

function FixedBarWrapper({
  className,
  fixedAlign,
  zIndex,
  style,
  children,
}: {
  className?: string
  fixedAlign: 'top' | 'bottom'
  zIndex?: number
  style?: React.CSSProperties
  children?: React.ReactNode
}) {
  return (
    <SFixedBarWrapper
      className={classNames(className, 'fixed-bar', `fixed-to-${fixedAlign}`)}
      style={{
        zIndex,
        ...style,
      }}
    >
      {children}
    </SFixedBarWrapper>
  )
}

export default WithFixed
