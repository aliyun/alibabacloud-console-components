import React, { Component } from 'react'
import PropTypes from 'prop-types'
import hoistStatics from 'hoist-non-react-statics'
import classNames from 'classnames'
import Step from '@alifd/next/lib/step'

import getDisplayName from '../../utils/getDisplayName'
import withWindConfig from '../../utils/withWindConfig'
import './index.scss'

/* eslint-disable react/static-property-placement */

/**
 * 提供size: 'small'选项，（目前仅对圆形step有效）
 */
const enhance = WrappedComponent => {
  // eslint-disable-next-line react/prefer-stateless-function
  class EnhancedStep extends Component {
    static displayName = `WindEnhanced(${getDisplayName(
      WrappedComponent,
      'Step'
    )})`

    static propTypes = {
      size: PropTypes.oneOf(['medium', 'small']),
      className: PropTypes.string,
    }

    static defaultProps = {
      size: 'medium',
    }

    render() {
      const { size, windConfig, className, ...restProps } = this.props

      const prefix =
        windConfig && windConfig.prefix ? windConfig.prefix : 'next-'

      const sizeClassName = `${prefix}enhanced-step-size-${size}`

      return (
        <WrappedComponent
          {...restProps}
          className={classNames(sizeClassName, className)}
        />
      )
    }
  }

  hoistStatics(EnhancedStep, Step)

  return EnhancedStep
}

export default withWindConfig(enhance(Step))
