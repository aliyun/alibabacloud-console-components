import React from 'react'
import { shallow } from 'enzyme'
import PresentationNav from '../../src/nav/Presentation'

describe('PresentationNav', () => {
  it('should render passed in children', () => {
    const wrapper = shallow(
      <PresentationNav>
        <p>I am children</p>
      </PresentationNav>
    )
    expect(wrapper.children().equals(<p>I am children</p>)).toBe(true)
  })
  it('should generate correct className from props', () => {
    let wrapper
    wrapper = shallow(<PresentationNav />)
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="wind-rc-app-layout-nav wind-rc-app-layout-nav-collapsible"
      />
    `)
    wrapper = shallow(<PresentationNav collapsed />)
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="wind-rc-app-layout-nav wind-rc-app-layout-nav-collapsible wind-rc-app-layout-nav-collapsible-collapsed"
      />
    `)
    wrapper = shallow(
      <PresentationNav
        collapsed
        className="custom-classname-1 custom-classname-2"
      />
    )
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="wind-rc-app-layout-nav wind-rc-app-layout-nav-collapsible wind-rc-app-layout-nav-collapsible-collapsed custom-classname-1 custom-classname-2"
      />
    `)
  })
  it('should pass on style', () => {
    const wrapper = shallow(<PresentationNav style={{ zIndex: 2123 }} />)
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="wind-rc-app-layout-nav wind-rc-app-layout-nav-collapsible"
        style={
          Object {
            "zIndex": 2123,
          }
        }
      />
    `)
  })
})
