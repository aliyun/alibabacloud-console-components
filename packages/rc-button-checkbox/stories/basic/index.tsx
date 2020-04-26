import React, { useCallback, useState } from 'react'
import ButtonCheckbox from '@alicloud/console-components-button-checkbox'
import styled from 'styled-components';

const BasicDemo: React.FC<{}> = () => {
  const [value, setValue] = useState(['1'])

  const handleChange = useCallback((selectedIds: string[], e: React.SyntheticEvent) => {
		setValue(selectedIds)
		console.log('e:', e);
  }, [])

  console.log('value:', value)

  return (
    <Wrapper>
      <h3>请选择：</h3>
      <ButtonCheckbox.Group value={value} onChange={handleChange}>
        <ButtonCheckbox id="1">
          选项一
        </ButtonCheckbox>
        <ButtonCheckbox id="2">
					选项二
        </ButtonCheckbox>
        <ButtonCheckbox disabled id="3">
					选项三
        </ButtonCheckbox>
        <ButtonCheckbox id="4">
          选项四
        </ButtonCheckbox>
        <ButtonCheckbox id="5">
					选项五
        </ButtonCheckbox>
        <ButtonCheckbox id="6">
					选项六
        </ButtonCheckbox>
        <ButtonCheckbox id="7">
					选项七
        </ButtonCheckbox>
      </ButtonCheckbox.Group>
    </Wrapper>
  )
}

export default BasicDemo


const Wrapper = styled.div`
	.aaa {
		border: 1px solid red;
	}
`