import * as React from 'react'
import Form from '@alifd/next/lib/form'
import './index.scss'
import hoistStatics from 'hoist-non-react-statics'

const { Item } = Form

const PropsCtx = React.createContext()

const WrappedForm = props => {
  return (
    <PropsCtx.Provider value={props}>
      <Form {...props} />
    </PropsCtx.Provider>
  )
}

const WrappedItem = props => {
  return (
    <PropsCtx.Consumer>
      {formProps => {
        // fusion默认label靠右对齐，wind希望默认靠左对齐
        const labelTextAlign = (() => {
          // Item有可能不用在Form中
          if (typeof formProps !== 'object') return 'left'
          if (formProps.labelTextAlign === 'right') return 'right'
          return 'left'
        })()
        return <Item labelTextAlign={labelTextAlign} {...props} />
      }}
    </PropsCtx.Consumer>
  )
}

hoistStatics(WrappedForm, Form)
hoistStatics(WrappedItem, Item)
WrappedForm.Item = WrappedItem

export default WrappedForm
