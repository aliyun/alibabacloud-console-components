import React from 'react'
import { Button, Field } from '@alicloud/console-components'
import styled from 'styled-components'

class Custom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: typeof props.value === 'undefined' ? [] : props.value,
    }
  }

  // update value
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: typeof nextProps.value === 'undefined' ? [] : nextProps.value,
      })
    }
  }

  onAdd = () => {
    const value = this.state.value.concat([])
    value.push('new')

    this.setState({
      value,
    })
    this.props.onChange(value)
  }

  render() {
    return (
      <SCustom>
        {this.state.value.map((v, i) => {
          return <Button key={i}>{v}</Button>
        })}
        <Button type="primary" onClick={this.onAdd.bind(this)}>
          Add ＋{' '}
        </Button>
      </SCustom>
    )
  }
}

/* eslint-disable react/no-multi-comp */
export default class Demo9 extends React.Component {
  field = new Field(this, {
    deepReset: true,
  })

  onGetValue() {
    console.log(this.field.getValue('custom'))
  }

  render() {
    const { init, setValue, reset } = this.field

    return (
      <div>
        <Custom {...init('custom', { initValue: ['test'] })} />
        <br />
        <br />
        <Button
          style={{ marginRight: 8 }}
          type="primary"
          onClick={this.onGetValue.bind(this)}
        >
          getValue
        </Button>
        <Button
          type="primary"
          onClick={() => setValue('custom', ['test', 'setValue'])}
          style={{ marginRight: 8 }}
        >
          setValue
        </Button>
        <Button onClick={() => reset()}>reset</Button>
      </div>
    )
  }
}

export const demoMeta = {
  zhName: `自定义组件`,

  zhDesc: `自己的组件如何接入Field。

	\`最低标准\`: 组件支持 \`onChange\` 读取组件数据。\`达到效果\`：Field 可以 getValue，但是 setValue 无效
	
	\`完全支持\`: 组件支持[受控](https://facebook.github.io/react/docs/forms.html#controlled-components)， 也就是支持两个api：\`value\` \`onChange\`. value: 设置组件的数据; onChange: 在组件修改的时候在第一个数暴露数据`,
}

const SCustom = styled.div`
  border: 1px dashed;
  padding: 4px;
  display: inline-block;
  span {
    border: 1px solid green;
    padding: 0px 5px;
    height: 24px;
    display: inline-block;
    margin-right: 2px;
  }
`
