import React, { useCallback, useState, MouseEvent } from 'react'
import { ButtonCheckbox } from '@alicloud/console-components-button'

const { Group } = ButtonCheckbox

const BasicDemo: React.FC<{}> = () => {
  const [value, setValue] = useState(['1'])

  const handleChange = useCallback((selectedIds: string[]) => {
    console.log('selectedIds:', selectedIds)
    setValue(selectedIds)
  }, [])

  const handleClick = useCallback((id: string, e: MouseEvent) => {
    console.log('id:', id)
    console.log('e:', e)
  }, [])

  return (
    <div>
      <h3>请选择：</h3>
      <Group value={value} onChange={handleChange}>
        <ButtonCheckbox onClick={handleClick} id="1">
          选项一
        </ButtonCheckbox>
        <ButtonCheckbox onClick={handleClick} id="2">
          选项二
        </ButtonCheckbox>
        <ButtonCheckbox onClick={handleClick} disabled id="3">
          选项三
        </ButtonCheckbox>
        <ButtonCheckbox onClick={handleClick} id="4">
          选项四
        </ButtonCheckbox>
        <ButtonCheckbox onClick={handleClick} id="5">
          选项五
        </ButtonCheckbox>
        <ButtonCheckbox onClick={handleClick} id="6">
          选项六
        </ButtonCheckbox>
        <ButtonCheckbox onClick={handleClick} id="7">
          选项七
        </ButtonCheckbox>
      </Group>
    </div>
  )
}

export default BasicDemo
