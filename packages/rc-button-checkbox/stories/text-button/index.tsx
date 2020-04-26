import React, { useCallback } from 'react'
import ButtonCheckbox from '@alicloud/console-components-button-checkbox'

const TextButton: React.FC<{}> = () => {
  const handleChange = useCallback((selectedIds) => {
    console.log('selectedIds:', selectedIds)
  }, [])

  return (
    <div>
      <h3>请选择城市：</h3>
      <ButtonCheckbox.Group defaultValue={['beijing']} onChange={handleChange}>
        <ButtonCheckbox text id="beijing">
          北京
        </ButtonCheckbox>
        <ButtonCheckbox text id="shanghai">
          上海
        </ButtonCheckbox>
        <ButtonCheckbox disabled text id="hangzhou">
          杭州
        </ButtonCheckbox>
        <ButtonCheckbox text id="shenzhen">
          深圳
        </ButtonCheckbox>
      </ButtonCheckbox.Group>
    </div>
  )
}

export default TextButton
