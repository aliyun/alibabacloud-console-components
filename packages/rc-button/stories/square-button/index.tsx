import React, { useCallback } from 'react'
import styled from 'styled-components'
import { ButtonCheckbox } from '@alicloud/console-components-button'

const { Group } = ButtonCheckbox

const TextButton: React.FC<{}> = () => {
  const handleChange = useCallback((selectedIds) => {
    console.log('selectedIds:', selectedIds)
  }, [])

  return (
    <Wrapper>
      <h3>请设置周期：</h3>
      <Group onChange={handleChange}>
        <ButtonCheckbox className="square-button" id="1">
          一
        </ButtonCheckbox>
        <ButtonCheckbox className="square-button" id="2">
          二
        </ButtonCheckbox>
        <ButtonCheckbox className="square-button" disabled id="3">
          三
        </ButtonCheckbox>
        <ButtonCheckbox className="square-button" id="4">
          四
        </ButtonCheckbox>
        <ButtonCheckbox className="square-button" id="5">
          五
        </ButtonCheckbox>
        <ButtonCheckbox className="square-button" id="6">
          六
        </ButtonCheckbox>
        <ButtonCheckbox className="square-button" id="7">
          七
        </ButtonCheckbox>
      </Group>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .square-button {
    width: 32px;
    padding: 0;
  }
`

export default TextButton
