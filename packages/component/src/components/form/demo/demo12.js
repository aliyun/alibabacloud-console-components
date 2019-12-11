import React from 'react'
import {
  Form,
  Input,
  Button,
  Checkbox,
  Field,
} from '@alicloud/console-components'
import { combineReducers, createStore } from 'redux'
import { Provider, connect } from 'react-redux'

const CheckboxGroup = Checkbox.Group
function formReducer(
  state = { email: '', username: 'xiachi', fruit: ['apple'] },
  action
) {
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

class FormDemo extends React.Component {
  constructor(props) {
    super(props)
    this.field = new Field(this, {
      onChange: (name, value) => {
        console.log('onChange', name, value, this.field.getValues())
        this.props.dispatch({
          type: 'save_fields',
          payload: {
            [name]: value,
          },
        })
        /* Method 2, Updates all values.
                 this.props.dispatch({
                 type: 'save_fields',
                 payload: this.field.getValues()
                 });
                 */
      },
    })
  }

  componentWillReceiveProps(nextProps) {
    this.field.setValues(nextProps.formData)
  }

  setEmail() {
    this.props.dispatch({
      type: 'save_fields',
      payload: {
        email: 'qq@gmail.com',
      },
    })
  }

  setName() {
    this.props.dispatch({
      type: 'save_fields',
      payload: {
        username: 'frank',
      },
    })
  }

  setGroup() {
    this.props.dispatch({
      type: 'save_fields',
      payload: {
        fruit: ['pear'],
      },
    })
  }

  render() {
    return (
      <Form field={this.field}>
        <Form.Item required requiredMessage="required!">
          <Input name="email" />
        </Form.Item>
        <Form.Item required requiredMessage="required!">
          <Input name="username" defaultValue={this.props.formData.username} />
        </Form.Item>
        <Form.Item required requiredMessage="required!">
          <CheckboxGroup
            name="fruit"
            dataSource={[
              { label: 'Apple', value: 'apple' },
              { label: 'Pear', value: 'pear' },
            ]}
            defaultValue={this.props.formData.fruit}
          />
        </Form.Item>
        <p>email: {this.props.email && this.props.email.value}</p>
        <Button onClick={this.setEmail.bind(this)}>setEmail</Button>
        <Button onClick={this.setName.bind(this)}>setName</Button>
        <Button onClick={this.setGroup.bind(this)}>setGroup</Button>
      </Form>
    )
  }
}

const ReduxFormDemo = connect(state => {
  return {
    formData: state.formReducer,
  }
})(FormDemo)

const store = createStore(
  combineReducers({
    formReducer,
  })
)

const Demo12 = () => (
  <Provider store={store}>
    <div>
      <ReduxFormDemo />
    </div>
  </Provider>
)

export default Demo12

export const demoMeta = {
  zhName: `配合redux使用`,
  zhDesc: `在\`redux\`中结合 \`componentWillReceiveProps\` \`setValues\` 使用， 配合 Field 使用`,
}
