import React from 'react'
import { shallow } from 'enzyme'
import PragmaticNav from '../../src/nav/index'
import CollapseController from '../../src/nav/CollapseController'
import PresentationNav from '../../src/nav/Presentation'

describe('PragmaticNav', () => {
  let wrapper
  afterEach(() => {
    wrapper = null
  })

  it('should correctly render CollapseController', () => {
    wrapper = shallow(<PragmaticNav />)

    expect(wrapper.is(CollapseController)).toBe(true)
    expect(wrapper.prop('collapsed')).toBe(undefined)

    wrapper.setProps({ collapsed: false })
    expect(wrapper.prop('collapsed')).toBe(false)

    wrapper.setProps({ collapsed: true })
    expect(wrapper.prop('collapsed')).toBe(true)
  })

  describe('renderWith', () => {
    it('should return PresentationNav, with correct props', () => {
      wrapper = shallow(<PragmaticNav someProp="some value" />)
      let rendered = wrapper.renderProp('children')({ collapsed: true })
      expect(rendered.is(PresentationNav)).toBe(true)
      expect(rendered.prop('collapsed')).toBe(true)
      expect(rendered.prop('someProp')).toBe('some value')

      rendered = wrapper.renderProp('children')({ collapsed: false })
      expect(rendered.is(PresentationNav)).toBe(true)
      expect(rendered.prop('collapsed')).toBe(false)
      expect(rendered.prop('someProp')).toBe('some value')

      rendered = wrapper.renderProp('children')({})
      expect(rendered.is(PresentationNav)).toBe(true)
      expect(rendered.prop('collapsed')).toBe(undefined)
      expect(rendered.prop('someProp')).toBe('some value')
    })

    test(
      "if PragmaticNav's children is react element, " +
        'renderWith should render the react element, ' +
        'and inject some props into it',
      () => {
        wrapper = shallow(
          <PragmaticNav>
            <p>I am children</p>
          </PragmaticNav>
        )
        const mockSetCollapse = jest.fn()
        const rendered = wrapper.renderProp('children')({
          collapsed: true,
          setCollapse: mockSetCollapse,
        })
        expect(
          rendered.children().matchesElement(<p open={false}>I am children</p>)
        ).toBe(true)

        const toggleOpen = rendered.children().prop('toggleOpen')
        expect(mockSetCollapse).toHaveBeenCalledTimes(0)
        toggleOpen(true)
        expect(mockSetCollapse).toHaveBeenCalledTimes(1)
        expect(mockSetCollapse.mock.calls[0][0]).toBe(false)
        toggleOpen(false)
        expect(mockSetCollapse).toHaveBeenCalledTimes(2)
        expect(mockSetCollapse.mock.calls[1][0]).toBe(true)
      }
    )

    test(
      "if PragmaticNav's children is react element, " +
        'when we injecting props to it, ' +
        'we should handle props name confict',
      () => {
        wrapper = shallow(
          <PragmaticNav>
            <p
              id="child-id"
              open="I will prevent prop injection!"
            >
              I am children
            </p>
          </PragmaticNav>
        )
        const mockSetCollapse = jest.fn()
        const rendered = wrapper.renderProp('children')({
          collapsed: false,
          setCollapse: mockSetCollapse,
        })
        expect(rendered.find('#child-id').props()).toMatchInlineSnapshot(`
        Object {
          "children": "I am children",
          "id": "child-id",
          "open": "I will prevent prop injection!",
        }
      `)
      }
    )
    test(
      "if PragmaticNav's children is react element, " +
        'when we injecting toggleOpen prop to it,' +
        'we should merge it with original toggleOpen prop',
      () => {
        const mockFn = jest.fn()
        wrapper = shallow(
          <PragmaticNav>
            <p
              id="child-id"
              toggleOpen={mockFn}
            >
              I am children
            </p>
          </PragmaticNav>
        )
        const mockSetCollapse = jest.fn()
        const rendered = wrapper.renderProp('children')({
          collapsed: false,
          setCollapse: mockSetCollapse,
        })
        expect(rendered.find('#child-id')).toMatchInlineSnapshot(`
                        <p
                          id="child-id"
                          open={true}
                          toggleOpen={[Function]}
                        >
                          I am children
                        </p>
                  `)
        const injectedToggleOpen = rendered.find('#child-id').prop('toggleOpen')
        expect(mockFn).toHaveBeenCalledTimes(0)
        expect(mockSetCollapse).toHaveBeenCalledTimes(0)
        injectedToggleOpen(true)
        expect(mockFn).toHaveBeenCalledTimes(1)
        expect(mockFn.mock.calls[0]).toEqual([true])
        expect(mockSetCollapse).toHaveBeenCalledTimes(1)
        expect(mockSetCollapse.mock.calls[0]).toEqual([false])
      }
    )

    test(
      "if PragmaticNav's children is a function, " +
        'renderWith should call this function with correct parameter, ' +
        'and render its return value',
      () => {
        const mockFn = jest.fn(() => <div>I am returned from mockFn</div>)
        wrapper = shallow(<PragmaticNav>{mockFn}</PragmaticNav>)
        const mockSetCollapse = jest.fn()
        const rendered = wrapper.renderProp('children')({
          collapsed: true,
          setCollapse: mockSetCollapse,
        })
        expect(rendered).toMatchInlineSnapshot(`
                                                <PresentationNav
                                                  collapsed={true}
                                                >
                                                  <div>
                                                    I am returned from mockFn
                                                  </div>
                                                </PresentationNav>
                                    `)
        expect(mockFn).toHaveBeenCalledTimes(1)
        expect(mockFn.mock.calls[0]).toEqual([
          {
            collapsed: true,
            setCollapse: mockSetCollapse,
          },
        ])
      }
    )
  })
})
