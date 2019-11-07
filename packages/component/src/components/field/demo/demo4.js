import React from 'react'
import { Input, Button, Field } from '@alicloud/console-components'

export default class Demo4 extends React.Component {
  field = new Field(this)

  render() {
    const { init, getError, setError, setErrors } = this.field
    return (
      <div className="demo">
        <Input  {...init('input', {
          rules: [{
            required: true,
            pattern: /hello/,
            message: 'must be hello'
          }]
        })}  /><br/>
        <span style={{color: 'red'}}>{getError('input')}</span>

        <br/>
        <Button onClick={() => {
          setError('input', 'set error 1');
          }}>setError
        </Button>

        <Button onClick={() => {
          setErrors({input: 'set error 2'});
          }}>setErrors
        </Button>

        <Button onClick={() => {
          setErrors({input: ''});
          }}>clear
        </Button>
        <br/><br/>
        <Input  {...init('input2')}  /><br/>
        <span style={{color: 'red'}}>{getError('input2')}</span><br/>

        <Button onClick={() => {
          setError('input2', 'errors will be removed by onChange');
          }}>setError
        </Button>
      </div>
    )
  }
}