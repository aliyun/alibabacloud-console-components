import React from 'react'
import { Input, Button, Field } from '@alicloud/console-components'

export default class Demo2 extends React.Component {

  field = new Field(this)

  normFile(list) {
    if (Array.isArray(list)) {
      return list
    }
    return list && list.fileList
  }

  normDate(date, strdate) {
    console.log('normDate:', date, strdate)
    return strdate
  }

  render() {
    const init = this.field.init

    return (
   	  <div>
        <Input {...init('name', { getValueFromEvent: (value) => {
          if (value.match(/##/)) {
            return value
          } else {
            return `## title-${value}`
          }
        }})} />
        <Button type="primary" onClick={() => {
          console.log(this.field.getValues());
        }}>getValues</Button>
      </div>
    )
  }
}