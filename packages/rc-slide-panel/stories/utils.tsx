import React, { useState } from 'react'
import { Button, Input, Select } from '@alicloud/console-components'
import Info from '@alicloud/console-components-info'

const { Option } = Select

/* eslint-disable @typescript-eslint/explicit-function-return-type */

export const useTextSetter = (title: React.ReactNode, init?: string) => {
  const [text, setText] = useState<string | undefined>(init)
  return [
    text,
    setText,
    <Info title={title}>
      <Info.Content>
        <Input
          value={text}
          onChange={v => {
            setText(v)
          }}
        />
        <Button
          onClick={() => {
            setText(undefined)
          }}
        >
          重置为undefined
        </Button>
      </Info.Content>
    </Info>,
  ] as const
}

export const useTextAreaSetter = (title: React.ReactNode, init?: string) => {
  const [text, setText] = useState<string | undefined>(init)
  return [
    text,
    setText,
    <Info title={title}>
      <Info.Content>
        <Input.TextArea
          value={text}
          onChange={v => {
            setText(v)
          }}
        />
        <Button
          onClick={() => {
            setText(undefined)
          }}
        >
          重置为undefined
        </Button>
      </Info.Content>
    </Info>,
  ] as const
}

export const useBoolSetter = (title: React.ReactNode, init?: boolean) => {
  const [flag, setFlag] = useState<boolean | undefined>(init)
  return [
    flag,
    setFlag,
    <Info title={title}>
      <Select
        value={flag}
        onChange={v => {
          if (v === 'undefined') setFlag(undefined)
          else setFlag(v)
        }}
        placeholder="undefined"
      >
        <Option value="undefined">undefined</Option>
        <Option value>true</Option>
        <Option value={false}>false</Option>
      </Select>
    </Info>,
  ] as const
}
