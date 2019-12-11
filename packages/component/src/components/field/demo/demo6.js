import React from 'react'
import { Input, Button, Field } from '@alicloud/console-components'

import { combineReducers, createStore } from 'redux'
import { Provider, connect } from 'react-redux'

function formReducer(state = { email: 'frankqian@qq.com' }, action) {
  switch (action.type) {
    case 'save_fields':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

class Demo extends React.Component {
  componentWillReceiveProps(nextProps) {
    this.field.setValues({
      email: nextProps.email,
      newlen: nextProps.email.length,
    })
  }

  field = new Field(this, {
    onChange: (name, value) => {
      console.log('onChange', name, value)
      this.field.setValue('newlen', value.length)
      this.props.dispatch({
        type: 'save_fields',
        payload: {
          [name]: value,
        },
      })
    },
  })

  setEmail() {
    this.props.dispatch({
      type: 'save_fields',
      payload: {
        email: 'qq@gmail.com',
      },
    })
  }

  render() {
    const { init } = this.field
    const newLen = init('newlen', { initValue: this.props.email.length })

    return (
      <div>
        <Input
          {...init(
            'email',
            { initValue: this.props.email },
            {
              rules: [
                { required: true, type: 'email', message: 'at least 5 chars' },
              ],
            }
          )}
        />
        now length is:{newLen.value}
        <p>email: {this.props.email}</p>
        <Button onClick={this.setEmail.bind(this)}>set</Button>
      </div>
    )
  }
}

const ReduxDemo = connect(state => {
  return {
    email: state.formReducer.email,
  }
})(Demo)

const store = createStore(
  combineReducers({
    formReducer,
  })
)

const Demo6 = () => (
  <Provider store={store}>
    <div>
      <ReduxDemo />
    </div>
  </Provider>
)

export const demoMeta = {
  zhName: `redux 中使用`,
  zhDesc: `在 \`redux\` 中使用, 在 \`componentWillReceiveProps\` 更新`,
}

export default Demo6
