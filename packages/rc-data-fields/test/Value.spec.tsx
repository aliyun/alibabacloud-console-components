import React from 'react'
import { Grid } from '@alicloud/console-components'
import { shallow } from 'enzyme'
import Value from '../src/Value'
import { valueClassName } from '../src/constants'

const { Col } = Grid

describe('Value', () => {
  test('className, children, restProps should work', () => {
    const wrapper = shallow(
      <Value className="custom-classname" align="stretch">
        <div>I am children</div>
      </Value>
    )
    const target = wrapper.find(Col)
    expect(target.hasClass(valueClassName)).toBe(true)
    expect(target.hasClass('custom-classname')).toBe(true)
    expect(target.containsMatchingElement(<div>I am children</div>)).toBe(true)
    expect(target.prop('align')).toBe('stretch')
  })
})
