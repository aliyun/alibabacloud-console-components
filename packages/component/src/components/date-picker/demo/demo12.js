import React from 'react'
import { DatePicker, Field, Button } from '@alicloud/console-components'
import moment from 'moment'

const { RangePicker } = DatePicker

export default class Demo12 extends React.Component {
  field = new Field(this)
  printData = () => {
    console.log('datepicker: %s', this.field.getValue('datepicker').format('YYYY-MM-DD'))
    const range = this.field.getValue('rangepicker')
    console.log('rangepicker: [%s, %s]', range[0] && range[0].format('YYYY-MM-DD'), range[1] && range[1].format('YYYY-MM-DD'))
  }
  render() {
    const init = this.field.init
    return (
      <div>
        <DatePicker {...init('datepicker', { initValue: moment() })} />
        &nbsp;&nbsp;
        <RangePicker {...init('rangepicker', { initValue: [ moment(), moment().add(1, 'months')] })} />
        &nbsp;&nbsp;
        <Button onClick={this.printData}>Print to Console</Button>
      </div>
    )
  }
}
