import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DatePicker from '@alifd/next/lib/date-picker'
import moment from 'moment'
import './index.scss'

/**
 * Compatible `locale` to moment's locale format
 * moment's doesn't recognize regionless chinese locale like `zh`
 * @param {String} locale
 */
const fixLocale = locale => (locale === 'zh' ? 'zh-cn' : locale)

/**
 * Give `format` prop a default value, based on current locale.
 */
const withIntlFormat = WrappedComponent =>
  // eslint-disable-next-line react/prefer-stateless-function
  class H extends Component {
    static displayName = `withIntlFormat(${WrappedComponent.displayName})`

    static propTypes = {
      format: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.object,
      ]),
    }

    // Access context temporary
    // TODO: Will be refactor with PR
    static contextTypes = {
      nextLocale: PropTypes.objectOf(PropTypes.any),
    }

    render() {
      const { format, ...restProps } = this.props

      // Access context temporary
      // TODO: Will be refactor with PR
      const { nextLocale: { momentLocale } = {} } = this.context

      // dummy momentInstance to normalize locale string
      const momentInstance = moment()
      let currentLocale = momentInstance.locale(fixLocale(momentLocale) || 'en')

      // if value is a moment instance already, get locale from it
      const { value, defaultValue } = restProps
      const exactValue = value || defaultValue
      if (moment.isMoment(exactValue)) {
        currentLocale = exactValue.locale()
      }

      const defaultFormat = moment
        .localeData(currentLocale)
        .longDateFormat('ll')

      const exactFormat = typeof format !== 'undefined' ? format : defaultFormat

      const props = {
        ...restProps,
        format: exactFormat,
      }

      return <WrappedComponent {...props} />
    }
  }

const { RangePicker, MonthPicker, YearPicker } = DatePicker

const WrappedDatePicker = withIntlFormat(DatePicker)
WrappedDatePicker.RangePicker = withIntlFormat(RangePicker)
WrappedDatePicker.MonthPicker = withIntlFormat(MonthPicker)
WrappedDatePicker.YearPicker = withIntlFormat(YearPicker)

export default WrappedDatePicker
