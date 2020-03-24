import 'intersection-observer'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import IntersectionObserver from '@researchgate/react-intersection-observer'
import Context from '../layout/FixedBarContext'
import { SFixedBarWrapper } from './styled'

interface IState {
  isIntersecting: boolean
}

interface IProps {
  fixedAlign: 'top' | 'bottom' | ''
  afterIntersectChanged: (
    fixedAlign: 'top' | 'bottom' | '',
    nextIntersecting: boolean,
    prevIntersecting: boolean
  ) => void
}

export default (threshold: number) => (BaseComponent: React.ComponentType) => {
  const displayName =
    BaseComponent.displayName || BaseComponent.name || 'Component'

  return class WithIntersectionFixed extends Component<IProps, IState> {
    static displayName = `withIntersectionObserver(${displayName})`

    static propTypes = {
      fixedAlign: PropTypes.oneOf(['top', 'bottom', '']),
      afterIntersectChanged: PropTypes.func,
    }

    static defaultProps = {
      fixedAlign: 'top',
    }

    constructor(props: IProps) {
      super(props)
      this.state = {
        isIntersecting: true,
      }
    }

    handleChange = ({
      isIntersecting,
      intersectionRatio,
    }: {
      isIntersecting: boolean
      intersectionRatio: number
    }): void => {
      const nextIntersecting = isIntersecting && intersectionRatio >= threshold
      const { isIntersecting: prevIntersecting } = this.state

      if (nextIntersecting !== prevIntersecting) {
        this.setState(
          {
            isIntersecting: nextIntersecting,
          },
          () => {
            if (typeof this.props.afterIntersectChanged === 'function') {
              this.props.afterIntersectChanged(
                this.props.fixedAlign,
                nextIntersecting,
                prevIntersecting
              )
            }
          }
        )
      }
    }

    render(): React.ReactNode {
      const { isIntersecting } = this.state
      const { fixedAlign, ...restProps } = this.props

      return (
        <>
          <IntersectionObserver
            onChange={this.handleChange}
            threshold={threshold}
          >
            <BaseComponent {...restProps} />
          </IntersectionObserver>
          {!isIntersecting && (
            <Context.Consumer>
              {({
                fixedBarZIndex = 1000,
                fixedClassName = '',
                fixedStyle = {},
              }) => {
                return (
                  <SFixedBarWrapper
                    className={classNames(
                      fixedClassName,
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
              }}
            </Context.Consumer>
          )}
        </>
      )
    }
  }
}
