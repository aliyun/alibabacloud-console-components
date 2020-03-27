import React, { useCallback } from 'react'
import ButtonCheckbox from '@alicloud/console-components-button-checkbox'

const TextButton: React.FC<{}> = () => {
  const handleChange = useCallback((selectedIds) => {
    console.log('selectedIds:', selectedIds)
  }, [])

  return (
    <div>
      <h3>请设置周期：</h3>
      <ButtonCheckbox.Group onChange={handleChange}>
        <ButtonCheckbox style={{ width: '32px', padding: 0 }} id="1">
          一
        </ButtonCheckbox>
        <ButtonCheckbox style={{ width: '32px', padding: 0 }} id="2">
					二
        </ButtonCheckbox>
        <ButtonCheckbox style={{ width: '32px', padding: 0 }} disabled id="3">
					三
        </ButtonCheckbox>
        <ButtonCheckbox style={{ width: '32px', padding: 0 }} id="4">
          四
        </ButtonCheckbox>
        <ButtonCheckbox style={{ width: '32px', padding: 0 }} id="5">
					五
        </ButtonCheckbox>
        <ButtonCheckbox style={{ width: '32px', padding: 0 }} id="6">
					六
        </ButtonCheckbox>
        <ButtonCheckbox style={{ width: '32px', padding: 0 }} id="7">
					七
        </ButtonCheckbox>
      </ButtonCheckbox.Group>
    </div>
  )
}

export default TextButton
