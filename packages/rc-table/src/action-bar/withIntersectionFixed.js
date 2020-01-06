import 'intersection-observer'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import IntersectionObserver from '@researchgate/react-intersection-observer'
import Context from '../layout/FixedBarContext'
import { SFixedBarWrapper } from './styled'

export default threshold => BaseComponent => {
  const displayName =
    BaseComponent.displayName || BaseComponent.name || 'Component'

  return class WithIntersectionFixed extends Component {
    static displayName = `withIntersectionObserver(${displayName})`

    static propTypes = {
      fixedAlign: PropTypes.oneOf(['top', 'bottom', '']),
      afterIntersectChanged: PropTypes.func,
    }

    static defaultProps = {
      fixedAlign: 'top',
    }

    state = {
      isIntersecting: true,
    }

    handleChange = ({ isIntersecting, intersectionRatio }) => {
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

    render() {
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
