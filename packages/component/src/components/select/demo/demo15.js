import React, { Component, useState } from 'react'
import { Select } from '@alicloud/console-components'
import classNames from 'classnames'
import styled from 'styled-components'

function preventDefault(e) {
  e.preventDefault()
}

const Menu = props => {
  const data = [
    {
      label: 'value1',
      value: 1,
    },
    {
      label: 'value2',
      value: 2,
    },
  ]

  const handleClick = item => {
    props.onChange(item)
  }

  const renderItems = () =>
    data.map(item => (
      <li
        key={item.value}
        onClick={() => {
          handleClick(item)
        }}
      >
        {item.label}
      </li>
    ))

  const { className, ...others } = props
  const cls = classNames('overlay-content', className)
  return (
    <ul className={cls} {...others}>
      {renderItems()}
    </ul>
  )
}

const Demo15 = () => {
  const Wrapper = styled.div`
    background-color: #f8f8f8;
    padding: 16px;
    p {
      margin-top: 0;
    }
    .overlay-content {
      border: 1px solid #dddddd;
      padding: 10px;
      background: #ffffff;
      margin: 0;
      font-size: 12px;
      font-family: Arial;
      box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
    }

    .overlay-content li {
      list-style: none;
      line-height: 30px;
      padding: 0 5px;
      cursor: pointer;
    }

    .overlay-content li:hover {
      background: #f8f8f8;
    }

    .overlay-content li:last-child {
      border-width: 0;
    }
  `

  const [value, setValue] = useState(null)
  const [visible, setVisible] = useState(false)

  const handleSelect = val => {
    setVisible(false)
    setValue(val)
  }

  const onVisibleChange = vis => {
    setVisible(vis)
  }

  const popupContent = (
    <Menu onChange={handleSelect} onMouseDown={preventDefault} />
  )

  return (
    <Wrapper>
      <Select
        placeholder="custom popupContent"
        visible={visible}
        onVisibleChange={onVisibleChange}
        value={value}
        popupContent={popupContent}
        popupContainer={node => node.parentNode}
      />
    </Wrapper>
  )
}

export default Demo15
