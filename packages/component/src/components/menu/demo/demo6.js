import React, { useState } from 'react'
import { Menu } from '@alicloud/console-components'
import styled from 'styled-components'

const { CheckboxItem, RadioItem, Divider } = Menu

const initsexs = ['male', 'female']
const initballs = ['football', 'basketball', 'volleyball']

const Demo = () => {
  const [selectedSex, setSelectedSex] = useState('male')
  const [balls, setBalls] = useState([])

  const handleSexCheck = key => {
    setSelectedSex(key)
  }

  const handleBallCheck = (key, check) => {
    let newKeys
    const index = balls.indexOf(key)
    if (check && index === -1) {
      newKeys = balls.concat(key)
    } else if (!check && index > -1) {
      newKeys = [...balls.slice(0, index), ...balls.slice(index + 1)]
    }

    if (newKeys) {
      setBalls(newKeys)
    }
  }

  return (
    <SMenu>
      {initsexs.map(sex => (
        <RadioItem
          key={sex}
          checked={selectedSex === sex}
          onChange={() => {
            handleSexCheck(sex)
          }}
        >
          {sex}
        </RadioItem>
      ))}
      <Divider key="divider" />
      {initballs.map(ball => (
        <CheckboxItem
          key={ball}
          checked={balls.indexOf(ball) > -1}
          onChange={checked => {
            handleBallCheck(ball, checked)
          }}
        >
          {ball}
        </CheckboxItem>
      ))}
    </SMenu>
  )
}

export default Demo

export const demoMeta = {
  zhName: '自定义菜单项选择',
  zhDesc: `展示自定义组合菜单项可选的用法。`,
}

const SMenu = styled(Menu)`
  width: 200px;
`
