import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@alifd/next/lib/card'
import classNames from 'classnames'
import hoistStatics from 'hoist-non-react-statics'
import getDisplayName from '../../utils/getDisplayName'
import './index.scss'

const enhance = WrappedComponent => {
  // eslint-disable-next-line react/prefer-stateless-function
  class EnhancedCard extends Component {
    static displayName = `WindEnhanced(${getDisplayName(
      WrappedComponent,
      'Card'
    )})`

    static propTypes = {
      hasBorder: PropTypes.bool,
      className: PropTypes.string,
    }

    render() {
      const { hasBorder, className, ...restProps } = this.props
      const borderClassName = hasBorder ? 'wind-enhanced-card-has-border' : ''

      return (
        <WrappedComponent
          {...restProps}
          className={classNames(borderClassName, className)}
        />
      )
    }
  }

  hoistStatics(EnhancedCard, Card)

  return EnhancedCard
}

export default enhance(Card)
