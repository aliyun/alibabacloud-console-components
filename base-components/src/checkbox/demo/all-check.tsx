/**
 * @title 全选
 * @description 使用受控`Checkbox.Group`与中间状态，实现全选功能。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Checkbox, Divider } from '@alicloudfe/components'

const CheckboxGroup = Checkbox.Group

const plainOptions = ['Apple', 'Pear', 'Orange']
const defaultCheckedList = ['Apple', 'Orange']

const App = () => {
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList)
  const [indeterminate, setIndeterminate] = React.useState(true)
  const [checkAll, setCheckAll] = React.useState(false)

  const onChange = (list) => {
    setCheckedList(list)
    setIndeterminate(!!list.length && list.length < plainOptions.length)
    setCheckAll(list.length === plainOptions.length)
  }

  const onCheckAllChange = (checked, e) => {
    setCheckedList(e.target.checked ? plainOptions : [])
    setIndeterminate(false)
    setCheckAll(e.target.checked)
  }

  return (
    <div>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </Checkbox>
      <Divider />
      <CheckboxGroup
        dataSource={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
    </div>
  )
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
