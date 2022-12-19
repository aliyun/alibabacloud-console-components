import React, { useMemo } from 'react'
import { DatePicker as NextDatePicker } from '@alifd/next'
import hoistNonReactStatics from 'hoist-non-react-statics'
import moment from 'moment'

const { RangePicker, MonthPicker, YearPicker, WeekPicker } = NextDatePicker

function withDefaultFormat<T>(WrappedComponent: T): T {
  const Wrapper = React.forwardRef((props: any, ref) => {
    let defaultFormat = useMemo(() => {
      // 从全局moment对象获取当前的moment文案
      return moment().localeData().longDateFormat('ll')
    }, [])

    // 从props的moment对象获取当前的moment文案
    const { value, defaultValue } = props
    const exactValue = value || defaultValue
    if (moment.isMoment(exactValue)) {
      defaultFormat = exactValue.localeData().longDateFormat('ll')
    }

    const format = props.format ?? defaultFormat

    // @ts-ignore
    return <WrappedComponent {...props} format={format} ref={ref} />
  })
  hoistNonReactStatics(Wrapper, WrappedComponent as any)
  return (Wrapper as any) as T
}

const DatePicker = withDefaultFormat(NextDatePicker)
;(DatePicker as any).RangePicker = withDefaultFormat(RangePicker)

export default DatePicker
