import React from 'react'
import { shallow, mount } from 'enzyme'
import * as Constants from '../src/constants'
import AppLayout from '../src'
import PragmaticNav from '../src/nav/index'

jest.mock('../src/constants')

describe('AppLayout', () => {
  let wrapper
  afterEach(() => {
    wrapper = null
  })
  it('should render children and nav', () => {
    wrapper = shallow(
      <AppLayout nav={<div>I am nav</div>}>
        <p>I am children</p>
      </AppLayout>
    )
    expect(wrapper.contains(<div>I am nav</div>)).toBe(true)
    expect(wrapper.contains(<p>I am children</p>)).toBe(true)
  })
  test('navCollapsed should work', () => {
    wrapper = shallow(
      <AppLayout nav={<div>I am nav</div>}>
        <p>I am children</p>
      </AppLayout>
    )
    expect(wrapper.find(PragmaticNav).prop('collapsed')).toBe(undefined)

    wrapper.setProps({ navCollapsed: false })
    expect(wrapper.find(PragmaticNav).prop('collapsed')).toBe(false)

    wrapper.setProps({ navCollapsed: true })
    expect(wrapper.find(PragmaticNav).prop('collapsed')).toBe(true)
  })
  describe('classname correctness', () => {
    it('should pass on className', () => {
      wrapper = mount(
        <AppLayout
          className="clsName1 clsName2"
          navClassName="clsName3 clsName4"
          contentClassName="clsName5 clsName6"
        />
      )
      expect(
        wrapper.find('div.wind-rc-app-layout.clsName1.clsName2').length
      ).toBe(1)
      expect(wrapper.find('div.clsName3.clsName4').length).toBe(1)
      expect(
        wrapper.find('div.wind-rc-app-layout-content.clsName5.clsName6').length
      ).toBe(1)
    })
    test('build in class name should be configuable', () => {
      Constants.baseClassName = 'custom-app-layout'
      Constants.navClassName = 'custom-nav'
      Constants.navCollapsedClassName = 'custom-nav-collapsed'
      Constants.navCollapsibleClassName = 'custom-nav-collapsible'
      wrapper = mount(
        <AppLayout
          className="clsName1 clsName2"
          navClassName="clsName3 clsName4"
          contentClassName="clsName5 clsName6"
          navCollapsed
        />
      )
      expect(
        wrapper.find('div.custom-app-layout.clsName1.clsName2').length
      ).toBe(1)
      expect(
        wrapper.find(
          'div.custom-nav.custom-nav-collapsible.' +
            'custom-nav-collapsed.clsName3.clsName4'
        ).length
      ).toBe(1)
      expect(
        wrapper.find('div.custom-app-layout-content.clsName5.clsName6').length
      ).toBe(1)
    })
  })
  describe('style', () => {
    // it('should pass style', () => {
    //   wrapper = shallow(
    //     <AppLayout
    //       contentStyle={{ zIndex: 333 }}
    //       style={{ zIndex: 111 }}
    //       navStyle={{ zIndex: 222 }}
    //     />
    //   )
    //   expect(wrapper.prop('style')).toMatchInlineSnapshot(`
    //                                                     Object {
    //                                                       "zIndex": 111,
    //                                                     }
    //                                       `)
    //   expect(wrapper.childAt(0).prop('style')).toMatchInlineSnapshot(`
    //                                                     Object {
    //                                                       "zIndex": 222,
    //                                                     }
    //                                       `)
    //   expect(wrapper.childAt(1).prop('style')).toMatchInlineSnapshot(`
    //                                                     Object {
    //                                                       "zIndex": 333,
    //                                                     }
    //                                       `)
    // })
    it('should handle unusual value', () => {
      wrapper = shallow(
        <AppLayout
          contentStyle={null}
          style={null}
          navStyle={null}
          adjustHeight={123}
        />
      )
      expect(wrapper.prop('style')).toMatchInlineSnapshot(`
        Object {
          "height": "calc(100vh - 123px)",
        }
      `)
      expect(wrapper.childAt(0).prop('style')).toMatchInlineSnapshot('null')
      expect(wrapper.childAt(1).prop('style')).toMatchInlineSnapshot('null')
    })
    it('should adjustStyle if adjustHeight is given', () => {
      wrapper = shallow(
        <AppLayout
          adjustHeight={123}
          contentStyle={{ zIndex: 333 }}
          style={{ zIndex: 111 }}
          navStyle={{ zIndex: 222 }}
        />
      )
      expect(wrapper.prop('style')).toMatchInlineSnapshot(`
                                                Object {
                                                  "height": "calc(100vh - 123px)",
                                                  "zIndex": 111,
                                                }
                                    `)
      // pass an exist id as adjustHeight
      const div = document.createElement('div')
      div.id = 'testDiv'
      jest.spyOn(div, 'offsetHeight', 'get').mockImplementation(() => 456)
      document.body.appendChild(div)
      wrapper.setProps({ adjustHeight: 'testDiv' })
      expect(wrapper.prop('style')).toMatchInlineSnapshot(`
                                Object {
                                  "height": "calc(100vh - 456px)",
                                  "zIndex": 111,
                                }
                        `)
      // pass an non-exist id as adjustHeight
      document.body.removeChild(div)
      expect(document.getElementById('testDiv')).toBeNull()
      // `wrapper.update()` doesn't trigger rerender here, I don't know why
      // so I use wrapper.setProps here
      wrapper.setProps({ adjustHeight: 'testDiv' })
      expect(wrapper.prop('style')).toMatchInlineSnapshot(`
                        Object {
                          "height": "calc(100vh - 0px)",
                          "zIndex": 111,
                        }
                  `)
    })
  })
})
