import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@alifd/next/lib/card'
import classNames from 'classnames'
import hoistStatics from 'hoist-non-react-statics'
import getDisplayName from '../../utils/getDisplayName'
import withWindConfig from '../../utils/withWindConfig'
import './index.scss'

interface IProps {
  hasBorder?: boolean
  windConfig?: any
  className?: string
}

const enhance = (WrappedComponent: React.ComponentType<any>) => {
  // eslint-disable-next-line react/prefer-stateless-function
  class EnhancedCard extends Component<IProps> {
    static displayName = `WindEnhanced(${getDisplayName(
      WrappedComponent,
      'Card'
    )})`

    static propTypes = {
      hasBorder: PropTypes.bool,
      className: PropTypes.string,
    }

    render() {
      const { hasBorder, windConfig, className, ...restProps } = this.props
      const prefix =
        windConfig && windConfig.prefix ? windConfig.prefix : 'next-'
      const borderClassName = hasBorder
        ? `${prefix}enhanced-card-has-border`
        : ''

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

export default withWindConfig(enhance(Card))
