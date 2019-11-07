import React from 'react'
import { shallow } from 'enzyme'
import CollapseController from '../../src/nav/CollapseController'

describe('CollapseController', () => {
  let wrapper
  it('should render children when children is react element', () => {
    wrapper = shallow(
      <CollapseController>
        <p>I am children</p>
      </CollapseController>
    )
    expect(wrapper.equals(<p>I am children</p>)).toBe(true)
  })
  it(
    'should call children when children is function, ' +
      'and render its return value',
    () => {
      const fn = jest.fn(() => <div>Returned children</div>)
      wrapper = shallow(<CollapseController>{fn}</CollapseController>)
      expect(fn).toHaveBeenCalledTimes(1)
      expect(wrapper.equals(<div>Returned children</div>)).toBe(true)
    }
  )
  it(
    'should call children with {collapsed, setCollapse}, ' +
      'and the setCollapse should be functional',
    () => {
      const fn = jest.fn()
      wrapper = shallow(<CollapseController>{fn}</CollapseController>)
      expect(fn).toHaveBeenCalledTimes(1)
      let param = fn.mock.calls[0][0]
      expect(param.collapsed).toBe(false)

      param.setCollapse(true)
      expect(fn).toHaveBeenCalledTimes(2)
      param = fn.mock.calls[1][0]
      expect(param.collapsed).toBe(true)

      param.setCollapse(false)
      expect(fn).toHaveBeenCalledTimes(3)
      param = fn.mock.calls[2][0]
      expect(param.collapsed).toBe(false)
    }
  )

  it(
    'should rerender when props.collapsed change, ' +
      'and adapt to the props.collapsed',
    () => {
      const fn = jest.fn()
      const calls = fn.mock.calls
      wrapper = shallow(<CollapseController>{fn}</CollapseController>)
      expect(fn).toHaveBeenCalledTimes(1)
      expect(calls[0][0].collapsed).toBe(false)

      wrapper.setProps({ collapsed: false })
      expect(fn).toHaveBeenCalledTimes(2)
      expect(calls[1][0].collapsed).toBe(false)

      wrapper.setProps({ collapsed: true })
      expect(fn).toHaveBeenCalledTimes(3)
      expect(calls[2][0].collapsed).toBe(true)
    }
  )
})
