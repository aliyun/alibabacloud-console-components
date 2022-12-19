import React from 'react'
import { Grid } from '@alicloud/console-components'
import { shallow } from 'enzyme'
import Label from '../src/Label'
import { labelClassName } from '../src/constants'

const { Col } = Grid

describe('Label', () => {
  test('className, children, restProps should work', () => {
    const wrapper = shallow(
      <Label className="custom-classname" align="bottom">
        <div>I am children</div>
      </Label>
    )
    const target = wrapper.find(Col)
    expect(target.hasClass(labelClassName)).toBe(true)
    expect(target.hasClass('custom-classname')).toBe(true)
    expect(target.containsMatchingElement(<div>I am children</div>)).toBe(true)
    expect(target.prop('align')).toBe('bottom')
  })
})
